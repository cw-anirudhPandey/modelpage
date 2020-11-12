using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using MySql.Data.MySqlClient;
using webapp.Model;

public class DataAccess
{
  private readonly string _connection = "SERVER=10.10.20.115;Port=3306;UID=training;PASSWORD=training;DATABASE=training;Min Pool Size=1;Max Pool Size=300";

  public List<string> getCityList()
  {
    try
    {
      using (IDbConnection conn = new MySqlConnection(_connection))
      {
        List<string> cityList = new List<string>();
        var Cities = conn.Query<string>("SELECT city FROM cities").ToList();
        Cities.ForEach(city => cityList.Add(city));
        return cityList;
      }
    }
    catch (Exception e)
    {
      Console.WriteLine("Exception Occured: " + e);
      return null;
    }
  }

  public List<string> getVersionList()
  {
    try
    {
      using (IDbConnection conn = new MySqlConnection(_connection))
      {
        List<string> versionList = new List<string>();
        var Versions = conn.Query<string>("SELECT versionName from CarVersion").ToList();
        Versions.ForEach(version => versionList.Add(version));
        return versionList;
      }
    }
    catch (Exception e)
    {
      Console.WriteLine("Exception Occured: " + e);
      return null;
    }

  }

  public CarModel getCarData()
  {
    EmiDetails e = new EmiDetails
    {
      cost = "10,719",
      duration = "5 years"
    };
    ReviewDetails r = new ReviewDetails
    {
      rating = 3,
      totalReviewCount = 312
    };
    PriceDetails p = new PriceDetails
    {
      price = "6.62 Lakhs",
      carType = "On - Road, Mumbai"
    };
    CarModel model = new CarModel
    {
      ReviewDetail = r,
      EmiDetail = e,
      PriceDetail = p,
      cityList = getCityList(),
      versionList = getVersionList(),
      name = "BMW M2",
      imageUrl = "https://imgd.aeplcdn.com/664x374/n/cw/ec/26742/swift-exterior-right-front-three-quarter-117655.gif?q=85"
    };
    return model;
  }

}