//
//  ViewController.swift
//  HUSafety
//
//  Created by Anish Adhikari on 10/7/17.
//  Copyright © 2017 Anish Adhikari. All rights reserved.
//

import UIKit

import Firebase

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func TrackButton(_ sender: UIButton) {
        var ref: DatabaseReference!
        ref = Database.database().reference()
        
        ref.child("Users").child("1").setValue(["first_name": "Anish", "last_name": "Adhikari", "lati": "38.922038", "longi": "-77.021542", "status" :"track"])
        
    }
    
    @IBAction func EmergencyButton(_ sender: UIButton) {
        var ref: DatabaseReference!
        ref = Database.database().reference()
        
        ref.child("Users").child("1").setValue(["first_name": "Anish", "last_name": "Adhikari", "lati": "38.922038", "longi": "-77.021542", "status" :"alert"])
    }
    
    @IBAction func CallButton(_ sender: UIButton) {
        let busPhone = "911"
        if let url = NSURL(string: "tel://\(busPhone)"), UIApplication.shared.canOpenURL(url as URL) {
            UIApplication.shared.openURL(url as URL)
        }
    }
    
}

