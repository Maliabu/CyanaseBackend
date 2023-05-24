import datetime
from .models import *
from .helper import helper
from .v1.locale import Locale
from django.contrib.auth.models import User


class Deposits:
    def __init__(self):
        self.help = helper.Helper()

    def getDeopsitById(self, request,lang, depositid):
        if Deposit.objects.filter(pk=depositid).exists():
            ddeposit = Deposit.objects.filter(pk=depositid).get()
            return{
                "payment_means": ddeposit.payment_means,
                "deposit_category": ddeposit.deposit_category,
                "deposit_amount": ddeposit.deposit_amount,
                "currency": ddeposit.currency,
                "account_type": ddeposit.account_type.pk,
                "created": ddeposit.created,
            }
        else:
            return {
                "0"
            }
    
    def getDeopsitByGoalId(self, request,lang, goalid):
        if Deposit.objects.filter(goal_id=goalid).exists():
            ddeposit = Deposit.objects.filter(goal_id=goalid)
            totalDeposit = 0
            getDeposits = []
            goal = Goal.objects.filter(pk=goalid)
            for deposit in ddeposit:
                amount = deposit.deposit_amount
                totalDeposit += amount
                for goals in goal:
                    getDeposits.append({
                        "deposit_id":deposit.id,
                        "deposit_amount":deposit.deposit_amount,
                        "currency":deposit.currency,
                        "deposit_category":deposit.deposit_category,
                        "payment_means":deposit.payment_means,
                        "account_type":deposit.account_type.code_name
                    })
            return totalDeposit,getDeposits
        else:
            return {
                "0"
            }
    
    def getAllDeposits(self,request,lang,user):
        deposits = []
        totalDepositAmount = 0
        totalUGX = 0
        totalUSD = 0
        totalDepositUGX = 0
        totalDepositUSD = 0
        userid = request.user.id
        ddeposits = Deposit.objects.filter(user_id=userid)
        for deposit in ddeposits:
            if deposit.user.id == userid:
                amount = deposit.deposit_amount
                currency = deposit.currency
                if currency == "UGX":
                    totalUGX += amount
                else:
                    totalUSD += amount
                    totalDepositAmount += amount
            depositid = deposit.pk
            deposits.append({
                "user":deposit.user.username,
                "user_id":deposit.user.id,
                "deposit_id":depositid,
                "payment_means": deposit.payment_means,
                "deposit_category": deposit.deposit_category,
                "deposit_amount": deposit.deposit_amount,
                "currency": deposit.currency,
                "account_type": deposit.account_type.pk,
                "created": deposit.created,
            })
        goalDepositsUGX = Goals.getAllUserGoals(self,request,lang,user)[0]
        goalDepositUSD = Goals.getAllUserGoals(self,request,lang,user)[1]
        
        totalDepositUGX = totalUGX - goalDepositsUGX
        totalDepositUSD = totalUSD - goalDepositUSD
        return totalDepositUGX,totalDepositUSD,totalUGX,totalUSD,deposits
    
    def depositToGoal(self,request,lang,user,goalid):
        current_datetime = datetime.datetime.now()
        payment_means = request.data["payment_means"]
        deposit_category = request.data["deposit_category"]
        deposit_amount = request.data["deposit_amount"]
        currency = request.data["currency"]
        account_type = request.data["account_type"]
        # get the user from Authorised user in token
        userid = request.user.id
        user_name = request.user.first_name
        # print(userid)
        # # create deposit
        account_type = AccountType.objects.filter(code_name=account_type).get()
        deposit = Deposit.objects.create(
            deposit_amount=float(request.data["deposit_amount"]),
            payment_means=request.data["payment_means"],
            user=User(pk=int(userid)),
            goal=Goal(pk=int(goalid)),
            deposit_category=deposit_category,
            currency=currency,
            account_type=account_type
        )
        deposit.save()
        # # get deposit id
        depositid = deposit.id
        # # Get the user making the deposit by id
        deposit = self.getDeopsitById(request, lang, depositid)
        goal = Goal.objects.filter(pk=goalid).get()
        goalname = goal.goal
        goal.save()
        return {
            "message": f"You have successfully deposited {currency} {deposit_amount} to {goalname}",
            "success": True,
            "user_id": userid,
            "goal_id": goalid,
            "user_name": user_name,
            "deposit_id": depositid,
            "deposit": deposit,
            "time of deposit": current_datetime
        }



    def createDeposit(self, request, lang, user):
        current_datetime = datetime.datetime.now()
        payment_means = request.data["payment_means"]
        deposit_category = request.data["deposit_category"]
        deposit_amount = request.data["deposit_amount"]
        currency = request.data["currency"]
        account_type = request.data["account_type"]
        # get the user from Authorised user in token
        userid = request.user.id
        user_name = request.user.first_name
        # print(userid)
        # # create deposit
        account_type = AccountType.objects.filter(code_name=account_type).get()
        deposit = Deposit.objects.create(
            deposit_amount=float(request.data["deposit_amount"]),
            payment_means=request.data["payment_means"],
            user=User(pk=int(userid)),
            deposit_category=deposit_category,
            currency=currency,
            account_type=account_type
        )
        deposit.save()
        # # get deposit id
        depositid = deposit.id
        # # Get the user making the deposit by id
        deposit = self.getDeopsitById(request, lang, depositid)
        return {
            "message": f"You have successfully deposited {currency} {deposit_amount} to your {account_type} account",
            "success": True,
            "user_id": userid,
            "user_name": user_name,
            "deposit_id": depositid,
            "deposit": deposit,
            "time of deposit": current_datetime
        }

