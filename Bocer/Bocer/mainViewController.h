//
//  mainViewController.h
//  Bocer
//
//  Created by Yicheng Wang on 9/1/15.
//  Copyright (c) 2015 Yicheng Wang. All rights reserved.
//

#import "ViewController.h"
@import MapKit;
@import CoreLocation;

@interface mainViewController : ViewController <MKMapViewDelegate, CLLocationManagerDelegate>

@property (weak, nonatomic) IBOutlet UILabel *BocerLabel;

@property (weak, nonatomic) IBOutlet UIButton *personalButton;

@property (weak, nonatomic) IBOutlet MKMapView *map;

@property CLLocationManager *locationmanager;

@property (weak, nonatomic) IBOutlet UIView *menubar;
@property (weak, nonatomic) IBOutlet UIView *hider;

@property (weak, nonatomic) IBOutlet UIImageView *profileImage;
@property (weak, nonatomic) IBOutlet UILabel *nameLabel;

@property (weak, nonatomic) IBOutlet UIButton *searchButton;


@end