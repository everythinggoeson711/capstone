document.querySelector('#formSignUp').onsubmit=function(event)
{
    event.preventDefault();
    console.log('123')
    var inforUser= new userInforSignUp();
    inforUser.email=document.querySelector('#email').value;
    inforUser.name=document.querySelector('#name').value;
    inforUser.password=document.querySelector('#passWord').value;
    inforUser.phone=document.querySelector('#phone').value;
    inforUser.passwordconfirm=document.querySelector('#passWordConfirm').value;;
    inforUser.gender=document.getElementsByName('gender').checked;
    var valid=true;
    valid=kiemtraRong(inforUser.email,'email')&kiemtraRong(inforUser.phone,'phone')&kiemtraRong(inforUser.name,'name')&kiemtraRong(inforUser.password,'password')&kiemtraRong(inforUser.passwordconfirm,'passwordconfirm');
    valid=valid&kiemtraSo(inforUser.phone,'phone')&kiemtraEmail(inforUser.email,'email')&kiemtraKT(inforUser.name,'name')&kiemtraPassword(inforUser.password,'password');
    valid=valid&kiemtraPasswordConfirm(inforUser.password,inforUser.passwordconfirm,'password','passwordconfirm')
    if (!valid){
        return;
    }
    var promise=axios({
        url:'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        ResponseType:JSON,
        data:inforUser   
    })
    promise.then(function(result)
    {
        console.log(result.data);
    })
    promise.catch(function(error){
        console.log(error)
    })
}
