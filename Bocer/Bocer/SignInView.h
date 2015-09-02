//
//  SignInView.h
//  Bocer
//
//  Created by Yicheng Wang on 8/31/15.
//  Copyright (c) 2015 Yicheng Wang. All rights reserved.
//

#import "ViewController.h"
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>


@interface SignInView : ViewController

@property (weak, nonatomic) IBOutlet UIBarButtonItem *CancelButton;
@property (weak, nonatomic) IBOutlet UIBarButtonItem *Done;
@property (weak, nonatomic) IBOutlet UIView *SignView;
@property (weak, nonatomic) IBOutlet UITextField *Email;
@property (weak, nonatomic) IBOutlet UITextField *Pass;



@end
