//
//  ViewController.m
//  Bocer
//
//  Created by Yicheng Wang on 8/31/15.
//  Copyright (c) 2015 Yicheng Wang. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self ViewConfig];
}

- (void)viewWillAppear:(BOOL)animated{
    self.navigationController.navigationBarHidden = YES; //hide navigation bar.
}

- (void)ViewConfig{ //configure the view
    //configure the buttons
    self.RegisterButton.layer.cornerRadius = 10;
    self.RegisterButton.layer.borderWidth = 1;
    self.SignInButton.layer.cornerRadius = 10;
    self.SignInButton.layer.borderWidth = 1;
    //manipulating images
    UIImage *anim = [UIImage animatedImageNamed:@"1-" duration:1.0f];
    self.backImage.image = anim;
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

@end