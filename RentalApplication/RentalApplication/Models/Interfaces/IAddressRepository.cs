using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalApplication.Models.Interfaces
{
   public interface IAddressRepository
    {
        int AddAddress(Address address);
        Address GetAddress(int addressId);
        int UpdateAddress(Address address);
        List<Address> GetAll();

    }
}
