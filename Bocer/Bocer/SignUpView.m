//
//  SignUpView.m
//  Bocer
//
//  Created by Yicheng Wang on 8/31/15.
//  Copyright (c) 2015 Yicheng Wang. All rights reserved.
//

#import "SignUpView.h"

@implementation SignUpView

- (void)viewWillAppear:(BOOL)animated{
    self.navigationController.navigationBarHidden = NO; //show navigation bar.
    // tap gesture for resign keyboard.
    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc]
                                   initWithTarget:self
                                   action:@selector(dismissKeyboard)];
    
    [self.view addGestureRecognizer:tap];
    [self ViewConfig];
}

-(void)dismissKeyboard {//dismiss keyboard when touch outside
    [self.EmailField resignFirstResponder];
    [self.PassField resignFirstResponder];
}

- (void)ViewConfig{ //Configure the view
    // bar button config
    [self.CancelButton setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:
                                        [UIFont fontWithName:@"Helvetica-Bold" size:12.0], NSFontAttributeName,
                                               [UIColor blackColor], NSForegroundColorAttributeName,
                                        nil] 
                              forState:UIControlStateNormal];
    [self.DoneButton setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:
                                        [UIFont fontWithName:@"Helvetica-Bold" size:12.0], NSFontAttributeName,
                                        [UIColor blackColor], NSForegroundColorAttributeName,
                                        nil] 
                              forState:UIControlStateNormal];
    //sign view config
    self.SignView.layer.cornerRadius = 5;
    // info field config
    self.EmailField.borderStyle = UITextBorderStyleNone;
    self.PassField.borderStyle = UITextBorderStyleNone;
    //facebook
    FBSDKLoginButton *facebook = [[FBSDKLoginButton alloc]init];
    [facebook setFrame:CGRectMake(0, 0, 330, 29)];
    facebook.center = CGPointMake(self.view.frame.size.width/2, self.view.frame.size.height/2+60);
    [self.view addSubview:facebook];
}

- (IBAction)CancelAction:(id)sender { // cancel button fired
    [self dismissViewControllerAnimated:YES completion:^{}];
}



@end