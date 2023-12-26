var l=1;
                var r=8;
                function show()
                {
                    for(i=l;i<=r;i++)
                    {
                        document.getElementById("c"+i).style.display="inline-block";
                    }
                }
                function moveleft()
                {
                    if(l<=10 && r<=17)
                    {
                    document.getElementById("c"+l).style.display="none";
                    l+=1;
                    r+=1;
                    for(i=l;i<=r;i++)
                    {
                        document.getElementById("c"+i).style.display="inline-block";
                    }
                    }
                else
                return;
                 
                }
                function moveright()
                {
                    if(l>=9 && r>=16)
                    {
                    document.getElementById("c"+r).style.display="none";
                    l-=1;
                    r-=1
                    for(i=l;i<=r;i++)
                    {
                        document.getElementById("c"+i).style.display="inline-block";
                    }
                }
                else
                return;
                }