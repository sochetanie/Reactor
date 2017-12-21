Hello!

Your task is to use the provided assets to create the web app displayed in the Design.png spec.
Please break down how much time you spend on what.
Please include the full react project as a zip in a buildable state aand if possible a compiled version we can run locally.


Subscribe to Newsletter Endpoint

[POST] REQUEST URL: http://dev3.apppartner.com/Reactors/scripts/add-email.php


Field 	Value           Description
email 	123@aol.com 	Email

RESPONSE:
{
    status :  success,
    message :  Generic Success
} 


If possible have the login / signup function using these endpoints.

SIGNUP

[POST] REQUEST URL: http://dev3.apppartner.com/Reactors/scripts/user-signup.php

Field 		Value 		            Description
username 	user1512601118 		    Unique Username
password 	testpassword 		    Password
email 		dude1512601118@aol.com 	Unique Email


RESPONSE:

{

    user_id :  16,
    user_first_name :  ,
    user_last_name :  ,
    user_username :  user1512601118,
    user_fb_id :  ,
    user_bio :  ,
    user_phone_number :  ,
    user_is_active :  1,
    user_is_verified :  0,
    user_profile_image :  https://s3.amazonaws.com/luau-image/default_profile_image.jpg,
    user_cover_image :  https://s3.amazonaws.com/luau-image/default_cover_image.jpeg,
    user_last_active_epoch :  0,
    user_timezone :  ,
    user_latitude :  0,
    user_longitude :  0,
    user_country :  ,
    user_creation_epoch :  1512601118,
    user_public_id :  LU-BF20D9C27F,
    user_is_new :  1,
    user_token :  6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e,
    user_email :  dude1512601118@aol.com,
    user_is_following :  0,
    user_requires_pin_validation :  0

} 


LOGIN
[POST] REQUEST URL: http://dev3.apppartner.com/Reactors/scripts/user-login.php


Field 		Value 			        Description
email 		dude1512601118@aol.com 	Email
password 	testpassword 		    Password


RESPONSE:

{
    user_id :  16,
    user_first_name :  ,
    user_last_name :  ,
    user_username :  user1512601118,
    user_fb_id :  ,
    user_bio :  ,
    user_phone_number :  ,
    user_is_active :  1,
    user_is_verified :  0,
    user_profile_image :  https://s3.amazonaws.com/luau-image/default_profile_image.jpg,
    user_cover_image :  https://s3.amazonaws.com/luau-image/default_cover_image.jpeg,
    user_last_active_epoch :  0,
    user_timezone :  ,
    user_latitude :  0,
    user_longitude :  0,
    user_country :  ,
    user_creation_epoch :  1512601118,
    user_public_id :  LU-BF20D9C27F,
    user_is_new :  0,
    user_token :  52fd864b17612711b8ef60a313166736243a2fe73049674a43fbfa0adca0d7bb,
    user_email :  dude1512601118@aol.com,
    user_is_following :  0,
    user_requires_pin_validation :  0

} 
