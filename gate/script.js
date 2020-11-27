var myCookies = {};

function saveCookies()
{
  myCookies["_user"] = document.getElementById("user").value;
  myCookies["_email"] = document.getElementById("email").value;
  myCookies["_uni"] = document.getElementById("uni").value;
  myCookies["_branch"] = document.getElementById("branch").value;
  myCookies["_state"] = document.getElementById("state").value;
  myCookies["_age"] = document.getElementById("age").value;
  myCookies["_phone"] = document.getElementById("phone").value;
  myCookies["_usern"] = document.getElementById("usern").value;
  myCookies["_password"] = document.getElementById("password").value.toString();


  document.cookie = "";
  var expiresAttrib = new Date(Date.now()+60*1000).toString();
  var cookieString = "";
  for (var key in myCookies)
  {
    cookieString = key+"="+myCookies[key]+";"+expiresAttrib+";";
    document.cookie = cookieString;
  }

  document.getElementById("out").innerHTML = document.cookie;
}

function loadCookies()
{
  myCookies = {};
  var kv = document.cookie.split(";");
  for (var id in kv)
  {
    var cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }

  document.getElementById("user").value = myCookies["_user"];
  document.getElementById("email").value = myCookies["_email"];
  document.getElementById("uni").value = myCookies["_uni"];
  document.getElementById("branch").value = myCookies["_branch"];
  document.getElementById("state").value = myCookies["_state"];
  document.getElementById("age").value = myCookies["_age"];
  document.getElementById("phone").value = myCookies["_phone"];
  document.getElementById("usern").value = myCookies["_usern"];
  document.getElementById("password").value = myCookies["_password"];
 

}

function validation()                                    
{
  myCookies["_user"] = document.getElementById("user").value;
  myCookies["_email"] = document.getElementById("email").value;
  myCookies["_uni"] = document.getElementById("uni").value;
  myCookies["_branch"] = document.getElementById("branch").value;
  myCookies["_state"] = document.getElementById("state").value;
  myCookies["_age"] = document.getElementById("age").value;
  myCookies["_phone"] = document.getElementById("phone").value;
  myCookies["_usern"] = document.getElementById("usern").value;
  myCookies["_password"] = document.getElementById("password").value;

  if (user.value == "")                                  
    {
        window.alert("Please enter your name.");
        user.focus();
        return false;
    }

  if (email.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

  if (uni.value == "")                                  
    {
        window.alert("Please enter your university name.");
        user.focus();
        return false;
    }

    if (branch.value == "")                                  
    {
        window.alert("Please enter your university branch.");
        branch.focus();
        return false;
    }

  if (state.value == "")                                  
    {
        window.alert("Please enter your state.");
        user.focus();
        return false;
    }

  if (age.value == "")                                  
    {
        window.alert("Please enter your age");
        age.focus();
        return false;
    }

  if (phone.value == "")                          
    {
        window.alert("Please enter your phone number.");
        phone.focus();
        return false;

        
    }
 if (usern.value == "")                                  
    {
        window.alert("Please enter your username.");
        user.focus();
        return false;
    }

  if (password.value == "")                        
    {
        window.alert("Please set your password");
        password.focus();
        return false;
    }
    return true;
}

