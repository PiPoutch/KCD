//
//  ConversionModule.swift
//  Kushim
//
//  Created by Poutch on 08/10/2021.
//

import Foundation

@objc(Converter)
class Converter: NSObject {
  func convert(url: String) {
  var url : String = "http://google.com?test=toto&test2=titi"
  var request : NSMutableURLRequest = NSMutableURLRequest()
  request.URL = NSURL(string: url)
  request.httpMethod = "GET"

  NSURLConnection.sendAsynchronousRequest(request, queue: NSOperationQueue(), completionHandler:{ (response:NSURLResponse!, data: NSData!, error: NSError!) -> Void in
      var error: AutoreleasingUnsafeMutablePointer<NSError?> = nil
      let jsonResult: NSDictionary! = NSJSONSerialization.JSONObjectWithData(data, options:NSJSONReadingOptions.MutableContainers, error: error) as? NSDictionary

      if (jsonResult != nil) {
          // process jsonResult
      } else {
         // couldn't load JSON, look at error
      }


  })

  }
  
}


