using FolderDeletor.Utils;
using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace FolderDeletor
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private const string Disk = @"D:\";

        public MainWindow()
        {
            InitializeComponent();
        }

        private async void onDeleteHandler(object sender, RoutedEventArgs e)
        {
            System.Windows.Forms.FolderBrowserDialog dialog = new System.Windows.Forms.FolderBrowserDialog();
            var result = dialog.ShowDialog();

            if (result.HasFlag(System.Windows.Forms.DialogResult.OK))
            {
                string selectedFolder = dialog.SelectedPath;
                string directoryName = new FileInfo(selectedFolder).Name;

                _statusLb.Content = "Deleting...";
                _statusBar.IsIndeterminate = true;
                _statusBar.Background = Brushes.Gray;
                _statusBar.Foreground = Brushes.Red;

                //await DeleteHelper.DeleteFolderAsync(selectedFolder, Disk + directoryName);

                this.Dispatcher.BeginInvoke(
                    new Action(() =>
                    {
                        DeleteHelper.DeleteFolder(selectedFolder, Disk + directoryName);
                        _statusLb.Content = "Deleted";
                        _statusBar.IsIndeterminate = false;
                    })
                    ); 
            }
            
        }

    }
}
