using DAL;
using DAL.EntityFramework;
using SimpleInjector;
using SimpleInjector.Extensions;
using SimpleInjector.Integration.WebApi;
using System.Data.Entity;
using System.Web.Http;

namespace WebApi
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        internal static Container DInjector = new Container();

        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            RegisterInjector();
        }

        private void RegisterInjector()
        {
            DInjector = new Container();
            DInjector.Register<DbContext, Context>();
            
            // 2. Configure the container (register)
            //DInjector.Register<IUnitOfWork, MockUnitOfWork>();
            //DInjector.Register<IRepositoryProvider<Product>, MockRepositoryProvider>();
            DInjector.Register<IUnitOfWork, UnitOfWork>();
            DInjector.RegisterOpenGeneric(typeof(IRepositoryProvider<>), typeof(RepositoryProvider<>));


            // 3. Optionally verify the container's configuration.
            DInjector.RegisterWebApiControllers(GlobalConfiguration.Configuration);
            DInjector.Verify();

            // 4. Register the container as MVC3 IDependencyResolver.
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(DInjector);

        }
    }
}