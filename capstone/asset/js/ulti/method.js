function kiemtraRong(value,name)
{
    if (value.trim()==='')
    {
        document.querySelector(`#err-${name}`).innerHTML=`Không được bỏ trống \n`
    return false
    }
    else {document.querySelector(`#err-${name}`).innerHTML='';
return true}
}

// kiểm tra số  
function kiemtraSo(value,name) 
{var regex =/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
 if (regex.test(value))
  { document.querySelector(`#errRegex-${name}`).innerHTML=''
    return true
  }
  document.querySelector(`#errRegex-${name}`).innerHTML=`${name} không hợp lệ`
    return false
   
}

// kiểm tra chữ
function kiemtraKT(value,name)
{
    var regex=/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
     if (regex.test(value))
     {
        document.querySelector(`#errRegex-${name}`).innerHTML='';
        return true;
     }
    document.querySelector(`#errRegex-${name}`).innerHTML=`${name} không hợp lệ`
    return false;
} 

//kiem tra mail
function kiemtraEmail(value,name) 
{var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 if (regex.test(value))
  { document.querySelector(`#errRegex-${name}`).innerHTML=''
    return true
  }
  document.querySelector(`#errRegex-${name}`).innerHTML=`${name} không hợp lệ`
    return false
}

//kt password
function kiemtraPassword(value,name)
{
    var regex=/(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
    if (regex.test(value))
    { document.querySelector(`#errRegex-${name}`).innerHTML=''
      return true
    }
    document.querySelector(`#errRegex-${name}`).innerHTML=`${name} không hợp lệ (phải có ít nhất 8 kí tự, chứa ít nhất 1 số, chữ in hoa, chữ thường và kí tự đặc biệt)`
      return false 
  }
  function kiemtraPasswordConfirm(value1,value2,name1,name2)
  {
    if(value2===value1){
        document.querySelector(`#errRegex-${name2}`).innerHTML='';
        return true
    }
    document.querySelector(`#errRegex-${name2}`).innerHTML=`Mật khẩu nhập lại phải khớp với mật khẩu đã nhập ở trên`
      return false 
  }




