﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Dtos
{
    public class SupplierOfferDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public double PrefPrice { get; set; }
        public byte[]? Image { get; set; }
        public byte[]? ownerImage { get; set; }
    }
}
