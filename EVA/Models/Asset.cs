﻿using System.ComponentModel.DataAnnotations;


namespace EVA.Models
{
    public class Asset
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public double Cost { get; set; }
        public double Quantity { get; set; }
        public string Descriprion { get; set; }
        public bool SoftDeleted { get; set; }
        public DateTime Created { get; set; }
        

        public int ProjectId { get; set; }
    }
}
