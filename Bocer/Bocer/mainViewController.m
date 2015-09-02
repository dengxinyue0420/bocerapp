//
//  mainViewController.m
//  Bocer
//
//  Created by Yicheng Wang on 9/1/15.
//  Copyright (c) 2015 Yicheng Wang. All rights reserved.
//

#import "mainViewController.h"

@interface mainViewController ()

@end

@implementation mainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self viewConfig];

}

- (void)viewConfig{//configure the view
    //bocerlabel
    self.BocerLabel.layer.borderWidth = 1;
    self.BocerLabel.layer.borderColor = [UIColor grayColor].CGColor;
    //personal
    self.personalButton.layer.cornerRadius = 5;
    //map
    self.map.delegate = self;
    self.map.showsUserLocation = YES;
    self.map.rotateEnabled = NO;
    //location manager
    self.locationmanager = [[CLLocationManager alloc]init];
    self.locationmanager.delegate = self;
    [self.locationmanager requestAlwaysAuthorization];
    [self.locationmanager startUpdatingLocation];
    //menu bar
    self.menubar.alpha = 0;
    self.hider.alpha = 0;
    //gesture
    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(tapped)];
    [self.hider addGestureRecognizer:tap];
    //profile image
    self.profileImage.layer.cornerRadius = 34;
    self.profileImage.layer.masksToBounds = YES;
    //search button
    self.searchButton.layer.borderWidth = 0.5;
    self.searchButton.layer.borderColor = [UIColor grayColor].CGColor;
}

- (void)tapped{
    [UIView animateWithDuration:0.3f animations:^{
        self.menubar.alpha = 0;
        self.hider.alpha = 0;
    }];
}

- (IBAction)MenuAction:(id)sender{
    [UIView animateWithDuration:0.3f animations:^{
        self.menubar.alpha = 1;
        self.hider.alpha = 0.3;
    }];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];

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
