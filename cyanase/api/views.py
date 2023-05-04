from django.shortcuts import render
# Create your views here.
from django.shortcuts import render, HttpResponse
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from .v1.users.Users import Users
from .services import Deposits

# Create your views here.
DEFAULT_LANG = "en"
_user = Users()
_deposit = Deposits()

class index(APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
    http_method_names = ['get']

    def get(self, request, format=None):
        return HttpResponse("<h2>Invalid Entry point </h2>")


class GetUserView(APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
    http_method_names = ['get']

    def get(self, request, lang, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)


class RegisterUser(APIView):
    authentication_classes = ()
    permission_classes = ()
    http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        return Response(user)

# Generate custom AUTH Token


class CreateUserAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })

class MakeDeposit(APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
    http_method_names = ['post']
    
    def post(self, request, lang, *args, **kwargs):
        lang = DEFAULT_LANG if lang == None else lang
        payment_means = request.data["payment_means"]
        deposit_category = request.data["deposit_category"]
        deposit_amount = request.data["deposit_amount"]
        currency = request.data["currency"]
        account_type = request.data["account_type"]
        user = _user.getAuthUser(request, lang)
        ##########################
        if not payment_means:
            return Response({
                'message': "This field is required",
                "type": "payment_means",
                'success': False
            }, status=400)
        elif not account_type:
            return Response({
                'message': "This field is required",
                "type": "account_type",
                'success': False
            })
        elif not deposit_category:
            return Response({
                'message': "This field is required",
                "type": "deposit_category",
                'success': False
            })
        elif not deposit_amount:
            return Response({
                'message': "This field is required",
                "type": "deposit_amount",
                'success': False
            })
        elif not currency:
            return Response({
                'message': "This field is required",
                "type": "currency",
                'success': False
            }, status=400)
        else:
            deposit = _deposit.createDeposit(request, lang)
            return Response(deposit, user)
