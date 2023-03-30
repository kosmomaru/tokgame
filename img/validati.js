function AlphaNumeric(v)
{
	if (/^\w{4,16}$/.test(v))
    return true;
    else
    return false;
}
/* validation registration */
function checkform(form)
{
	if (form.l2account.value=='')
    {
    	alert("������� �����\nEnter account");
		form.l2account.focus();return false;
    }
    if (!AlphaNumeric(form.l2account.value))
    {
    	alert('����� ������ �� ���������\nIncorrect account name');
        form.l2account.select();return false;
    }
    if (form.l2password1.value=='')
    {
    	alert("������� ������\nEnter password");
		form.l2password1.focus();return false;
    }
    if (!AlphaNumeric(form.l2password1.value))
    {
    	alert('������ ������ �� ���������\nIncorrect password');
        form.l2password1.select();return false;
    }
    if (form.l2password1.value!=form.l2password2.value)
    {
    	alert('������ �� ���������\nPasswords are different');
        form.l2password2.select();return false;
    }
    if (form.l2email.value=='')
    {
		alert("������� E-Mail!\nEnter E-Mail");
		form.l2email.select(); return false;
	}
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(form.l2email.value))
    {
		alert("E-Mail ������ �� ���������\nIncorrect E-Mail");
		return false;
    }
	if (form.l2question.value=='')
    {
    	alert("������� ������\nEnter Secret Question");
		form.l2question.focus();return false;
    }
    if (form.l2question.value.length<4 || form.l2question.value.length>64)
    {
    	alert('������ ������ �������� �� 4 �� 64 ��������\nQuestion must be from 4 to 64 characters');
        form.l2question.select();return false;
    }
	if (form.l2answer.value=='')
    {
    	alert("������� �����\nEnter secret Answer");
		form.l2answer.focus();return false;
    }
    if (form.l2answer.value.length<4 || form.l2answer.value.length>64)
    {
    	alert('����� ������ �������� �� 4 �� 64 ��������\nAnswer must be from 4 to 64 characters');
        form.l2answer.select();return false;
    }
    if (form.l2sec_code.value=='')
    {
		alert("������� �������� ���\nEnter code");
		form.l2sec_code.select(); return false;
	}
return true;
}