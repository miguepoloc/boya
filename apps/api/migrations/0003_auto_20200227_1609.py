# Generated by Django 2.2.10 on 2020-02-27 21:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200227_1405'),
    ]

    operations = [
        migrations.AlterField(
            model_name='temperatura',
            name='fecha',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='temperatura',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
