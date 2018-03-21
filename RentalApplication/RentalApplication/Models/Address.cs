using System.ComponentModel.DataAnnotations;

namespace RentalApplication.Models
{
  
    public class Address
    {
        [Key]
        public int AddressId { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
     
    }
}