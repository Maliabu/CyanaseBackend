# Generated by Django 4.1.3 on 2023-06-12 11:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_riskprofile_risk_analysis_riskprofile_score'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Riskprofile',
        ),
    ]
