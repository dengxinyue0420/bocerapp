//
//  SignInView.m
//  Bocer
//
//  Created by Yicheng Wang on 8/31/15.
//  Copyright (c) 2015 Yicheng Wang. All rights reserved.
//

#import "SignInView.h"

@implementation SignInView

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
    [self.Email resignFirstResponder];
    [self.Pass resignFirstResponder];
}

- (void)ViewConfig{ //configuer the view
    [self.CancelButton setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:
                                        [UIFont fontWithName:@"Helvetica-Bold" size:12.0], NSFontAttributeName,
                                        [UIColor blackColor], NSForegroundColorAttributeName,
                                        nil] 
                              forState:UIControlStateNormal];
    [self.Done setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:
                                        [UIFont fontWithName:@"Helvetica-Bold" size:12.0], NSFontAttributeName,
                                        [UIColor blackColor], NSForegroundColorAttributeName,
                                        nil] 
                              forState:UIControlStateNormal];
    //sign fields config
    self.Email.borderStyle = UITextBorderStyleNone;
    self.Pass.borderStyle = UITextBorderStyleNone;
    self.SignView.layer.cornerRadius = 5;
    //facebook
    FBSDKLoginButton *facebook = [[FBSDKLoginButton alloc]init];
    [facebook setFrame:CGRectMake(0, 0, 330, 29)];
    facebook.center = CGPointMake(self.view.frame.size.width/2, self.view.frame.size.height/2+90);
    [self.view addSubview:facebook];
}

- (IBAction)CancelAction:(id)sender {
    [self dismissViewControllerAnimated:YES completion:^{}];
}

- (IBAction)DoneAction:(id)sender {
    [self performSegueWithIdentifier:@"login" sender:nil];
}

@end
