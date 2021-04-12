using System;
using System.Collections.Generic;

#nullable disable

namespace Mod1Assignment.Models
{
    public partial class Course
    {
        public Course()
        {
            Instructors = new HashSet<Instructor>();
        }

        public int Id { get; set; }
        public string Number { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Instructor> Instructors { get; set; }
    }
}
