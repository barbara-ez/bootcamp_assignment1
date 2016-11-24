
app={

aritGeo: function(a)
            {
                var diff=0;
                var ratio=0;
                diff=(a[0]-a[1]);
                ratio=(a[1]/a[0]);
                

                    if(a.length===0)
                    {
                        return 0;
                    }
                    else
                    {
                    for (var i=0;i<a.length;i++)
                    {
                      var statement;
                      
                        var checkDiff=(a[i]-a[i+1]);
                        var checkRatio=(a[i+1]/a[i]);
                        
                        if (checkDiff==diff)
                        {
                          
                          statement="Arithmetic";

                        }
                        else if(checkRatio==ratio)
                        {
                        statement='Geometric';
                        
                        }
                        else
                        {
                            statement=-1;

                        }
                        if (i==a.length-2)
                        
                        {break;}
                      
                       
                      
                      
                    }
                    }
                
                
                
                return statement;
                }

            

            

}
module.exports=app;
