# Generated by Django 2.2.10 on 2020-05-15 03:45

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20200320_1358'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chequeo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('elemento', models.CharField(max_length=500)),
                ('chequeado', models.BooleanField()),
                ('tiempo', models.IntegerField()),
                ('fecha', models.CharField(default=django.utils.timezone.now, max_length=200)),
            ],
        ),
    ]
