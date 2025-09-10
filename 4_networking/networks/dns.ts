import dns from "dns";

const NAME = "iamkunal.in";

dns.lookup(NAME, (err, address, family) => {
  if (err) {
    console.error(err.message);
  }
  console.table({
    address,
    family, // 4 == IPV4
  });
});
//  A namr records
dns.resolve4(NAME, (err, address) => {
  if (err) {
    console.error(err.message);
  }

  console.table(address);
});
// ipv6
dns.resolve6(NAME, (err, address) => {
  if (err) {
    console.error(err.message);
  }

  console.table(address);
});
//  hostname
dns.reverse(NAME, (err, hostnames) => {
  if (err) {
    console.error(err.message);
  }

  console.table(hostnames);
});