class Goals:
    def __init__(self):
        self.help = helper.Helper()
        
    def createGoal(self, request,lang,user,deposit):
        current_datetime = datetime.datetime.now()
        goalname = request.data["goal_name"]
        goalperiod = request.data["goal_period"]
        goalamount = request.data["goal_amount"]
        deposittype = request.data["deposit_type"]
        dreminderday = request.data["deposit_reminder_day"]
        userid = request.user.id
        depositid = deposit["deposit_id"]
        goal = Goal.objects.create(
            goal = goalname,
            goal_period = goalperiod,
            goal_amount = goalamount,
            user=User(pk=int(userid)),
            deposit=Deposit(pk=int(depositid)),
            deposit_type = deposittype,
            deposit_reminder_day = dreminderday
        )
        goal.save()
        goalid = goal.id
        goal = self.getGoalById(request,lang,goalid,deposit)
        return{
            "message": f"You have successfully created a goal to {goalname} of {goalamount} within {goalperiod} years",
            "success": True,
            "user_id":userid,
            "goalid": goalid,
            "goal": goal,
            "time goal was created": current_datetime
        }
    
    # def getGoalById(self,request,lang,goalid,deposit):
    #     if Goal.objects.filter(pk=goalid).exists():
    #         ggoal = Goal.objects.filter(pk=goalid).get()
    #         return{
    #             "goal_name": ggoal.goal,
    #             "goal_amount": ggoal.goal_amount,
    #             "goal_period": ggoal.goal_period,
    #             "deposit_type": ggoal.deposit_type,
    #             "deposit_reminder_day": ggoal.deposit_reminder_day,
    #             "created": ggoal.created,
    #             "deposit":deposit
    #         }
    #     else:
    #         return {
    #             "no id found"
    #         }
            
    def getGoalById(self, request,lang, goalid):
        if Goal.objects.filter(pk=goalid).exists():
            goal = Goal.objects.filter(pk=goalid).get()
            return{
                "user_id":goal.user.id,
                "goal_id":goalid,
                "goal_name": goal.goal,
                "goal_amount": goal.goal_amount,
                "goal_period": goal.goal_period,
                "deposit_type": goal.deposit_type,
                "deposit_reminder_day": goal.deposit_reminder_day,
                "created": goal.created,
                "deposit":{
                    "deposit_id":goal.deposit.pk,
                    "payment_means": goal.deposit.payment_means,
                    "deposit_category": goal.deposit.deposit_category,
                    "deposit_amount": goal.deposit.deposit_amount,
                    "currency": goal.deposit.currency,
                    "account_type": goal.deposit.account_type.pk,
                    "created": goal.deposit.created,
                    },
                "created": goal.created
            }
        else:
            return {
                "no id found"
            }
    
    def getAllUserGoals(self,request,lang,user):
        goals = []
        totalDepositAmount = 0
        totalUGX = 0
        totalUSD = 0
        userid = request.user.id
        ggoals = Goal.objects.filter(user_id=userid)
        for goal in ggoals:
            goalid = goal.pk
            deposit = Deposits.getDeopsitByGoalId(Deposits,request,lang,goalid=goalid)
            goals.append({
                "user_id":goal.user.id,
                "goal_id":goalid,
                "goal_name": goal.goal,
                "goal_amount": goal.goal_amount,
                "goal_period": goal.goal_period,
                "deposit_type": goal.deposit_type,
                "deposit_reminder_day": goal.deposit_reminder_day,
                "created": goal.created,
                "deposit": deposit
                }
            )
        return totalUGX,totalUSD,goals,goalid