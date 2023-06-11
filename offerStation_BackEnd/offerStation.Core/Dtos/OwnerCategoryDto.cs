﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace offerStation.Core.Dtos
{
    public class OwnerCategoryDto
    {
        public int Id { get; set; }
        public byte[]? Image { get; set; }
        public string Name { get; set; }
    }
}
