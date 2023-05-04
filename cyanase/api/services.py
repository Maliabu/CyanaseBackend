import datetime
from .models import Deposit
from .helper import helper
from .v1.locale import Locale


class Deposits:
    def __init__(self):
        self.help = helper.Helper()
        
    def createDeposit(self, request, lang):
        current_datetime = datetime.datetime.now()
        payment_means = request.data["payment_means"]
        deposit_category = request.data["deposit_category"]
        deposit_amount = request.data["deposit_amount"]
        currency = request.data["currency"]
        account_type = request.data["account_type"]
        # create deposit
        deposit = Deposit.objects.create(deposit_amount=request.data["deposit_amount"], payment_means=request.data["payment_means"])
        deposit.deposit_amount=deposit_amount
        deposit.payment_means=payment_means
        deposit.deposit_category=deposit_category
        deposit.currency=currency
        deposit.account_type=account_type
        deposit.save()
        # get deposit id
        depositid = deposit.id
        # Get the user making the deposit by id
        ddeposit = Deposit.get(pk=depositid)
        ddeposit.save()
        return {
                "message": f"You have successfully deposited {currency} {deposit_amount} to your {account_type} account",
                "success": True,
                "deposit":deposit,
                "time of deposit":current_datetime
            }