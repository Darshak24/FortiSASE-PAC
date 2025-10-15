function FindProxyForURL(url, host) {
  // Bypass proxy for internal domain
  if (dnsDomainIs(host, "fac.insacorp.ca")) {
    return "DIRECT";
  }

  // Use proxy for all other traffic
  return "PROXY turbo-vhhizczi.edge.prod.fortisase.com:11637; DIRECT";
}
