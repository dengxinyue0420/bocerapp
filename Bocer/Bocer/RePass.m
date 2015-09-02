//
//  RePass.m
//  Bocer
//
//  Created by Yicheng Wang on 8/31/15.
//  Copyright (c) 2015 Yicheng Wang. All rights reserved.
//

#import "RePass.h"

@interface RePass ()

@end

@implementation RePass

- (void)viewDidLoad {
    [super viewDidLoad];
    // tap gesture for resign keyboard.
    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc]
                                   initWithTarget:self
                                   action:@selector(dismissKeyboard)];
    
    [self.view addGestureRecognizer:tap];
    [self ViewConfig];
}

-(void)dismissKeyboard {//dismiss keyboard when touch outside
    [self.emailField resignFirstResponder];
}

- (void)viewWillAppear:(BOOL)animated{
    self.navigationController.navigationBarHidden = NO;
    self.title = @"Reset Password";
    UIBarButtonItem *cancel = [[UIBarButtonItem alloc]initWithTitle:@"CANCEL" style:UIBarButtonItemStylePlain target:self action:@selector(Cancel)];
    [self.navigationItem setLeftBarButtonItem:cancel];
    [cancel setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:
                                               [UIFont fontWithName:@"Helvetica-Bold" size:12.0], NSFontAttributeName,
                                               [UIColor blackColor], NSForegroundColorAttributeName,
                                               nil]
                                     forState:UIControlStateNormal];
}

- (void)Cancel{
    [self.navigationController popViewControllerAnimated:YES];
}

- (void)ViewConfig{// configure the view
    self.email.layer.cornerRadius = 5;
    
    self.emailField.borderStyle = UITextBorderStyleNone;
    
    self.sendButton.layer.cornerRadius = 5;
}

- (IBAction)sendRequest:(id)sender {
    [self.navigationController popViewControllerAnimated:YES];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
