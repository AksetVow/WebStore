using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FolderDeletor.Utils
{
    public static class DeleteHelper
    {
        public static void DeleteFolder(string path, string destiny)
        {
            if (GetDirectoryLevel(path) > 2)
            {
                Directory.Move(path, destiny);
                path = destiny;
            }
            RenameFolderToShortNames(destiny);
            try
            {
                Directory.Delete(destiny, true);
            }
            catch (DirectoryNotFoundException ex)
            { 
                
            }
        }

        public static async Task<int> DeleteFolderAsync(string path, string destiny)
        {
            if (GetDirectoryLevel(path) > 2)
            {
                Directory.Move(path, destiny);
                path = destiny;
            }
            await Task.Run( () => RenameFolderToShortNames(destiny));
            Directory.Delete(destiny, true);

            return 1;
        }

        public static void RenameFolderToShortNames(string path)
        {
            string newPath = string.Empty;
            StringHelper _stringHelper = new StringHelper();

            foreach (var subDirectory in Directory.EnumerateDirectories(path))
            {
                if (GetDirectoryNameFromPath(subDirectory).Length < 2)
                    continue;
                newPath = GenerateNewPath(subDirectory);
                Directory.Move(subDirectory, newPath);

                RenameFolderToShortNames(newPath);
            }
        }

        private static string GenerateNewPath(string path)
        {
            StringHelper stringHelper = new StringHelper();
            string newFolderName = stringHelper.GenerateShortName();

            string directoryName = GetDirectoryNameFromPath(path);
            int index = path.LastIndexOf(directoryName);
            string newPath = path.Substring(0, path.Length - directoryName.Length);
            string result = newPath + newFolderName;

            while (Directory.Exists(result) || File.Exists(result))
            {
                newFolderName = stringHelper.GenerateShortName();
                result = newPath + newFolderName;
            }

            return result;
        }

        private static string GetDirectoryNameFromPath(string path)
        {
            return new FileInfo(path).Name;
        }

        public static int GetDirectoryLevel(string directory)
        {
            return directory.Split(new char[] { '\\' }, StringSplitOptions.RemoveEmptyEntries).Length;
        }

    }
}
