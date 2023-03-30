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
    	alert("Введите логин\nEnter account");
		form.l2account.focus();return false;
    }
    if (!AlphaNumeric(form.l2account.value))
    {
    	alert('Логин введен не корректно\nIncorrect account name');
        form.l2account.select();return false;
    }
    if (form.l2password1.value=='')
    {
    	alert("Введите пароль\nEnter password");
		form.l2password1.focus();return false;
    }
    if (!AlphaNumeric(form.l2password1.value))
    {
    	alert('Пароль введен не корректно\nIncorrect password');
        form.l2password1.select();return false;
    }
    if (form.l2password1.value!=form.l2password2.value)
    {
    	alert('Пароли не совпадают\nPasswords are different');
        form.l2password2.select();return false;
    }
    if (form.l2email.value=='')
    {
		alert("Введите E-Mail!\nEnter E-Mail");
		form.l2email.select(); return false;
	}
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(form.l2email.value))
    {
		alert("E-Mail введен не корректно\nIncorrect E-Mail");
		return false;
    }
	if (form.l2question.value=='')
    {
    	alert("Введите вопрос\nEnter Secret Question");
		form.l2question.focus();return false;
    }
    if (form.l2question.value.length<4 || form.l2question.value.length>64)
    {
    	alert('Вопрос должен состоять от 4 до 64 символов\nQuestion must be from 4 to 64 characters');
        form.l2question.select();return false;
    }
	if (form.l2answer.value=='')
    {
    	alert("Введите ответ\nEnter secret Answer");
		form.l2answer.focus();return false;
    }
    if (form.l2answer.value.length<4 || form.l2answer.value.length>64)
    {
    	alert('Ответ должен состоять от 4 до 64 символов\nAnswer must be from 4 to 64 characters');
        form.l2answer.select();return false;
    }
    if (form.l2sec_code.value=='')
    {
		alert("Введите защитный код\nEnter code");
		form.l2sec_code.select(); return false;
	}
return true;
}