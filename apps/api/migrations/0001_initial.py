# Generated by Django 2.2.10 on 2020-02-27 18:44

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Temperatura',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('temperatura', models.FloatField()),
                ('fecha', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]