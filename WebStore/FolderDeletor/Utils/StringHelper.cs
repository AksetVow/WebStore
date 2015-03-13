using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FolderDeletor.Utils
{
    public class StringHelper
    {
        private List<char> _shortNameStringArray = new List<char>();
        private int _index = 0;
        private int _nameIndex = 0;

        public StringHelper()
        {
            for (char ch = 'a'; ch < 'z'; ch++)
            {
                _shortNameStringArray.Add(ch);
            }

            for (char ch = 'A'; ch < 'Z'; ch++)
            {
                _shortNameStringArray.Add(ch);
            }

            for (char ch = '0'; ch < '9'; ch++)
            {
                _shortNameStringArray.Add(ch);
            }

        }

        public string GenerateShortName(bool isNew = false)
        {
            if (isNew)
            {
                _index = 0;
                return _shortNameStringArray[_index].ToString();
            }

            if (++_index < _shortNameStringArray.Count)
            {
                return _shortNameStringArray[_index].ToString();
            }

            return _shortNameStringArray[0] + (_nameIndex++).ToString();
        }
    }
}
