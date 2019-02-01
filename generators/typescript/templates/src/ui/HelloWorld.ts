import {
  Component,
  ComponentOptions,
  IComponentBindings,
  $$,
  QueryEvents,
  IBuildingQueryEventArgs,
  Initialization
} from 'coveo-search-ui';

export interface IHelloWorldOptions {
  dummyText: string;
  dummyQuery: string;
}

/**
 * Create a dummy Component and register it as 'HelloWorld';
 * Use this dummy component by adding a div with the class 'CoveoHelloWorld' inside your search page.
 */
export class HelloWorld extends Component {
  public static ID = 'HelloWorld';

  /**
   * The static options property allows you to register different option for your component
   * In this case, this means that you could configure the component by setting "data-dummy-text" and "data-dummy-query"
   * on your component markup
   */
  public static options: IHelloWorldOptions = {
    dummyText: ComponentOptions.buildStringOption({
      defaultValue: 'Hello world'
    }),
    dummyQuery: ComponentOptions.buildStringOption({
      defaultValue: '@uri'
    })
  };

  /**
   * The constructor of every components is build the same way :
   * - the HTMLElement that your component is bound to
   * - The options that were passed at initialization for your component
   * - The bindings, which represent singleton in every search interface.
   *    You can use those bindings to execute a query, log a Usage Analytics events, access the root of the search interface, etc.
   */
  constructor(public element: HTMLElement, public options: IHelloWorldOptions, public bindings: IComponentBindings) {
    // Our components inherits the base Coveo.Component class
    super(element, HelloWorld.ID, bindings);
    // This line will parse the attributes set on the HTMLElement, for example "data-dummy-text",
    //    and return the effective option that your component need to handle.
    this.options = ComponentOptions.initComponentOptions(element, HelloWorld, options);

    // This is a simple example about how you could reference the options and use them internally inside your component's code.
    $$(this.element).text(this.options.dummyText);

    // This is a simple example about how you could bind a function to execute on a simple query event.
    this.bind.onRootElement(QueryEvents.buildingQuery, (args: IBuildingQueryEventArgs) =>
      this.handleBuildingQuery(args)
    );
  }

  private handleBuildingQuery(args: IBuildingQueryEventArgs) {
    // This is a simple example about how a component can modify a query.
    args.queryBuilder.advancedExpression.add(this.options.dummyQuery);
  }
}

// This line is essential to register your component with it's unique ID (in this case, "CoveoHelloWorld")
Initialization.registerAutoCreateComponent(HelloWorld);
