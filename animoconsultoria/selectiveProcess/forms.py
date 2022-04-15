from django import forms
from .models import Candidate


class DateInput(forms.DateInput):
    input_type = 'date'


class selectiveProcessForm(forms.ModelForm):
    class Meta:
        model = Candidate
        fields = ['registration', 'name', 'age',
                  'phone', 'email', 'course', 'shift', 'enrollment_date', 'first_sector', 'second_sector', 'curriculum']

        widgets = {'enrollment_date': DateInput()}

    def __init__(self, *args, **kwargs):
        super(selectiveProcessForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs['placeholder'] = 'Nome completo'
        self.fields['registration'].widget.attrs['placeholder'] = 'Número da matrícula'
        self.fields['age'].widget.attrs['placeholder'] = 'Idade'
        self.fields['phone'].widget.attrs['placeholder'] = '(00) 00000-0000'
        self.fields['email'].widget.attrs['placeholder'] = 'email@soulasalle.com.br'
