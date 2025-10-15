function FindProxyForURL(url, host) 
{  

//
if (dnsDomainIs(host, ”fac.insacorp.ca"))
{
return "DIRECT";


return "PROXY turbo-vhhizczi.edge.prod.fortisase.com:11637; DIRECT"; 

}