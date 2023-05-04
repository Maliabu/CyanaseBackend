# Generated by Django 3.2 on 2023-03-15 09:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_name', models.CharField(max_length=500)),
                ('opening_balance', models.FloatField(default=0)),
                ('account_no', models.CharField(max_length=300)),
                ('is_operational_account', models.BooleanField(default=False)),
                ('is_cash_account', models.BooleanField(default=False)),
                ('is_reconcilable', models.BooleanField(default=False)),
                ('allow_over_drafts', models.BooleanField(default=False)),
                ('narration', models.CharField(blank=True, max_length=3000, null=True)),
                ('is_disabled', models.BooleanField(default=False)),
                ('is_editable', models.BooleanField(default=True)),
                ('is_deletable', models.BooleanField(default=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='AccountType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=200)),
                ('code_name', models.CharField(max_length=200)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('sort_value', models.IntegerField(default=0)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='DepositTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_name', models.CharField(max_length=200)),
                ('code_name', models.CharField(max_length=200)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='DepositType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=200)),
                ('code_name', models.CharField(max_length=200)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('module_name', models.CharField(max_length=255)),
                ('code_name', models.CharField(max_length=255)),
                ('route_name', models.CharField(max_length=255)),
                ('is_a_sub_module', models.BooleanField(default=False)),
                ('has_children', models.BooleanField(default=False)),
                ('main_module_id', models.IntegerField(blank=True, null=True)),
                ('sort_value', models.IntegerField()),
                ('depth', models.IntegerField()),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='PaymentMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('en_payment_method_name', models.CharField(max_length=200)),
                ('code_name', models.CharField(max_length=200)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='PaymentOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('en_payment_option_name', models.CharField(max_length=200)),
                ('code_name', models.CharField(max_length=200)),
                ('payment_option_logo', models.CharField(blank=True, max_length=200, null=True)),
                ('sort_value', models.IntegerField(default=0)),
                ('has_standarded_charge', models.BooleanField(default=False)),
                ('payment_charge', models.FloatField(blank=True, default=0, null=True)),
                ('charge_in_percentage', models.BooleanField(default=True)),
                ('charge_fees_on_user', models.BooleanField(default=True)),
                ('has_pre_inputs', models.BooleanField(default=False)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('payment_method', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymentmethod')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_name', models.CharField(max_length=200)),
                ('code_name', models.CharField(max_length=200)),
                ('payment_logo', models.CharField(blank=True, max_length=200, null=True)),
                ('sort_value', models.IntegerField(default=0)),
                ('has_standarded_charge', models.BooleanField(default=False)),
                ('payment_charge', models.FloatField(blank=True, default=0, null=True)),
                ('charge_in_percentage', models.BooleanField(default=True)),
                ('charge_fees_on_user', models.BooleanField(default=True)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='SupportedCountry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coutry_name', models.CharField(max_length=255)),
                ('coutry_flag', models.CharField(max_length=255)),
                ('country_code', models.CharField(max_length=255)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='SupportedLanguage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lang_name', models.CharField(max_length=255)),
                ('lang_iso_code', models.CharField(max_length=255)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='TimeZone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dispaly_name', models.CharField(max_length=255)),
                ('code_name', models.CharField(max_length=255)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('has_been_modified', models.BooleanField(default=False)),
                ('last_modified', models.DateTimeField()),
                ('country', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.supportedcountry')),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gender', models.CharField(blank=True, max_length=255, null=True)),
                ('phoneno', models.CharField(blank=True, max_length=255, null=True)),
                ('address', models.CharField(blank=True, max_length=30, null=True)),
                ('verification_code', models.CharField(blank=True, max_length=30, null=True)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('profile_picture', models.CharField(blank=True, max_length=255, null=True)),
                ('is_verified', models.BooleanField(default=False)),
                ('is_deleted', models.BooleanField(default=True)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('country', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.supportedcountry')),
                ('language', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.supportedlanguage')),
                ('tmz', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.timezone')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SideMenu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_value', models.IntegerField()),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('has_been_modified', models.BooleanField(default=False)),
                ('last_modified', models.DateTimeField()),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.module')),
            ],
        ),
        migrations.CreateModel(
            name='RegionalPaymentType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_value', models.IntegerField()),
                ('is_disabled', models.BooleanField(default=False)),
                ('is_default', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('has_been_modified', models.BooleanField(default=False)),
                ('last_modified', models.DateTimeField()),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.supportedcountry')),
                ('payment_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymenttype')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentTypeSetting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entry_name', models.CharField(max_length=500)),
                ('entry_code_name', models.CharField(max_length=255)),
                ('has_entry_value', models.BooleanField(default=False)),
                ('entry_value', models.CharField(blank=True, max_length=500, null=True)),
                ('is_required', models.BooleanField(default=True)),
                ('is_default', models.BooleanField(default=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('payment_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymenttype')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentTypeOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_disabled', models.BooleanField(default=False)),
                ('is_default', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('payment_option', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymentoption')),
                ('payment_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymenttype')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentOptionSupport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_disabled', models.BooleanField(default=False)),
                ('is_default', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.supportedcountry')),
                ('payment_option', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymentoption')),
                ('payment_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymenttype')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentOptionSetting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('en_entry_name', models.CharField(max_length=500)),
                ('entry_code_name', models.CharField(max_length=255)),
                ('has_entry_value', models.BooleanField(default=False)),
                ('entry_value', models.CharField(blank=True, max_length=500, null=True)),
                ('is_required', models.BooleanField(default=True)),
                ('is_default', models.BooleanField(default=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('payment_option', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymentoption')),
            ],
        ),
        migrations.CreateModel(
            name='PaymentOptionField',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('en_entry_name', models.CharField(max_length=500)),
                ('entry_code_name', models.CharField(max_length=255)),
                ('has_entry_value', models.BooleanField(default=False)),
                ('entry_value', models.CharField(blank=True, max_length=500, null=True)),
                ('is_a_float', models.BooleanField(default=False)),
                ('is_a_int', models.BooleanField(default=False)),
                ('is_a_string', models.BooleanField(default=True)),
                ('is_required', models.BooleanField(default=True)),
                ('is_default', models.BooleanField(default=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('payment_option', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.paymentoption')),
            ],
        ),
        migrations.CreateModel(
            name='LedgerEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ledger_no', models.IntegerField()),
                ('entry_type', models.CharField(max_length=255)),
                ('is_adjusting_entry', models.BooleanField(default=False)),
                ('amount', models.FloatField(default=0)),
                ('narration', models.CharField(blank=True, max_length=5000, null=True)),
                ('is_disabled', models.BooleanField(default=False)),
                ('is_deleted', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.account')),
            ],
        ),
        migrations.CreateModel(
            name='DashboardMenu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_value', models.IntegerField()),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('has_been_modified', models.BooleanField(default=False)),
                ('last_modified', models.DateTimeField()),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.module')),
            ],
        ),
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currency_locale', models.CharField(max_length=255)),
                ('currency_code', models.CharField(max_length=255)),
                ('currency_symbol', models.CharField(max_length=255)),
                ('exchange_rate', models.FloatField(max_length=500)),
                ('is_indented', models.BooleanField(default=False)),
                ('is_infront', models.BooleanField(default=True)),
                ('decimal_points', models.IntegerField(default=2)),
                ('is_default', models.BooleanField(default=False)),
                ('is_disabled', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('country', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.supportedcountry')),
            ],
        ),
        migrations.AddField(
            model_name='account',
            name='account_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.accounttype'),
        ),
        migrations.AddField(
            model_name='account',
            name='currency',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.currency'),
        ),
        migrations.AddField(
            model_name='account',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]