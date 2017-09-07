/// <reference path="Externals.d.ts" />
declare module Coveo {
	function shim(): void;

}
declare module Coveo {
	function customEventPolyfill(): void;

}
declare module Coveo {
	var version: {
	    'lib': string;
	    'product': string;
	    'supportedApiVersion': number;
	};

}
declare module Coveo {
	/**
	 * A JSON which contains type T.
	 *
	 * eg :
	 * ```
	 * IStringMap<boolean> -> {'foo' : true, 'bar' : false};
	 * IStringMap<number> -> {'foo' : 1 , 'bar' : 123}
	 * ```
	 *
	 */
	interface IStringMap<T> {
	    [paramName: string]: T;
	}

}
declare module Coveo {
	class Logger {
	    static TRACE: number;
	    static DEBUG: number;
	    static INFO: number;
	    static WARN: number;
	    static ERROR: number;
	    static NOTHING: number;
	    static level: number;
	    static executionTime: boolean;
	    constructor(owner: any);
	    trace(...stuff: any[]): void;
	    debug(...stuff: any[]): void;
	    info(...stuff: any[]): void;
	    warn(...stuff: any[]): void;
	    error(...stuff: any[]): void;
	    static enable(): void;
	    static disable(): void;
	}

}
declare module Coveo {
	/**
	 * An highlight structure, as returned by the index.
	 * This structure can be used to do the actual highlighting job.
	 */
	interface IHighlight {
	    /**
	     * The 0 based offset inside the string where the highlight should start.
	     */
	    offset: number;
	    /**
	     * The length of the offset.
	     */
	    length: number;
	    /**
	     * The group number for the highlight. A single string can have the same term highlighted multiple times.
	     * This allows to regroup the different highlights.
	     */
	    dataHighlightGroup?: number;
	    /**
	     * The string that represent the highlight. A single string can have the same term highlighted multiple times.
	     * This allows to regroup the different highlights.
	     */
	    dataHighlightGroupTerm?: string;
	}
	/**
	 * The data about a single term to highlight.
	 */
	interface IHighlightTerm {
	    /**
	     * The term that needs to be highlighted, as well as the list of stemming expansions.
	     */
	    [originalTerm: string]: string[];
	}
	/**
	 * The data about a single phrase to highlight.
	 */
	interface IHighlightPhrase {
	    /**
	     * The phrase that needs to be highlighted, with the different terms associated.
	     */
	    [phrase: string]: IHighlightTerm;
	}

}
declare module Coveo {
	/**
	 * Information about a single field in the index
	 */
	interface IFieldDescription {
	    /**
	     * It's type, as a string
	     */
	    type: string;
	    /**
	     * It's name, as a string
	     */
	    name: string;
	    /**
	     * A small(ish) description of the field
	     */
	    description: string;
	    /**
	     * The default value of the field
	     */
	    defaultValue: string;
	    /**
	     * It's fieldType, as a string.<br/>
	     * eg: Date, Double, Integer, LargeString, Long, SmallString
	     */
	    fieldType: string;
	    /**
	     * It's fieldSourceType, as a string.
	     */
	    fieldSourceType: string;
	    /**
	     * Gets whether the field can be referenced in a query.
	     */
	    includeInQuery: boolean;
	    /**
	     * Gets whether the field is returned with results.
	     */
	    includeInResults: boolean;
	    /**
	     * Gets whether the field is considered groupBy (facet)
	     */
	    groupByField: boolean;
	    /**
	     * Gets whether the field is considered splitGroupBy (facet with ; between values)
	     */
	    splitGroupByField: boolean;
	    /**
	     * Gets whether the field can be used to sort results
	     */
	    sortByField: boolean;
	}

}
declare module Coveo {
	class JQueryUtils {
	    static getJQuery(): any;
	    static isInstanceOfJQuery(obj: Object): boolean;
	    static isInstanceOfJqueryEvent(obj: Object): boolean;
	}

}
declare module Coveo {
	interface IOffset {
	    left: number;
	    top: number;
	}
	/**
	 * This is essentially an helper class for dom manipulation.<br/>
	 * This is intended to provide some basic functionality normally offered by jQuery.<br/>
	 * To minimize the multiple jQuery conflict we have while integrating in various system, we implemented the very small subset that the framework needs.<br/>
	 * See {@link $$}, which is a function that wraps this class constructor, for less verbose code.
	 */
	class Dom {
	    el: HTMLElement;
	    /**
	     * Create a new Dom object with the given HTMLElement
	     * @param el The HTMLElement to wrap in a Dom object
	     */
	    constructor(el: HTMLElement);
	    /**
	     * Helper function to quickly create an HTMLElement
	     * @param type The type of the element (e.g. div, span)
	     * @param props The props (id, className, attributes) of the element<br/>
	     * Can be either specified in dashed-case strings ('my-attribute') or camelCased keys (myAttribute),
	     * the latter of which will automatically get replaced to dash-case.
	     * @param innerHTML The contents of the new HTMLElement, either in string form or as another HTMLElement
	     */
	    static createElement(type: string, props?: Object, ...children: Array<string | HTMLElement | Dom>): HTMLElement;
	    /**
	     * Adds the element to the children of the current element
	     * @param element The element to append
	     * @returns {string}
	     */
	    append(element: HTMLElement): void;
	    /**
	     * Get the css value of the specified property.<br/>
	     * @param property The property
	     * @returns {string}
	     */
	    css(property: string): string;
	    /**
	     * Get or set the text content of the HTMLElement.<br/>
	     * @param txt Optional. If given, this will set the text content of the element. If not, will return the text content.
	     * @returns {string}
	     */
	    text(txt?: string): string;
	    /**
	     * Performant way to transform a NodeList to an array of HTMLElement, for manipulation<br/>
	     * http://jsperf.com/nodelist-to-array/72
	     * @param nodeList a {NodeList} to convert to an array
	     * @returns {HTMLElement[]}
	     */
	    nodeListToArray(nodeList: NodeList): HTMLElement[];
	    /**
	     * Empty (remove all child) from the element;
	     */
	    empty(): void;
	    /**
	     * Empty the element and all childs from the dom;
	     */
	    remove(): void;
	    /**
	     * Show the element;
	     */
	    show(): void;
	    /**
	     * Hide the element;
	     */
	    hide(): void;
	    /**
	     * Toggle the element visibility.<br/>
	     * Optional visible parameter, if specified will set the element visibility
	     * @param visible Optional parameter to display or hide the element
	     */
	    toggle(visible?: boolean): void;
	    /**
	     * Returns the value of the specified attribute.
	     * @param name The name of the attribute
	     */
	    getAttribute(name: string): string;
	    /**
	     * Sets the value of the specified attribute.
	     * @param name The name of the attribute
	     * @param value The value to set
	     */
	    setAttribute(name: string, value: string): void;
	    /**
	     * Find a child element, given a CSS selector
	     * @param selector A CSS selector, can be a .className or #id
	     * @returns {HTMLElement}
	     */
	    find(selector: string): HTMLElement;
	    /**
	     * Check if the element match the selector.<br/>
	     * The selector can be a class, an id or a tag.<br/>
	     * Eg : .is('.foo') or .is('#foo') or .is('div').
	     */
	    is(selector: string): boolean;
	    /**
	     * Get the first element that matches the classname by testing the element itself and traversing up through its ancestors in the DOM tree.
	     *
	     * Stops at the body of the document
	     * @param className A CSS classname
	     */
	    closest(className: string): HTMLElement;
	    /**
	     * Get the first element that matches the classname by testing the element itself and traversing up through its ancestors in the DOM tree.
	     *
	     * Stops at the body of the document
	     * @returns {any}
	     */
	    parent(className: string): HTMLElement;
	    /**
	     *  Get all the ancestors of the current element that match the given className
	     *
	     *  Return an empty array if none found.
	     * @param className
	     * @returns {HTMLElement[]}
	     */
	    parents(className: string): HTMLElement[];
	    /**
	     * Return all children
	     * @returns {HTMLElement[]}
	     */
	    children(): HTMLElement[];
	    /**
	     * Return all siblings
	     * @returns {HTMLElement[]}
	     */
	    siblings(selector: string): HTMLElement[];
	    /**
	     * Find all children that match the given CSS selector
	     * @param selector A CSS selector, can be a .className
	     * @returns {HTMLElement[]}
	     */
	    findAll(selector: string): HTMLElement[];
	    /**
	     * Find the child elements using a className
	     * @param className Class of the childs elements to find
	     * @returns {HTMLElement[]}
	     */
	    findClass(className: string): HTMLElement[];
	    /**
	     * Find an element using an ID
	     * @param id ID of the element to find
	     * @returns {HTMLElement}
	     */
	    findId(id: string): HTMLElement;
	    /**
	     * Add a class to the element. Takes care of not adding the same class if the element already has it.
	     * @param className Classname to add to the element
	     */
	    addClass(classNames: string[]): void;
	    addClass(className: string): void;
	    /**
	     * Remove the class on the element. Works even if the element does not possess the class.
	     * @param className Classname to remove on the the element
	     */
	    removeClass(className: string): void;
	    /**
	     * Toggle the class on the element.
	     * @param className Classname to toggle
	     * @swtch If true, add the class regardless and if false, remove the class
	     */
	    toggleClass(className: string, swtch?: boolean): void;
	    /**
	     * Sets the inner html of the element
	     * @param html The html to set
	     */
	    setHtml(html: string): void;
	    /**
	     * Return an array with all the classname on the element. Empty array if the element has not classname
	     * @returns {any|Array}
	     */
	    getClass(): string[];
	    /**
	     * Check if the element has the given class name
	     * @param className Classname to verify
	     * @returns {boolean}
	     */
	    hasClass(className: string): boolean;
	    /**
	     * Detach the element from the DOM.
	     */
	    detach(): void;
	    /**
	     * Insert the current node after the given reference node
	     * @param refNode
	     */
	    insertAfter(refNode: HTMLElement): void;
	    /**
	     * Insert the current node before the given reference node
	     * @param refNode
	     */
	    insertBefore(refNode: HTMLElement): void;
	    /**
	     * Insert the given node as the first child of the current node
	     * @param toPrepend
	     */
	    prepend(toPrepend: HTMLElement): void;
	    /**
	     * Bind an event handler on the element. Accepts either one (a string) or multiple (Array<String>) event type.<br/>
	     * @param types The {string} or {Array<String>} of types on which to bind an event handler
	     * @param eventHandle The function to execute when the event is triggered
	     */
	    on(types: string[], eventHandle: (evt: Event, data: any) => void): void;
	    on(type: string, eventHandle: (evt: Event, data: any) => void): void;
	    /**
	     * Bind an event handler on the element. Accepts either one (a string) or multiple (Array<String>) event type.<br/>
	     * The event handler will execute only ONE time.
	     * @param types The {string} or {Array<String>} of types on which to bind an event handler
	     * @param eventHandle The function to execute when the event is triggered
	     */
	    one(types: string[], eventHandle: (evt: Event, args?: any) => void): void;
	    one(type: string, eventHandle: (evt: Event, args?: any) => void): void;
	    /**
	     * Remove an event handler on the element. Accepts either one (a string) or multiple (Array<String>) event type.<br/>
	     * @param types The {string} or {Array<String>} of types on which to remove an event handler
	     * @param eventHandle The function to remove on the element
	     */
	    off(types: string[], eventHandle: (evt: Event, arg?: any) => void): void;
	    off(type: string, eventHandle: (evt: Event, arg?: any) => void): void;
	    /**
	     * Trigger an event on the element.
	     * @param type The event type to trigger
	     * @param data
	     */
	    trigger(type: string, data?: {
	        [key: string]: any;
	    }): void;
	    /**
	     * Check if the element is "empty" (has no innerHTML content). Whitespace is considered empty</br>
	     * @returns {boolean}
	     */
	    isEmpty(): boolean;
	    /**
	     * Check if the element is a descendant of parent
	     * @param other
	     */
	    isDescendant(parent: HTMLElement): boolean;
	    /**
	     * Replace the current element with the other element, then detach the current element
	     * @param otherElem
	     */
	    replaceWith(otherElem: HTMLElement): void;
	    /**
	     * Return the position relative to the offset parent.
	     */
	    position(): IOffset;
	    /**
	     * Returns the offset parent. The offset parent is the closest parent that is positioned.
	     * An element is positioned when its position property is not 'static', which is the default.
	     */
	    offsetParent(): HTMLElement;
	    /**
	     * Return the position relative to the document.
	     */
	    offset(): IOffset;
	    /**
	     * Returns the offset width of the element
	     */
	    width(): number;
	    /**
	     * Returns the offset height of the element
	     */
	    height(): number;
	    /**
	     * Clone the node
	     * @param deep true if the children of the node should also be cloned, or false to clone only the specified node.
	     * @returns {Dom}
	     */
	    clone(deep?: boolean): Dom;
	}
	class Win {
	    win: Window;
	    constructor(win: Window);
	    height(): number;
	    width(): number;
	    scrollY(): number;
	    scrollX(): number;
	}
	class Doc {
	    doc: Document;
	    constructor(doc: Document);
	    height(): number;
	    width(): number;
	}
	/**
	 * Convenience wrapper for the {@link Dom} class. Used to do $$(element).<br/>
	 * If passed with an argument which is not an HTMLElement, it will call {@link Dom.createElement}.
	 * @param el The HTMLElement to wrap in a Dom object
	 * @param type See {@link Dom.createElement}
	 * @param props See {@link Dom.createElement}
	 * @param ...children See {@link Dom.createElement}
	 */
	function $$(dom: Dom): Dom;
	function $$(html: HTMLElement): Dom;
	function $$(type: string, props?: Object, ...children: Array<string | HTMLElement | Dom>): Dom;

}
declare module Coveo {
	interface IComponentHtmlElement extends HTMLElement {
	    CoveoBoundComponents?: BaseComponent[];
	}
	/**
	 * Every component in the framework ultimately inherits from this base component class.
	 */
	class BaseComponent {
	    element: HTMLElement;
	    type: string;
	    /**
	     * Allows component to log in the dev console.
	     */
	    logger: Logger;
	    /**
	     * A disabled component will not participate in the query, or listen to {@link ComponentEvents}.
	     * @type {boolean}
	     */
	    disabled: boolean;
	    /**
	     * The static ID that each component need to be identified.<br/>
	     * For example, SearchButton -> static ID : SearchButton -> className : CoveoSearchButton
	     */
	    static ID: string;
	    constructor(element: HTMLElement, type: string);
	    /**
	     * Return the debug info about this component.
	     * @returns {any}
	     */
	    debugInfo(): any;
	    /**
	     * Disable the component.
	     * Normally this means that the component will not execute handlers for the framework events (query events, for example).
	     * Component are enabled by default on creation.
	     */
	    disable(): void;
	    /**
	     * Enable the component.
	     * Normally this means that the component will execute handlers for the framework events (query events, for example).
	     * Components are enabled by default on creation.
	     */
	    enable(): void;
	    static bindComponentToElement(element: HTMLElement, component: BaseComponent): void;
	    static computeCssClassName(componentClass: any): string;
	    static computeCssClassNameForType(type: string): string;
	    static computeSelectorForType(type: string): string;
	    static getBoundComponentsForElement(element: IComponentHtmlElement): BaseComponent[];
	    static getComponentRef(component: string): any;
	}

}
declare module Coveo {
	const MODEL_EVENTS: {
	    PREPROCESS: string;
	    CHANGE_ONE: string;
	    CHANGE: string;
	    RESET: string;
	    ALL: string;
	};
	interface IModelSetOptions {
	    silent?: boolean;
	    customAttribute?: boolean;
	    validateType?: boolean;
	}
	interface IAttributeChangedEventArg {
	    attribute: string;
	    value: any;
	}
	interface IAttributesChangedEventArg {
	    attributes: {};
	}
	interface IModelChangedEventArg {
	    model: Model;
	}
	/**
	 * A *model* is a key-value store that triggers various JavaScript events when any value associated to one of its key changes.<br/>
	 * This class is meant to be extended, one of the most 
	 * Components set values in this key-value store and listen to triggered events in order to update themselves accordingly.<br/>
	 */
	class Model extends BaseComponent {
	    /**
	     * The attributes contained in this model.</br>
	     * Normally, you should not set attributes directly on this property, as this would prevent required events from being triggered.
	     */
	    attributes: {
	        [key: string]: any;
	    };
	    defaultAttributes: {
	        [key: string]: any;
	    };
	    /**
	     * The event types that can be triggered:<br/>
	     * • `preprocess`: triggered before a value is set on an attribute. This allows the value to be modified before it is set.<br/>
	     * • `changeOne`: triggered when a single value changes.</br>
	     * • `change`: triggered when one or many values change.</br>
	     * • `reset`: triggered when all attributes are reset to their default values. </br>
	     * • `all`: triggered after the `change` event.</br>
	     * @type {{preprocess: string, changeOne: string, change: string, reset: string, all: string}}
	     */
	    static eventTypes: {
	        preprocess: string;
	        changeOne: string;
	        change: string;
	        reset: string;
	        all: string;
	    };
	    constructor(element: HTMLElement, id: string, attributes: {
	        [key: string]: any;
	    });
	    /**
	     * Sets the value of a single specific attribute.</br>
	     * Note: this method calls the `setMultiple` method.
	     * @param attribute
	     * the specific attribute whose value is to be set.
	     * @param value
	     * the value to set the attribute to.
	     * @param options
	     * the options (see {@link setMultiple}).
	     */
	    set(attribute: string, value: any, options?: IModelSetOptions): void;
	    /**
	     * Gets an object containing all *active* registered attribute key-values.</br>
	     * An attribute is considered active when its value is not in its default state.
	     * @returns {{object}}
	     */
	    getAttributes(): {
	        [key: string]: any;
	    };
	    /**
	     * Sets the values of one or many attributes.</br>
	     * This method may trigger the following events (in order):</br>
	     * • `preprocess`</br>
	     * • `changeOne`</br>
	     * • `change`</br>
	     * • `all`
	     * @param toSet
	     * the key-value list of attributes with their new intended values.
	     * @param options
	     * if the `customAttribute` option is set to `true`, the method will not validate whether an attribute is registered or not.</br>
	     * If the `validateType` option is set to `true`, the method will ensure that each value type is correct.</br>
	     * If the `silent` option is set to `true`, then the `changeOne`, `change` and `all` events will not be triggered.
	     */
	    setMultiple(toSet: {
	        [key: string]: any;
	    }, options?: IModelSetOptions): void;
	    /**
	     * Sets a new default value to a single specific attribute.</br>
	     * Note: specifying a new attribute default value does not set the attribute to that value. This can be done using the {@link setDefault} method.
	     * @param attribute
	     * the specific attribute whose default value is to be changed.
	     * @param value
	     * the new intended default value.
	     * @param options
	     * if the `customAttribute` option is set to `true`, the method will not validate whether the attribute is registered or not.
	     */
	    setNewDefault(attribute: string, value: any, options?: IModelSetOptions): void;
	    /**
	     * Sets a single specific attribute to its default value.</br>
	     * Note: this method calls the {@link setMultiple} method without specifying any option.
	     * @param attribute
	     * the specific attribute whose value is to be set to its default value.
	     */
	    setDefault(attribute: string): void;
	    /**
	     * Gets the value of a single specific attribute.</br>
	     * If no attribute is specified, the method instead returns an object containing all registered attribute key-values.
	     * @param attribute
	     * the specific attribute whose value should be returned.
	     * @returns {any}
	     */
	    get(attribute?: string): any;
	    /**
	     * Gets the default value of a single specific attribute.</br>
	     * If no attribute is specified, the method instead returns an object containing all registered attribute key-default values.
	     * @param attribute
	     * the specific attribute whose default value should be returned.
	     * @returns {any}
	     */
	    getDefault(attribute?: string): any;
	    /**
	     * Resets each registered attribute to its default value.</br>
	     * Note: this method calls the {@link setMultiple} method without specifying any options.</br>
	     * After the `setMultiple` call has returned, this method triggers the `reset` event.
	     */
	    reset(): void;
	    /**
	     * Registers a new attribute key-value.
	     * @param attribute
	     * the name of the new attribute to register.
	     * @param defaultValue
	     * the newly registered attribute default value.
	     */
	    registerNewAttribute(attribute: string, defaultValue: any): void;
	    /**
	     * Gets a string displaying the event namespace followed by the specific event name. The returned string is formatted thus:</br>
	     * `[eventNameSpace]:[eventName]`
	     * @example `getEventName("reset");` could return `"state:reset"`.
	     * @param event
	     * the event name.
	     * @returns {string}
	     */
	    getEventName(event: string): string;
	    debugInfo(): any;
	}

}
declare module Coveo {
	const QUERY_STATE_ATTRIBUTES: {
	    Q: string;
	    FIRST: string;
	    T: string;
	    TG: string;
	    SORT: string;
	    LAYOUT: string;
	    HD: string;
	    HQ: string;
	    QUICKVIEW: string;
	};
	interface IQueryStateIncludedAttribute {
	    title: string;
	    included: string[];
	}
	interface IQueryStateExcludedAttribute {
	    title: string;
	    excluded: string[];
	}
	/**
	 * The QueryStateModel is a key->value store of the state of every component that can affect a query.<br/>
	 * Component set values in this key -> value store, and listen to event triggered to react accordingly.<br/>
	 * For example, when a query is launched, the searchbox will set the 'q' attribute, the pager will set the 'first' attribute, etc.<br/>
	 * At the same time, this class will trigger the associated event when a value is modified.<br/>
	 * eg : The user change the content of the searchbox, and submit a query. This will trigger the following events :<br/>
	 * -- state:change:q (because the value of 'q' changed)</br>
	 * -- state:change (because at least one value changed in the query state)<br/>
	 * Component or external code could hook handler on those events : document.addEventListener('state:change:q', handler);<br/>
	 * See : {@link Model}, as all the relevant method are exposed in the base class.<br/>
	 * Optionally, the state can be persisted to the query string to allow browser history management : See {@link HistoryController}
	 */
	class QueryStateModel extends Model {
	    static ID: string;
	    static defaultAttributes: {
	        q: string;
	        first: number;
	        t: string;
	        hd: string;
	        hq: string;
	        sort: string;
	        layout: string;
	        tg: string;
	        quickview: string;
	    };
	    static attributesEnum: {
	        q: string;
	        first: string;
	        t: string;
	        sort: string;
	        layout: string;
	        hd: string;
	        hq: string;
	        tg: string;
	        quickview: string;
	    };
	    static getFacetId(id: string, include?: boolean): string;
	    static getFacetOperator(id: string): string;
	    static getFacetLookupValue(id: string): string;
	    /**
	     * Create a new QueryState
	     * @param element
	     * @param attributes
	     * @param bindings
	     */
	    constructor(element: HTMLElement, attributes?: IStringMap<string>);
	    /**
	     * Determine if at least one facet is currently active in the interface (this means that a facet has selected or excluded values)
	     * @returns {boolean}
	     */
	    atLeastOneFacetIsActive(): boolean;
	    set(attribute: string, value: any, options?: IModelSetOptions): void;
	}
	function setState(model: Model, args: any[]): any;

}
declare module Coveo {
	class ComponentStateModel extends Model {
	    static ID: string;
	    constructor(element: HTMLElement);
	    registerComponent(componentId: string, component: BaseComponent): void;
	}

}
declare module Coveo {
	const COMPONENT_OPTIONS_ATTRIBUTES: {
	    RESULT_LINK: string;
	    SEARCH_HUB: string;
	    SEARCH_BOX: string;
	};
	interface IComponentOptionsAttributes {
	    resultLink: any;
	    searchHub: string;
	    searchBox: any;
	}
	class ComponentOptionsModel extends Model {
	    static ID: string;
	    static defaultAttributes: IComponentOptionsAttributes;
	    static attributesEnum: {
	        resultLink: string;
	        searchHub: string;
	        searchBox: string;
	    };
	    constructor(element: HTMLElement, attributes?: IComponentOptionsAttributes);
	}

}
declare module Coveo {
	class RootComponent extends BaseComponent {
	    element: HTMLElement;
	    type: string;
	    constructor(element: HTMLElement, type: string);
	}

}
declare module Coveo {
	/**
	 * Describe the identity of a user on the Coveo platform
	 */
	interface IUserIdentity {
	    /**
	     * The name of the identity
	     */
	    name: string;
	    /**
	     * The provider of the identity in the Coveo platform
	     */
	    provider: string;
	    type: string;
	}

}
declare module Coveo {
	/**
	 * Describe a ranking expression performed against the index (qre)
	 */
	interface IRankingExpression {
	    /**
	     * The expression that was executed in the ranking expression
	     */
	    expression: string;
	    /**
	     * The relevance modifier that was applied
	     */
	    modifier: string;
	}

}
declare module Coveo {
	/**
	 * Describe an exception that was triggered by the index when performing the query.
	 */
	interface IQueryException {
	    /**
	     * The exception code
	     */
	    code: string;
	    context: string;
	}

}
declare module Coveo {
	/**
	 * Describe a field value returned by index
	 */
	interface IIndexFieldValue {
	    /**
	     * The value
	     */
	    value: string;
	    /**
	     * The optional lookupValue, if requested in the {@link IGroupByRequest}
	     */
	    lookupValue?: string;
	    /**
	     * The number of results in the index which have this value
	     */
	    numberOfResults: number;
	    /**
	     * The optional computedFieldResults, if requested in the {@link IGroupByRequest}
	     */
	    computedFieldResults?: number[];
	}

}
declare module Coveo {
	/**
	 * Describe a single group by value, returned by a {@link IGroupByResult}
	 */
	interface IGroupByValue extends IIndexFieldValue {
	    /**
	     * The string value. Think : Facet label.
	     */
	    value: string;
	    /**
	     * The lookup value if it was specified.
	     */
	    lookupValue?: string;
	    /**
	     * The number of results that match this value in the index for this particular group by request
	     */
	    numberOfResults: number;
	    /**
	     * The relevance score.
	     */
	    score: number;
	    /**
	     * If there was ny computed field request, the results will be available here.
	     */
	    computedFieldResults?: number[];
	}

}
declare module Coveo {
	/**
	 * A result for a {@link IGroupByRequest}.
	 *
	 * This is typically what the {@link Facet} component will use to render themselves.
	 */
	interface IGroupByResult {
	    /**
	     * The field on which the group by was performed.
	     */
	    field: string;
	    /**
	     * The differents values for this result
	     */
	    values: IGroupByValue[];
	    /**
	     * Available if there was any computed field request.
	     */
	    globalComputedFieldResults?: number[];
	}

}
declare module Coveo {
	/**
	 * Describe correction for a query
	 */
	interface IQueryCorrection {
	    /**
	     * The query once corrected
	     */
	    correctedQuery: string;
	    /**
	     * Array of correction for each word in the query
	     */
	    wordCorrections: IWordCorrection[];
	}
	interface IWordCorrection {
	    /**
	     * Offset, from the beginning of the query
	     */
	    offset: number;
	    /**
	     * Length of the correction
	     */
	    length: number;
	    /**
	     * The original word that was corrected
	     */
	    originalWord: string;
	    /**
	     * The new corrected word
	     */
	    correctedWord: string;
	}

}
declare module Coveo {
	/**
	 * A trigger is an action that the interface will perform (show a message, execute a function, redirect users) depending on the query that was performed.<br/>
	 * A trigger that can be configured in the Coveo Query Pipeline.
	 */
	interface ITrigger<T> {
	    type: string;
	    content: T;
	}
	/**
	 * Notify (show a message) to a user
	 */
	interface ITriggerNotify extends ITrigger<string> {
	}
	/**
	 * Redirect the user to another url
	 */
	interface ITriggerRedirect extends ITrigger<string> {
	}
	/**
	 * Perform a new query with a different query expression
	 */
	interface ITriggerQuery extends ITrigger<string> {
	}
	/**
	 * Execute a javascript function present in the page.
	 */
	interface ITriggerExecute extends ITrigger<{
	    name: string;
	    params: any[];
	}> {
	}

}
declare module Coveo {
	/**
	 * Describe a set a results returned by the Search API
	 */
	interface IQueryResults {
	    /**
	     * When an error occurs, and the errorsAsSuccess flag is passed, the error will be returned in the body of the response
	     */
	    error?: {
	        /**
	         * The error message
	         */
	        message: string;
	        /**
	         * The type of error
	         */
	        type: string;
	        /**
	         * A detailed execution report sent by the Search API
	         */
	        executionReport: any;
	    };
	    /**
	     * A detailed execution report sent by the Search API.<br/>
	     * Only sent if {@link IQuery.debug} is true
	     */
	    executionReport?: any;
	    /**
	     * The basic expression that was executed.<br/>
	     * Only sent if {@link IQuery.debug} is true
	     */
	    basicExpression?: string;
	    /**
	     * The advanced expression that was executed.<br/>
	     * Only sent if {@link IQuery.debug} is true
	     */
	    advancedExpression?: string;
	    /**
	     * The constant expression that was executed.<br/>
	     * Only sent if {@link IQuery.debug} is true
	     */
	    constantExpression?: string;
	    /**
	     * A list of user identities that were used to perform this query.<br/>
	     * Only sent if {@link IQuery.debug} is true
	     */
	    userIdentities?: IUserIdentity[];
	    /**
	     * A list of ranking expression that were used to tweak the relevance.<br/>
	     * Only sent if {@link IQuery.debug} is true
	     */
	    rankingExpressions?: IRankingExpression[];
	    /**
	     * The total number of results that matched the query in the index.
	     */
	    totalCount: number;
	    /**
	     * The total number of results that matched the query in the index, but with the duplicate filtered.
	     */
	    totalCountFiltered: number;
	    /**
	     * The duration of the query on the Coveo platform.
	     */
	    duration: number;
	    /**
	     * The duration of the query on the Coveo Index.
	     */
	    indexDuration: number;
	    /**
	     * The duration of the query on the proxy (not always applicable, can be optional)
	     */
	    proxyDuration?: number;
	    /**
	     * The duration of the query for the client.
	     */
	    clientDuration: number;
	    /**
	     * A unique identifier for this query, used mainly for the {@link Analytics} service.
	     */
	    searchUid?: string;
	    /**
	     * The pipeline that was used for this query.
	     */
	    pipeline?: string;
	    /**
	     * The search api version that was used for this query.
	     */
	    apiVersion?: number;
	    /**
	     * The split test run that was used for this query. (A/B tests feature of the Coveo Query Pipeline)
	     */
	    splitTestRun?: string;
	    /**
	     * The exception that can be returned by the index if the query triggered an error
	     */
	    exception?: IQueryException;
	    /**
	     * The results of the query
	     */
	    results: IQueryResult[];
	    /**
	     * The group by results of the query
	     */
	    groupByResults: IGroupByResult[];
	    /**
	     * Possible query corrections (eg : {@link DidYouMean})
	     */
	    queryCorrections: IQueryCorrection[];
	    /**
	     * Terms to highlight (with stemming) in the results
	     */
	    termsToHighlight: {
	        [originalTerm: string]: string[];
	    };
	    /**
	     * Phrases to highlight (with stemming) in the results
	     */
	    phrasesToHighlight: {
	        [originalTerm: string]: string[];
	    };
	    /**
	     * The Coveo Query Pipeline triggers, if any were configured.
	     */
	    triggers: ITrigger<any>[];
	    /**
	     * The keywords selected by Coveo Machine Learning Refined Query feature
	     */
	    refinedKeywords?: string[];
	    _folded: boolean;
	    _reusedSearchUid?: boolean;
	}

}
declare module Coveo {
	/**
	 * Describe a query function that can be executed against the index<br/>
	 * See : https://developers.coveo.com/display/SearchREST/Query+Function
	 */
	interface IQueryFunction {
	    /**
	     * Function to execute, as a string
	     */
	    'function': string;
	    /**
	     * The field name on which to store the query function result when the query returns
	     */
	    fieldName: string;
	}

}
declare module Coveo {
	/**
	 * Describe a ranking function that can be executed against the index.<br/>
	 * See : https://developers.coveo.com/display/SearchREST/Ranking+Function
	 */
	interface IRankingFunction {
	    /**
	     * The mathematical expression that calculates the ranking value to add to the result score.
	     */
	    expression: string;
	    /**
	     * Whether to normalize the value using the standard index scale or not. If you don't want to completely override the index ranking and use the qrf as a boost, you should turn this on.
	     */
	    normalizeWeight: boolean;
	}

}
declare module Coveo {
	/**
	 * Describe a computed field request<br/>
	 * See : https://developers.coveo.com/display/SearchREST/Computed+Field+Parameters
	 */
	interface IComputedFieldRequest {
	    /**
	     * This specifies the field on which the aggregate operation will be performed. This field is typically a numerical value.
	     */
	    field: string;
	    /**
	     * This specifies the operation to execute on the field value.<br/>
	     * Possible operations:
	     * -- sum: Computes the sum of all values.
	     * -- average: Computes the average of all values.
	     * --minimum: Retrieves the smallest of all values.
	     * --maximum: Retrieves the largest of all values.
	     */
	    operation: string;
	}

}
declare module Coveo {
	/**
	 * The IRangeValue interface describes a single range of values in a group by clause.
	 */
	interface IRangeValue {
	    /**
	     * Specifies the start of the range.
	     *
	     * E.g., `0`
	     */
	    start?: any;
	    /**
	     * Specifies the end of the range.
	     *
	     * E.g., `500`
	     */
	    end?: any;
	    /**
	     * Specifies the label to generate for this range.
	     *
	     * E.g., `0 - 500`
	     */
	    label?: string;
	    /**
	     * Specifies whether to include the value of the [end]{@link IRangeValue.end} property in this range.
	     */
	    endInclusive?: boolean;
	}

}
declare module Coveo {
	/**
	 * Describe a group by request to perform against the index.<br/>
	 * See : https://developers.coveo.com/display/SearchREST/Group+By+Parameters
	 */
	interface IGroupByRequest {
	    /**
	     * This specifies the field on which the Group By operation is performed. The Group By will return a Group By value for each distinct value of this field within the result set.
	     */
	    field: string;
	    lookupField?: string;
	    /**
	     * This specifies how the Group By values should be sorted by the indexer. If not specified, the default value is Score.<br/>
	     * Possible values are :<br/>
	     * -- score : the score is computed from the number of occurrences as well as from the position in the result set where the items having this value are appearing. Using this criterion, an item with 100 occurrences might appear after one with only 10 occurrences if those occurrences tend to appear sooner in the ranked result set.<br/>
	     * -- occurrences : Sort by number of occurrences, with values having the highest number appearing first. <br/>
	     * -- alphaascending / alphadescending : Sort alphabetically on the field values. <br/>
	     * -- computedfieldascending / computedfielddescending : Sort on the values of the first computed field for each Group By value. <br/>
	     * -- chisquare : Sort based on the relative frequency of values in the result set compared to the frequency in the whole index. This means that a value that doesn't appear often in the index but does appear often in the result set will tend to appear higher in the list.<br/>
	     * -- nosort : Do not sort the Group By values. The values will be returned in a random order.
	     */
	    sortCriteria?: string;
	    /**
	     * This specifies the maximum number of values that the Group By operation will return.<br/>
	     * If not specified, the default value is 10.
	     */
	    maximumNumberOfValues?: number;
	    /**
	     * This specifies how deep the index will scan the results to identify missing Group By values.<br/>
	     * If not specified, the default value is 1000.<br/>
	     * When executing a Group By operation, the index uses various heuristics to list all the values that are appearing in the result set. In some corner cases, some values might be omitted (it's a classical trade-off of precision vs performance). Using injection means that the index will explicitly scan the field values of the top n results of the query, and ensure that the values present in those results are included. Using higher values for this parameter may impact query performance.
	     */
	    injectionDepth?: number;
	    /**
	     * This specifies a different query expression on which to compute the Group By operation.<br/>
	     * By default, the query expression being executed is used.<br/>
	     * This feature is typically used for performance reasons to retrieve Group By values on separate expressions while executing a normal query in a single operation.
	     */
	    queryOverride?: string;
	    advancedQueryOverride?: string;
	    /**
	     * This specifies a constant query expression on which to compute the Group By operation.<br/>
	     * By default, the constant part of the query expression being executed is used.<br/>
	     * This feature is much like the normal queryOverride except that the index will keep the query expression in cache for faster queries. Do no put dynamic query expression in this parameter, as it will negatively impact the performance.
	     */
	    constantQueryOverride?: string;
	    /**
	     * This explicitly specifies a list of values for which Group By values should be generated.<br/>
	     * Trailing wildcards can be used to include ranges of values.<br/>
	     * eg : The array ["foo", "bar*"] would return Group By values for foo and any value starting with bar.
	     */
	    allowedValues?: string[];
	    /**
	     * This specifies an array of computed fields that should be computed for each Group By value that is returned.<br/>
	     * Computed fields are used to perform aggregate operations on other fields for all the matching items having a specific value in the Group By field in the results
	     */
	    computedFields?: IComputedFieldRequest[];
	    /**
	     * This explicitly specifies a list of range values for which Group By values should be generated.
	     */
	    rangeValues?: IRangeValue[];
	    /**
	     * By setting the parameter generateAutomaticRanges to true, the ranges will be calculated by the Coveo index.
	     */
	    generateAutomaticRanges?: boolean;
	    completeFacetWithStandardValues?: boolean;
	}

}
declare module Coveo {
	/**
	 * The IQuery interface describes a query that can be performed on the Coveo REST Search API.
	 *
	 * For basic usage, see the {@link IQuery.q} and {@link IQuery.aq} properties.
	 *
	 * In a normal scenario, a query is built by the {@link QueryBuilder} class.
	 */
	interface IQuery {
	    /**
	     * The basic query expression. <br/>
	     * This is typically the query expression entered by the user in a query box.<br/>
	     * Since this part of the query is expected to come from user input, it is processed by the Did You Mean feature.
	     */
	    q: string;
	    /**
	     * The advanced query expression.<br/>
	     * This is the part of the query expression generated by code based on various rules.<br/>
	     * eg: Selecting a facet value will cause an expression to be added to the advanced query expression.
	     */
	    aq?: string;
	    /**
	     * The constant query expression.<br/>
	     * This part of the expression is much alike the advanced query expression, but it is meant to hold expressions that are constant for all users of a search interface/widget.<br/>
	     * The results of evaluating those expressions are kept in a special index cache, to avoid re-evaluating them on each query.<br/>
	     * You must be careful to not include dynamic parts in this expression, otherwise you risk filling up the cache with useless data and this might have a negative impact on performance.<br/>
	     * Expressions other than cq also benefit from caching in the index, but using cq allows to explicitly require that a part of the query be included in the cache.
	     */
	    cq?: string;
	    /**
	     * The contextual text.<br/>
	     * This is the contextual text part of the query. It uses the Coveo Machine Learning service to pick key keywords from
	     * the text and add them to the basic expression.
	     * This field is mainly used to pass context such a case description, long textual query or any other form of text that might help in
	     * refining the query.
	     */
	    lq?: string;
	    /**
	     * The disjunction query expression.<br/>
	     * This is the disjunctive part of the query expression that is merged with the other expression parts using an OR boolean operator.<br/>
	     * When specified, the final expression evaluated by the index ends up being (q aq cq) OR (dq).
	     */
	    dq?: string;
	    /**
	     * The hub value set from the {@link Analytics} component.<br/>
	     * Used for analytics reporting in the Coveo platform
	     */
	    searchHub?: string;
	    /**
	     * The tab value set from the {@link Tab} component.
	     */
	    tab?: string;
	    language?: string;
	    /**
	     * Name of the query pipeline to use.<br/>
	     * This specifies the name of the query pipeline to use for the query. If not specified, the default value is default, which means the default query pipeline will be used.
	     */
	    pipeline?: string;
	    /**
	     * The maximum age for cached query results, in milliseconds.<br/>
	     * If results for the exact same request (including user identities) are available in the in-memory cache, they will be used if they are not older than the specified value.<br/>
	     * Otherwise, the query will be sent to the index.
	     */
	    maximumAge?: number;
	    /**
	     * Whether to enable wildcards on the basic expression keywords.<br/>
	     * This enables the wildcard features of the index. Coveo Platform will expand keywords containing wildcard characters to the possible matching keywords to broaden the query.<br/>
	     * See : https://onlinehelp.coveo.com/en/ces/7.0/user/using_wildcards_in_queries.htm<br/>
	     * If not specified, this parameter defaults to false.
	     */
	    wildcards?: boolean;
	    /**
	     * Whether to enable question marks with wildcards.<br/>
	     * This enables using the question mark ? character within wildcard expressions.
	     */
	    questionMark?: boolean;
	    /**
	     * Whether to enable the support for operator in lowercase (AND OR -> and or)
	     */
	    lowercaseOperators?: boolean;
	    /**
	     * Whether to enable partial matching of the basic expression keywords.<br/>
	     * By activating this, when the basic expression contains at least {@link IQuery.partialMatchKeywords}, items containing only the number of keywords specified by {@link IQuery.partialMatchThreshold} will also match the query.<br/>
	     * Without this option, items are required to contain all the keywords in order to match the query.<br/>
	     * If not specified, this parameter defaults to false.
	     */
	    partialMatch?: boolean;
	    /**
	     * The minimum number of keywords needed to activate partial match.<br/>
	     * This specifies the minimum number of keywords needed for the partial match feature to activate.<br/>
	     * If the basic expression contains less than this number of keywords, no transformation is applied on the query.<br/>
	     * If not specified, this parameter defaults to 5.
	     */
	    partialMatchKeywords?: number;
	    /**
	     * The threshold to use for matching items when partial match is enabled.<br/>
	     * This specifies the minimum number of query keywords that an item must contain when partial match is enabled. This value can either be an absolute number or a percentage value based on the total number of keywords.<br/>
	     * If not specified, this parameter defaults to 50%.
	     */
	    partialMatchThreshold?: string;
	    /**
	     * This is the 0-based index of the first result to return.<br/>
	     * If not specified, this parameter defaults to 0.
	     */
	    firstResult?: number;
	    /**
	     * This is the number of results to return, starting from {@link IQuery.firstResult}.<br/>
	     * If not specified, this parameter defaults to 10.
	     */
	    numberOfResults?: number;
	    /**
	     * This specifies the sort criterion(s) to use to sort results. If not specified, this parameter defaults to Relevancy.<br/>
	     * Possible values are : <br/>
	     * -- relevancy :  This uses all the configured ranking weights as well as any specified ranking expressions to rank results.<br/>
	     * -- dateascending / datedescending : Sort using the value of the @date field, which is typically the last modification date of an item in the index.<br/>
	     * -- qre : Sort using only the weights applied through ranking expressions. This is much like using Relevancy except that automatic weights based on keyword proximity etc, are not computed.<br/>
	     * -- nosort : Do not sort the results. The order in which items are returned is essentially random.<br/>
	     * -- @field ascending / @field descending : Sort using the value of a custom field.
	     */
	    sortCriteria?: string;
	    sortField?: string;
	    /**
	     * This specifies a field on which {@link Folding} should be performed.<br/>
	     * Folding is a kind of duplicate filtering where only the first result with any given value of the field is included in the result set.<br/>
	     * It's typically used to return only one result in a conversation, for example when forum posts in a thread are indexed as separate items.
	     */
	    filterField?: string;
	    /**
	     * Number of results that should be folded, using the {@link IQuery.filterField}
	     */
	    filterFieldRange?: number;
	    /**
	     * This specifies an array of fields that should be returned for each result.<br/>
	     * eg: ['@foo','@bar']
	     *
	     */
	    fieldsToInclude?: string[];
	    /**
	     * This specifies an array of fields that should be excluded from the query results.<br/>
	     * eg: ['@foo','@bar']
	     *
	     */
	    fieldsToExclude?: string[];
	    /**
	     * This specifies the length (in number of characters) of the excerpts generated by the indexer based on the keywords present in the query.<br/>
	     * The index includes the top most interesting sentences (in the order they appear in the item) that fit in the specified number of characters.<br/>
	     * When not specified, the default value is 200.
	     */
	    excerptLength?: number;
	    /**
	     * This specifies whether the first sentences of the item should be included in the results.<br/>
	     * The retrieveFirstSentences option is typically used instead of excerpts when displaying email items, where the first sentence of the email might be of more interest than a contextually generated excerpt.
	     */
	    retrieveFirstSentences?: boolean;
	    /**
	     * This enables the query correction feature of the index.<br/>
	     * By activating this, the index returns an array of {link IQueryCorrection} with suggested word corrections.
	     */
	    enableDidYouMean?: boolean;
	    /**
	     * This specifies an array of Query Function operation that will be executed on the results.
	     */
	    queryFunctions?: IQueryFunction[];
	    /**
	     * This specifies an array of Ranking Function operations that will be executed on the result
	     */
	    rankingFunctions?: IRankingFunction[];
	    /**
	     * This specifies an array of Group By operations that can be performed on the query results to extract facets
	     */
	    groupBy?: IGroupByRequest[];
	    /**
	     * Setting this property to true will return more debugging information from both the index and the search API.
	     * Use this with care as this will negatively impact the performance of the query.
	     *
	     * It should probably void be set to `true` in production mode...
	     */
	    debug?: boolean;
	    timezone?: string;
	    /**
	     * Whether to enable the special query syntax such as field references for the basic query expression (parameter q).
	     * It is equivalent to a No syntax block applied to the basic query expression.
	     * If not specified, the parameter defaults to false
	     */
	    enableQuerySyntax?: boolean;
	    enableDuplicateFiltering?: boolean;
	    /**
	     * Whether the index should take collaborative rating in account when ranking result. See : {@link ResultRating}
	     */
	    enableCollaborativeRating?: boolean;
	    /**
	     * Specifies the childField when doing parent-child loading (See : {@link Folding})
	     */
	    childField?: string;
	    /**
	     * Specifies the parentField when doing parent-child loading (See : {@link Folding})
	     */
	    parentField?: string;
	    /**
	     * The context is a map of key_value that can be used in the Query pipeline in the Coveo platform.<br/>
	     */
	    context?: {
	        [name: string]: any;
	    };
	    /**
	     * The actions history represents the past actions a user made and is used by the Coveo Machine Learning service to
	     * suggest recommendations. It is generated by the page view script (https://github.com/coveo/coveo.analytics.js)
	     */
	    actionsHistory?: string;
	    /**
	     * This is the id of the recommendation interface that generated the query.
	     */
	    recommendation?: string;
	}

}
declare module Coveo {
	class QueryUtils {
	    static createGuid(): string;
	    static generateWithRandom(): string;
	    static generateWithCrypto(): string;
	    static setStateObjectOnQueryResults(state: any, results: IQueryResults): void;
	    static setStateObjectOnQueryResult(state: any, result: IQueryResult): void;
	    static setSearchInterfaceObjectOnQueryResult(searchInterface: any, result: IQueryResult): void;
	    static setIndexAndUidOnQueryResults(query: IQuery, results: IQueryResults, queryUid: string, pipeline: string, splitTestRun: string): void;
	    static setTermsToHighlightOnQueryResults(query: IQuery, results: IQueryResults): void;
	    static splitFlags(flags: string, delimiter?: string): string[];
	    static isAttachment(result: IQueryResult): boolean;
	    static containsAttachment(result: IQueryResult): boolean;
	    static hasHTMLVersion(result: IQueryResult): boolean;
	    static hasThumbnail(result: IQueryResult): boolean;
	    static hasExcerpt(result: IQueryResult): boolean;
	    static getAuthor(result: IQueryResult): string;
	    static getUriHash(result: IQueryResult): string;
	    static getObjectType(result: IQueryResult): string;
	    static getCollection(result: IQueryResult): string;
	    static getSource(result: IQueryResult): string;
	    static getLanguage(result: IQueryResult): string;
	    static getPermanentId(result: IQueryResult): {
	        fieldValue: string;
	        fieldUsed: string;
	    };
	    static quoteAndEscapeIfNeeded(str: string): string;
	    static quoteAndEscape(str: string): string;
	    static escapeString(str: string): string;
	    static isAtomicString(str: string): boolean;
	    static isRangeString(str: string): boolean;
	    static isRangeWithoutOuterBoundsString(str: string): boolean;
	    static buildFieldExpression(field: string, operator: string, values: string[]): string;
	    static buildFieldNotEqualExpression(field: string, values: string[]): string;
	    static mergeQueryString(url: string, queryString: string): string;
	    static mergePath(url: string, path: string): string;
	    static setPropertyOnResults(results: IQueryResults, property: string, value: any, afterOneLoop?: () => any): void;
	    static setPropertyOnResult(result: IQueryResult, property: string, value: any): void;
	    static getUrlParameter(name: string): string;
	    static isStratusAgnosticField(fieldToVerify: string, fieldToMatch: string): boolean;
	}

}
declare module Coveo {
	/**
	 * An `ExpressionBuilder` that is mostly used by the {@link QueryBuilder}.<br/>
	 * It is used to build a single query expression.<br/>
	 * It allows combining multiple expression parts into a single string and provides utilities to generate common expression parts.
	 */
	class ExpressionBuilder {
	    wrapParts: boolean;
	    /**
	     * Add a new part to the expression.
	     * @param expression
	     */
	    add(expression: string): void;
	    /**
	     * Take another `ExpressionBuilder`, and copy it.
	     * @param expression
	     */
	    fromExpressionBuilder(expression: ExpressionBuilder): void;
	    /**
	     * Add a new part to the expression, but specific for field values<br/>
	     * eg @field=(value1,value2,value3).
	     * @param field The field for which to create an expression (e.g.: @foo).
	     * @param operator The operator to use e.g.: = (equal) == (strict equal) <> (not equal).
	     * @param values The values to put in the expression.
	     */
	    addFieldExpression(field: string, operator: string, values: string[]): void;
	    /**
	     * Add a new part to the expression, but specific for field values<br/>
	     * eg : NOT @field==(value1, value2, value3).
	     * @param field The field for which to create an expression (e.g.: @foo)
	     * @param values The values to put in the expression.
	     */
	    addFieldNotEqualExpression(field: string, values: string[]): void;
	    /**
	     * Removes an expression from the builder.
	     * @param expression
	     */
	    remove(expression: string): void;
	    /**
	     * Checks if the builder is currently empty.
	     * @returns {boolean}
	     */
	    isEmpty(): boolean;
	    /**
	     * Builds the expression string by combining all the parts together.<br/>
	     * @param exp expression to join the different parts, default to a space.
	     * @returns {any}
	     */
	    build(exp?: string): string;
	    /**
	     * Merges several `ExpressionBuilder` together.
	     * @param builders Builders that should be merged.
	     * @returns {Coveo.ExpressionBuilder}
	     */
	    static merge(...builders: ExpressionBuilder[]): ExpressionBuilder;
	    /**
	     * Merges several `ExpressionBuilder` together, using the OR operator.
	     * @param builders Builders that should be merged.
	     * @returns {Coveo.ExpressionBuilder}
	     */
	    static mergeUsingOr(...builders: ExpressionBuilder[]): ExpressionBuilder;
	}

}
declare module Coveo {
	/**
	 * Describe the expressions part of a QueryBuilder.
	 */
	interface IQueryBuilderExpression {
	    /**
	     * The whole expression
	     */
	    full?: string;
	    /**
	     * The full part, but without the constant.
	     */
	    withoutConstant?: string;
	    /**
	     * The constant part of the expression
	     */
	    constant?: string;
	    /**
	     * The basic part of the expression
	     */
	    basic?: string;
	    /**
	     * The advanced part of the expression
	     */
	    advanced?: string;
	}
	/**
	 * The QueryBuilder is used to build a {@link IQuery} that will be able to be executed using the Search API.<br/>
	 * The class exposes several members and methods that help components and external code to build up the final query that is sent to the Search API.<br/>
	 */
	class QueryBuilder {
	    /**
	     * Used to build the basic part of the query expression.<br/>
	     * This part typically consists of user-entered content such as query keywords, etc.
	     * @type {Coveo.ExpressionBuilder}
	     */
	    expression: ExpressionBuilder;
	    /**
	     * Used to build the advanced part of the query expression.<br/>
	     * This part is typically formed of filter expressions generated by components such as facets, external code, etc.
	     * @type {Coveo.ExpressionBuilder}
	     */
	    advancedExpression: ExpressionBuilder;
	    /**
	     * Used to build the advanced part of the query expression.<br/>
	     * This part is similar to `advancedExpression`, but its content is interpreted as a constant expression by the index and it takes advantage of special caching features.
	     * @type {Coveo.ExpressionBuilder}
	     */
	    constantExpression: ExpressionBuilder;
	    /**
	     * The contextual text.<br/>
	     * This is the contextual text part of the query. It uses the Coveo Machine Learning service to pick key keywords from the text and add them to the basic expression.
	     * This field is mainly used to pass context such a case description, long textual query or any other form of text that might help in
	     * refining the query.
	     */
	    longQueryExpression: ExpressionBuilder;
	    /**
	     * Used to build the disjunctive part of the query expression.<br/>
	     * When present, this part is evaluated separately from the other expressions and the matching results are merged to those matching expressions, `advancedExpression` and `constantExpression`.<br/>
	     * The final boolean expression for the query is thus (basic advanced constant) OR (disjunction).
	     * @type {Coveo.ExpressionBuilder}
	     */
	    disjunctionExpression: ExpressionBuilder;
	    /**
	     * The hub value set from the {@link Analytics} component.<br/>
	     * Used for analytics reporting in the Coveo platform.
	     */
	    searchHub: string;
	    /**
	     * The tab value set from the {@link Tab} component.
	     */
	    tab: string;
	    language: string;
	    /**
	     * Name of the query pipeline to use.<br/>
	     * This specifies the name of the query pipeline to use for the query. If not specified, the default value is default, which means the default query pipeline will be used.
	     */
	    pipeline: string;
	    /**
	     * The maximum age for cached query results, in milliseconds.<br/>
	     * If results for the exact same request (including user identities) are available in the in-memory cache, they will be used if they are not older than the specified value.<br/>
	     * Otherwise, the query will be sent to the index.
	     */
	    maximumAge: number;
	    /**
	     * Whether to enable wildcards on the basic expression keywords.<br/>
	     * This enables the wildcard features of the index. Coveo Platform will expand keywords containing wildcard characters to the possible matching keywords to broaden the query.<br/>
	     * (see : https://onlinehelp.coveo.com/en/ces/7.0/user/using_wildcards_in_queries.htm).<br/>
	     * If not specified, this parameter defaults to false.
	     */
	    enableWildcards: boolean;
	    /**
	     * Whether to enable question marks with wildcards.<br/>
	     * This enables using the question mark ? character within wildcard expressions.
	     */
	    enableQuestionMarks: boolean;
	    /**
	     * Whether to enable the special query syntax such as field references for the basic query expression (parameter q).
	     * It is equivalent to a No syntax block applied to the basic query expression.
	     * If not specified, the parameter defaults to false.
	     */
	    enableQuerySyntax: boolean;
	    /**
	     * Whether to enable the support for operator in lowercase (AND OR -> and or).
	     */
	    enableLowercaseOperators: boolean;
	    /**
	     * Whether to enable partial matching of the basic expression keywords.<br/>
	     * By activating this, when the basic expression contains at least {@link IQuery.partialMatchKeywords}, items containing only the number of keywords specified by {@link IQuery.partialMatchThreshold} will also match the query.<br/>
	     * Without this option, items are required to contain all the keywords in order to match the query.<br/>
	     * If not specified, this parameter defaults to false.
	     */
	    enablePartialMatch: boolean;
	    /**
	     * The minimum number of keywords needed to activate partial match.<br/>
	     * This specifies the minimum number of keywords needed for the partial match feature to activate.<br/>
	     * If the basic expression contains less than this number of keywords, no transformation is applied on the query.<br/>
	     * If not specified, this parameter defaults to 5.
	     */
	    partialMatchKeywords: number;
	    /**
	     * The threshold to use for matching items when partial match is enabled.<br/>
	     * This specifies the minimum number of query keywords that an item must contain when partial match is enabled. This value can either be an absolute number or a percentage value based on the total number of keywords.<br/>
	     * If not specified, this parameter defaults to 50%.
	     */
	    partialMatchThreshold: string;
	    /**
	     * This is the 0-based index of the first result to return.<br/>
	     * If not specified, this parameter defaults to 0.
	     */
	    firstResult: number;
	    /**
	     * This is the number of results to return, starting from {@link IQuery.firstResult}.<br/>
	     * If not specified, this parameter defaults to 10.
	     */
	    numberOfResults: number;
	    /**
	     * This specifies the length (in number of characters) of the excerpts generated by the indexer based on the keywords present in the query.<br/>
	     * The index includes the top most interesting sentences (in the order they appear in the item) that fit in the specified number of characters.<br/>
	     * When not specified, the default value is 200.
	     */
	    excerptLength: number;
	    /**
	     * This specifies a field on which {@link Folding} should be performed.<br/>
	     * Folding is a kind of duplicate filtering where only the first result with any given value of the field is included in the result set.<br/>
	     * It's typically used to return only one result in a conversation, for example when forum posts in a thread are indexed as separate items.
	     */
	    filterField: string;
	    /**
	     * Number of results that should be folded, using the {@link IQuery.filterField}.
	     */
	    filterFieldRange: number;
	    /**
	     * Specifies the `parentField` when doing parent-child loading (See : {@link Folding}).
	     */
	    parentField: string;
	    /**
	     * Specifies the childField when doing parent-child loading (See : {@link Folding}).
	     */
	    childField: string;
	    fieldsToInclude: string[];
	    requiredFields: string[];
	    includeRequiredFields: boolean;
	    fieldsToExclude: string[];
	    /**
	     * Whether to enable query corrections on this query (see {@link DidYouMean}).
	     */
	    enableDidYouMean: boolean;
	    /**
	     * Whether to enable debug info on the query.<br/>
	     * This will return additional information on the resulting JSON response from the Search API.<br/>
	     * Mostly: execution report (a detailed breakdown of the parsed and executed query).
	     */
	    enableDebug: boolean;
	    /**
	     * Whether the index should take collaborative rating in account when ranking result (see : {@link ResultRating}).
	     */
	    enableCollaborativeRating: boolean;
	    /**
	     * This specifies the sort criterion(s) to use to sort results. If not specified, this parameter defaults to relevancy.<br/>
	     * Possible values are : <br/>
	     * -- relevancy :  This uses all the configured ranking weights as well as any specified ranking expressions to rank results.<br/>
	     * -- dateascending / datedescending Sort using the value of the `@date` field, which is typically the last modification date of an item in the index.<br/>
	     * -- qre : Sort using only the weights applied through ranking expressions. This is much like using `relevancy` except that automatic weights based on keyword proximity etc, are not computed.<br/>
	     * -- nosort : Do not sort the results. The order in which items are returned is essentially random.<br/>
	     * -- @field ascending / @field descending Sort using the value of a custom field.
	     */
	    sortCriteria: string;
	    sortField: string;
	    retrieveFirstSentences: boolean;
	    timezone: string;
	    queryUid: string;
	    /**
	     * This specifies an array of Query Function operation that will be executed on the results.
	     */
	    queryFunctions: IQueryFunction[];
	    /**
	     * This specifies an array of Ranking Function operations that will be executed on the results.
	     */
	    rankingFunctions: IRankingFunction[];
	    /**
	     * This specifies an array of Group By operations that can be performed on the query results to extract facets.
	     */
	    groupByRequests: IGroupByRequest[];
	    enableDuplicateFiltering: boolean;
	    /**
	     * The context is a map of key_value that can be used in the Query pipeline in the Coveo platform.<br/>
	     */
	    context: {
	        [key: string]: any;
	    };
	    /**
	     * The actions history represents the past actions a user made and is used by the Coveo Machine Learning service to suggest recommendations.
	     * It is generated by the page view script (https://github.com/coveo/coveo.analytics.js).
	     */
	    actionsHistory: string;
	    /**
	     * This is the ID of the recommendation interface that generated the query.
	     */
	    recommendation: string;
	    /**
	     * Build the current content or state of the query builder and return a {@link IQuery}.<br/>
	     * build can be called multiple times on the same QueryBuilder.
	     * @returns {IQuery}
	     */
	    build(): IQuery;
	    /**
	     * Return only the expression(s) part(s) of the query, as a string.<br/>
	     * This means the basic, advanced and constant part in a complete expression {@link IQuery.q}, {@link IQuery.aq}, {@link IQuery.cq}.
	     * @returns {string}
	     */
	    computeCompleteExpression(): string;
	    /**
	     * Return only the expression(s) part(s) of the query, as an object.
	     * @returns {{full: string, withoutConstant: string, constant: string}}
	     */
	    computeCompleteExpressionParts(): IQueryBuilderExpression;
	    /**
	     * Return only the expression(s) part(s) of the query, as a string, except the given expression.<br/>
	     * This is used by {@link Facet}, to build their group by request with query override.
	     * @param except
	     * @returns {string}
	     */
	    computeCompleteExpressionExcept(except: string): string;
	    /**
	     * Return only the expression(s) part(s) of the query, as an object, except the given expression.<br/>
	     * This is used by {@link Facet}, to build their group by request with query override.
	     * @param except
	     * @returns {{full: string, withoutConstant: string, constant: string}}
	     */
	    computeCompleteExpressionPartsExcept(except: string): IQueryBuilderExpression;
	    /**
	     * Add fields to specifically include when the results return.<br/>
	     * This can be used to accelerate the execution time of every query, as there is much less data to process if you whitelist specific fields.
	     * @param fields
	     */
	    addFieldsToInclude(fields: string[]): void;
	    addRequiredFields(fields: string[]): void;
	    /**
	     * Add fields to specifically exclude when the results return.<br/>
	     * This can be used to accelerate the execution time of every query, as there is much less data to process if you blacklist specific fields.
	     * @param fields
	     */
	    addFieldsToExclude(fields: string[]): void;
	    computeFieldsToInclude(): string[];
	    /**
	     * Add a single context key->value pair to the query.<br/>
	     * This is used by the Query pipeline in the Coveo platform.
	     * @param key
	     * @param value
	     */
	    addContextValue(key: string, value: any): void;
	    /**
	     * Add a context object to the query.<br/>
	     * This can contain multiple key->value.<br/>
	     * This is used by the Query pipeline in the Coveo platform.
	     * @param values
	     */
	    addContext(values: {
	        [key: string]: any;
	    }): void;
	}

}
declare module Coveo {
	class LocalStorageUtils<T> {
	    id: string;
	    constructor(id: string);
	    save(data: T): void;
	    load(): T;
	    remove(key?: string): void;
	}

}
declare module Coveo {
	/**
	 * The `ITaggingRequest` interface describes a tag request on an item.
	 */
	interface ITaggingRequest {
	    /**
	     * Contains the field name to tag.
	     */
	    fieldName: string;
	    /**
	     * Contains the value to tag.
	     */
	    fieldValue: string;
	    /**
	     * Indicates whether to add the tag value, or to remove the tag value.
	     */
	    doAdd: boolean;
	    /**
	     * Contains the unique ID of the item to tag.
	     */
	    uniqueId: string;
	}

}
declare module Coveo {
	/**
	 * The `IRatingRequest` interface describes a request to rate an item in the index.
	 */
	interface IRatingRequest {
	    /**
	     * Contains the unique ID of the item to rate.
	     */
	    uniqueId: string;
	    /**
	     * Contains the rating description.
	     *
	     * Possible values are `Undefined` | `Lowest` | `Low` | `Average` | `Good` | `Best`.
	     */
	    rating: string;
	}

}
declare module Coveo {
	/**
	 * The IQuerySuggestCompletion interface describes a completion suggestion from the Coveo Machine Learning
	 * service (see [Coveo Machine Learning](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=177).
	 */
	interface IQuerySuggestCompletion {
	    /**
	     * Contains the expression to complete.
	     */
	    expression: string;
	    /**
	     * Contains a value indicating how certain the Coveo Machine Learning service is that this suggestion is actually
	     * relevant.
	     */
	    score: number;
	    /**
	     * Contains the highlighted expression to complete.
	     */
	    highlighted: string;
	    /**
	     * Contains a value indicating the confidence level that this suggestion should be executed.
	     */
	    executableConfidence: number;
	}
	/**
	 * The IQuerySuggestResponse interface describes a response from the Coveo Machine Learning service query
	 * suggestions.
	 */
	interface IQuerySuggestResponse {
	    /**
	     * Contains an array of completions.
	     */
	    completions: IQuerySuggestCompletion[];
	}
	/**
	 * The IQuerySuggestRequest interface describes a request to the Coveo Machine Learning service query suggest.
	 */
	interface IQuerySuggestRequest {
	    /**
	     * Specifies the query / word for which to get completion.
	     */
	    q: string;
	    /**
	     * Specifies the search hub for which to get suggestions.
	     */
	    searchHub?: string;
	    /**
	     * Specifies the number of suggestions that the Coveo Machine Learning service should return.
	     *
	     * Default value is `5`.
	     */
	    count?: number;
	    /**
	     * Specifies the pipeline to use for the request.
	     */
	    pipeline?: string;
	    /**
	     * Specifies the context to use for the request.
	     */
	    context?: IStringMap<any>;
	    language?: string;
	    autoCompleter?: string;
	    additionalData?: any;
	    format?: string;
	    enableWordCompletion?: boolean;
	}

}
declare module Coveo {
	interface IEndpointError extends Error {
	    message: string;
	    type: string;
	    name: string;
	}

}
declare module Coveo {
	/**
	 * Information about a query extension
	 */
	interface IExtension {
	    /**
	     * The name of the extension
	     */
	    name: string;
	    /**
	     * An array of all possible arguments
	     */
	    argumentNames: string[];
	}

}
declare module Coveo {
	/**
	 * Descrobe a request to list the possible values of a field
	 */
	interface IListFieldValuesRequest {
	    /**
	     * The field for which to list values
	     */
	    field: string;
	    /**
	     * The lookup field to use
	     */
	    lookupField?: string;
	    /**
	     * Whether to ignore accents in the values
	     */
	    ignoreAccents?: boolean;
	    /**
	     * The sort order for the returned field.
	     */
	    sortCriteria?: string;
	    /**
	     * Maximum number of field values to return
	     */
	    maximumNumberOfValues?: number;
	    /**
	     * A query to execute when returning possible field values
	     */
	    queryOverride?: string;
	    /**
	     * A query to execute when returning possible field values, put in cache in the index
	     */
	    constantQueryOverride?: string;
	    /**
	     * A pattern to filter out results
	     */
	    pattern?: string;
	    /**
	     * The type of the pattern (eg: regex)
	     */
	    patternType?: string;
	}

}
declare module Coveo {
	const SUBSCRIPTION_TYPE: {
	    followQuery: string;
	    followDocument: string;
	};
	interface ISearchAlertsEndpointOptions {
	    restUri: string;
	    accessToken?: string;
	    errorsAsSuccess?: boolean;
	}
	interface ISearchAlertsEndpointCallOptions {
	    type?: string;
	    page?: number;
	}
	interface ISearchAlertsEndpointSearchCallOptions {
	    documentIds: string[];
	}
	/**
	 * Describe a subscription to the Coveo Search alerts service
	 */
	interface ISubscription extends ISubscriptionRequest {
	    /**
	     * The id of the subscription
	     */
	    id: string;
	    /**
	     * The user associated with the subscription
	     */
	    user: ISubscriptionUser;
	}
	/**
	 * Describe a user associated with a subscription to the Coveo Search alerts service
	 */
	interface ISubscriptionUser {
	    /**
	     * The email of the user
	     */
	    email: string;
	    /**
	     * The token used to manage the alerts via email.
	     */
	    manageToken: string;
	}
	/**
	 * Describe a request to subscribe to the Coveo Search alerts service
	 */
	interface ISubscriptionRequest {
	    /**
	     * Type of subscription.<br/>
	     * Can be 'followQuery' or 'followDocument'
	     */
	    type: string;
	    /**
	     * Config of the subscription
	     */
	    typeConfig: ISubscriptionQueryRequest | ISubscriptionItemRequest;
	    /**
	     * Frequency of the alerts
	     */
	    frequency?: string;
	    /**
	     * The name that should be used by the API to identify this subscription
	     */
	    name: string;
	}
	/**
	 * Describe a subscription to a single query
	 */
	interface ISubscriptionQueryRequest {
	    /**
	     * Query to subscribe to
	     */
	    query: IQuery;
	    /**
	     * Which field on the result set represent the modification date for which you wish to receive alerts
	     */
	    modifiedDateField?: string;
	}
	/**
	 * The `ISubscriptionItemRequest` interface describes a subscription to a single item (a result).
	 */
	interface ISubscriptionItemRequest {
	    /**
	     * Contains the unique ID of the item to subscribe to.
	     */
	    id: string;
	    /**
	     * Contains the title of the item to subscribe to.
	     */
	    title: string;
	    /**
	     * Indicates which field contains the modification date of the item to subscribe to.
	     */
	    modifiedDateField?: string;
	    /**
	     * Contains a list of fields to monitor for the item to subscribe to.
	     */
	    watchedFields?: string[];
	}

}
declare module Coveo {
	interface ISentryLog {
	    level?: 'WARNING' | 'INFO' | 'DEBUG' | 'FATAL';
	    message: string;
	    title: string;
	}

}
declare module Coveo {
	class SearchEndpointWithDefaultCallOptions implements ISearchEndpoint {
	    options: ISearchEndpointOptions;
	    constructor(endpoint: ISearchEndpoint, callOptions?: IEndpointCallOptions);
	    getBaseUri(): string;
	    getBaseAlertsUri(): string;
	    getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
	    isJsonp(): boolean;
	    search(query: IQuery, callOptions?: IEndpointCallOptions): Promise<IQueryResults>;
	    getExportToExcelLink(query: IQuery, numberOfResults: number, callOptions?: IEndpointCallOptions): string;
	    tagDocument(taggingRequest: ITaggingRequest, callOptions?: IEndpointCallOptions): Promise<boolean>;
	    getQuerySuggest(request: IQuerySuggestRequest, callOptions?: IEndpointCallOptions): Promise<IQuerySuggestResponse>;
	    rateDocument(ratingRequest: IRatingRequest, callOptions?: IEndpointCallOptions): Promise<boolean>;
	    getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: IViewAsHtmlOptions): Promise<ArrayBuffer>;
	    getDocument(documentUniqueId: string, callOptions?: IGetDocumentOptions): Promise<IQueryResult>;
	    getDocumentText(documentUniqueID: string, callOptions?: IEndpointCallOptions): Promise<string>;
	    getDocumentHtml(documentUniqueID: string, callOptions?: IViewAsHtmlOptions): Promise<HTMLDocument>;
	    getViewAsHtmlUri(documentUniqueID: string, callOptions?: IViewAsHtmlOptions): string;
	    getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: IViewAsHtmlOptions): string;
	    listFieldValues(request: IListFieldValuesRequest, callOptions?: IEndpointCallOptions): Promise<IIndexFieldValue[]>;
	    listFields(callOptions?: IEndpointCallOptions): Promise<IFieldDescription[]>;
	    extensions(callOptions?: IEndpointCallOptions): Promise<IExtension[]> | Promise<IEndpointError>;
	    follow(request: ISubscriptionRequest): Promise<ISubscription>;
	    listSubscriptions(page: number): Promise<ISubscription[]>;
	    updateSubscription(subscription: ISubscription): Promise<ISubscription>;
	    deleteSubscription(subscription: ISubscription): Promise<ISubscription>;
	    logError(sentryLog: ISentryLog): Promise<boolean>;
	}

}
declare module Coveo {
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.newQuery}
	 */
	interface INewQueryEventArgs {
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	    /**
	     * If this property is set to true by any handlers, the query will not be executed.
	     */
	    cancel: boolean;
	    origin?: Component;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.buildingQuery}
	 */
	interface IBuildingQueryEventArgs {
	    /**
	     * Allow handlers to modify the query by using the {@link QueryBuilder}
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	    /**
	     * If this property is set to true by any handlers, the query will not be executed.
	     */
	    cancel: boolean;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.doneBuildingQuery}
	 */
	interface IDoneBuildingQueryEventArgs {
	    /**
	     * Allow handlers to modify the query by using the {@link QueryBuilder}
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	    /**
	     * If this property is set to true by any handlers, the query will not be executed.
	     */
	    cancel: boolean;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.duringQuery}
	 */
	interface IDuringQueryEventArgs {
	    /**
	     * The {@link QueryBuilder} that was used for the current query
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * The query that was just executed
	     */
	    query: IQuery;
	    /**
	     * A promises for the results that will be returned by the Search API
	     */
	    promise: Promise<IQueryResults>;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.querySuccess}
	 */
	interface IQuerySuccessEventArgs {
	    /**
	     * The query that was just executed
	     */
	    query: IQuery;
	    /**
	     * The results returned by the query that was executed
	     */
	    results: IQueryResults;
	    /**
	     * The {@link QueryBuilder} that was used for the current query
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.fetchMoreSuccess}
	 */
	interface IFetchMoreSuccessEventArgs {
	    /**
	     * The query that was just executed
	     */
	    query: IQuery;
	    /**
	     * The results returned by the query that was executed
	     */
	    results: IQueryResults;
	    /**
	     * The {@link QueryBuilder} that was used for the current query
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.queryError}
	 */
	interface IQueryErrorEventArgs {
	    /**
	     * The {@link QueryBuilder} that was used for the current query
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * The endpoint on which the error happened.
	     */
	    endpoint: ISearchEndpoint;
	    /**
	     * The query that was just executed
	     */
	    query: IQuery;
	    /**
	     * The error info / message itself.
	     */
	    error: IEndpointError;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.preprocessResults}
	 */
	interface IPreprocessResultsEventArgs {
	    /**
	     * The {@link QueryBuilder} that was used for the current query
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * The query that was just executed
	     */
	    query: IQuery;
	    /**
	     * The results returned by the query that was executed
	     */
	    results: IQueryResults;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.preprocessMoreResults}
	 */
	interface IPreprocessMoreResultsEventArgs {
	    /**
	     * The results returned by the query that was executed
	     */
	    results: IQueryResults;
	}
	/**
	 * Argument sent to all handlers bound on {@link QueryEvents.noResults}
	 */
	interface INoResultsEventArgs {
	    /**
	     * The {@link QueryBuilder} that was used for the current query
	     */
	    queryBuilder: QueryBuilder;
	    /**
	     * The query that was just executed
	     */
	    query: IQuery;
	    /**
	     * The results returned by the query that was executed
	     */
	    results: IQueryResults;
	    /**
	     * Determine if the query is a "search as you type"
	     */
	    searchAsYouType: boolean;
	    /**
	     * If set to true by any handler, the last query will automatically be re-executed again.
	     */
	    retryTheQuery: boolean;
	}
	interface IBuildingCallOptionsEventArgs {
	    options: IEndpointCallOptions;
	}
	/**
	 * This static class is there to contains the different string definition for all the events related to query.
	 *
	 * Note that these events will only be triggered when the {@link QueryController.executeQuery} method is used, either directly or by using {@link executeQuery}
	 */
	class QueryEvents {
	    /**
	     * Triggered when a new query is launched.
	     *
	     * All bound handlers will receive {@link INewQueryEventArgs} as an argument.
	     *
	     * The string value is `newQuery`.
	     * @type {string}
	     */
	    static newQuery: string;
	    /**
	     * Triggered when the query is being built.
	     *
	     * This is typically where all components will contribute their part to the {@link IQuery} using the {@link QueryBuilder}.
	     *
	     * All bound handlers will receive {@link IBuildingQueryEventArgs} as an argument.
	     *
	     * The string value is `buildingQuery`.
	     * @type {string}
	     */
	    static buildingQuery: string;
	    /**
	     * Triggered when the query is done being built.
	     *
	     * This is typically where the facet will add it's {@link IGroupByRequest} to the {@link IQuery}.
	     *
	     * All bound handlers will receive {@link IDoneBuildingQueryEventArgs} as an argument.
	     *
	     * The string value is `doneBuildingQuery`.
	     * @type {string}
	     */
	    static doneBuildingQuery: string;
	    /**
	     * Triggered when the query is being executed on the Search API.
	     *
	     * All bound handlers will receive {@link IDuringQueryEventArgs} as an argument.
	     *
	     * The string value is `duringQuery`.
	     * @type {string}
	     */
	    static duringQuery: string;
	    /**
	     * Triggered when more results are being fetched on the Search API (think : infinite scrolling, or pager).
	     *
	     * All bound handlers will receive {@link IDuringQueryEventArgs} as an argument.
	     *
	     * The string value is `duringFetchMoreQuery`.
	     * @type {string}
	     */
	    static duringFetchMoreQuery: string;
	    /**
	     * Triggered when a query successfully returns from the Search API.
	     *
	     * All bound handlers will receive {@link IQuerySuccessEventArgs} as an argument.
	     *
	     * The string value is `querySuccess`.
	     * @type {string}
	     */
	    static querySuccess: string;
	    /**
	     * Triggered when a more results were successfully returned from the Search API. (think : infinite scrolling, or pager).
	     *
	     * All bound handlers will receive {@link IFetchMoreSuccessEventArgs} as an argument.
	     *
	     * The string value is `fetchMoreSuccess`.
	     * @type {string}
	     */
	    static fetchMoreSuccess: string;
	    /**
	     * Triggered after the main query success event has finished executing.
	     *
	     * This is typically where facets will process the {@link IGroupByResult} and render themselves.
	     *
	     * All bound handlers will receive {@link IQuerySuccessEventArgs} as an argument.
	     *
	     * The string value is `deferredQuerySuccess`.
	     * @type {string}
	     */
	    static deferredQuerySuccess: string;
	    /**
	     * Triggered when there was an error executing a query on the Search API.
	     *
	     * All bound handlers will receive {@link IQueryErrorEventArgs} as an argument.
	     *
	     * The string value is `queryError`.
	     * @type {string}
	     */
	    static queryError: string;
	    /**
	     * Triggered before the {@link QueryEvents.querySuccess} event.
	     *
	     * This allows external code to modify the results before rendering them.
	     *
	     * For example, the {@link Folding} component might use this event to construct a coherent parent child relationship between query results.
	     *
	     * All bound handlers will receive {@link IPreprocessResultsEventArgs} as an argument.
	     *
	     * The string value is `preprocessResults`.
	     * @type {string}
	     */
	    static preprocessResults: string;
	    /**
	     * Triggered before the {@link QueryEvents.fetchMoreSuccess} event.
	     *
	     * This allows external code to modify the results before rendering them.
	     *
	     * For example, the {@link Folding} component might use this event to construct a coherent parent child relationship between query results.
	     *
	     * All bound handlers will receive {@link IPreprocessResultsEventArgs} as an argument.
	     *
	     * The string value is `preprocessMoreResults`.
	     * @type {string}
	     */
	    static preprocessMoreResults: string;
	    /**
	     * Triggered when there is no result for a particular query.
	     *
	     * All bound handlers will receive {@link INoResultsEventArgs} as an argument.
	     *
	     * The string value is `noResults`.
	     * @type {string}
	     */
	    static noResults: string;
	    static buildingCallOptions: string;
	}

}
declare module Coveo {
	class Defer {
	    static defer(code: () => void): void;
	    static flush(): void;
	}

}
declare module Coveo {
	/// <reference types="coveoanalytics" />
	/**
	 * Possible options when performing a query with the query controller
	 */
	interface IQueryOptions {
	    /**
	     * If the analytics component is enabled in the interface, it will look for any query executed by the query controller for which no analytics event was associated.<br/>
	     * By setting this property to true, this will cancel this check when the query is performed
	     */
	    ignoreWarningSearchEvent?: boolean;
	    /**
	     * Specify that the query to execute is a search as you type. This information will be passed down in the query events for component and external code to determine their behavior
	     */
	    searchAsYouType?: boolean;
	    /**
	     * Specify a function that you wish to execute just before the query is executed
	     */
	    beforeExecuteQuery?: () => void;
	    /**
	     * Cancel the query
	     */
	    cancel?: boolean;
	    /**
	     * The component from which the query originated. For example the pager will set the property to tweak it's behaviour
	     */
	    origin?: any;
	    /**
	     * Whether or not to log the query in the user actions history when using the page view script: https://github.com/coveo/coveo.analytics.js.
	     * Only the 'q' part of the query will be logged.
	     * This option is useful, because it prevents the query to be logged twice when a {@link Recommendation} component is present.
	     * It also makes sure that only relevant queries are logged. For exemple, the 'empty' interface load query isn't logged.
	     */
	    logInActionsHistory?: boolean;
	    isFirstQuery?: boolean;
	    keepLastSearchUid?: boolean;
	    closeModalBox?: boolean;
	}
	/**
	 * This class is automatically instantiated and bound to the root of your search interface when you initialize the framework.<br/>
	 * It is essentially a singleton that wraps the access to the {@link SearchEndpoint} endpoint to execute query, and is in charge of triggering the different query events.<br/>
	 * This is what every component of the framework uses internally to execute query or access the endpoint.<br/>
	 * When calling <code>Coveo.executeQuery</code> this class is used.
	 */
	class QueryController extends RootComponent {
	    options: ISearchInterfaceOptions;
	    usageAnalytics: any;
	    searchInterface: any;
	    static ID: string;
	    historyStore: CoveoAnalytics.HistoryStore;
	    /**
	     * Create a new query controller
	     * @param element
	     * @param options
	     */
	    constructor(element: HTMLElement, options: ISearchInterfaceOptions, usageAnalytics: any, searchInterface: any);
	    /**
	     * Set the {@link SearchEndpoint} that the query controller should use to execute query
	     * @param endpoint
	     */
	    setEndpoint(endpoint: SearchEndpoint): void;
	    /**
	     * Get the {@link SearchEndpoint} that is currently used by the query controller to execute query
	     * @returns {SearchEndpoint}
	     */
	    getEndpoint(): ISearchEndpoint;
	    /**
	     * Return the last query that was performed by the query controller
	     * @returns {IQuery|Query}
	     */
	    getLastQuery(): IQuery;
	    /**
	     * Return the last query results set.
	     * @returns {IQueryResults}
	     */
	    getLastResults(): IQueryResults;
	    /**
	     * Execute a query and return a Promise of IQueryResults.<br/>
	     * This will execute the normal query flow, triggering all the necessary query events (newQuery <br/>
	     * All components present in the interface will act accordingly (modify the query and render results if needed).
	     * @param options
	     * @returns {Promise<IQueryResults>}
	     */
	    executeQuery(options?: IQueryOptions): Promise<IQueryResults>;
	    /**
	     * Using the same parameters as the last successful query, fetch another batch of results. Particularly useful for infinite scrolling, for example.
	     * @param count
	     * @returns {any}
	     */
	    fetchMore(count: number): Promise<IQueryResults>;
	    /**
	     * Cancel any pending query
	     */
	    cancelQuery(): void;
	    deferExecuteQuery(options?: IQueryOptions): void;
	    ensureCreatedQueryBuilder(): void;
	    createQueryBuilder(options: IQueryOptions): QueryBuilder;
	    isStandaloneSearchbox(): boolean;
	    saveLastQuery(): void;
	    getLastQueryHash(): string;
	    debugInfo(): any;
	}

}
declare module Coveo {
	/**
	 * The IAnalyticsActionCause interface describes the cause of an event for the analytics service.
	 *
	 * See the {@link Analytics} component
	 */
	interface IAnalyticsActionCause {
	    /**
	     * Specifies the name of the event. While you can actually set this property to any arbitrary string value, its value
	     * should uniquely identify the precise action that triggers the event. Thus, each individual event should have its
	     * own unique `name` value.
	     *
	     * Example: `searchBoxSubmit`, `resultSort`, etc.
	     */
	    name: string;
	    /**
	     * Specifies the type of the event. While you can actually set this property to any arbitrary string value, it should
	     * describe the general category of the event. Thus, more than one event can have the same `type` value, which makes
	     * it possible to group events with identical types when doing reporting.
	     *
	     * Example: All search box related events could have `searchbox` as their `type` value.
	     */
	    type: string;
	    metaMap?: {
	        [name: string]: number;
	    };
	}
	interface IAnalyticsNoMeta {
	}
	interface IAnalyticsInterfaceChange {
	    interfaceChangeTo: string;
	}
	interface IAnalyticsContextAddMeta {
	    contextName: string;
	}
	interface IAnalyticsContextRemoveMeta {
	    contextName: string;
	}
	interface IAnalyticsResultsSortMeta {
	    resultsSortBy: string;
	}
	/**
	 * The `IAnalyticsDocumentViewMeta` interface describes the expected metadata when logging a click event / item view.
	 *
	 * See also the [`Analytics`]{@link Analytics} component, and more specifically its
	 * [`logClickEvent`]{@link Analytics.logClickEvent} method.
	 */
	interface IAnalyticsDocumentViewMeta {
	    /**
	     * The URL of the clicked item.
	     */
	    documentURL?: string;
	    /**
	     * The title of the clicked item.
	     */
	    documentTitle?: string;
	    /**
	     * The author of the clicked item.
	     */
	    author: string;
	}
	interface IAnalyticsOmniboxFacetMeta {
	    facetId: string;
	    facetTitle: string;
	    facetValue?: string;
	    suggestions: string;
	    suggestionRanking: number;
	    query: string;
	}
	interface IAnalyticsFacetMeta {
	    facetId: string;
	    facetValue?: string;
	    facetTitle: string;
	}
	interface IAnalyticsQueryErrorMeta {
	    query: string;
	    aq: string;
	    cq: string;
	    dq: string;
	    errorType: string;
	    errorMessage: string;
	}
	interface IAnalyticsTopSuggestionMeta {
	    suggestionRanking: number;
	    partialQueries: string;
	    suggestions: string;
	    partialQuery: string;
	}
	interface IAnalyticsOmniboxSuggestionMeta {
	    suggestionRanking: number;
	    partialQueries: string;
	    suggestions: string;
	    partialQuery: string;
	}
	interface IAnalyticsFacetSliderChangeMeta {
	    facetId: string;
	    facetRangeStart: any;
	    facetRangeEnd: any;
	}
	interface IAnalyticsFacetGraphSelectedMeta extends IAnalyticsFacetSliderChangeMeta {
	}
	interface IAnalyticsFacetOperatorMeta extends IAnalyticsFacetMeta {
	    facetOperatorBefore: string;
	    facetOperatorAfter: string;
	}
	interface IAnalyticsPreferencesChangeMeta {
	    preferenceName: string;
	    preferenceType: string;
	}
	interface IAnalyticsCustomFiltersChangeMeta {
	    customFilterName: string;
	    customFilterType: string;
	    customFilterExpression: string;
	}
	interface IAnalyticsCaseAttachMeta {
	    resultUriHash: string;
	    articleID: string;
	    caseID: string;
	    author: string;
	}
	interface IAnalyticsCaseContextAddMeta {
	    caseID: string;
	}
	interface IAnalyticsCaseContextRemoveMeta {
	    caseID: string;
	}
	interface IAnalyticsCaseDetachMeta extends IAnalyticsCaseAttachMeta {
	}
	interface IAnalyticsCaseCreationInputChangeMeta {
	    inputTitle: string;
	    input: string;
	    value: string;
	}
	interface IAnalyticsCaseCreationDeflectionMeta {
	    hasClicks: boolean;
	    values: {
	        [field: string]: string;
	    };
	}
	interface IAnalyticsPagerMeta {
	    pagerNumber: number;
	}
	interface IAnalyticsResultsPerPageMeta {
	    currentResultsPerPage: number;
	}
	interface IAnalyticsTriggerNotify {
	    notification: string;
	}
	interface IAnalyticsTriggerRedirect {
	    redirectedTo: string;
	}
	interface IAnalyticsTriggerQuery {
	    query: string;
	}
	interface IAnalyticsTriggerExecute {
	    executed: string;
	}
	interface IAnalyticsSearchAlertsMeta {
	    subscription: string;
	}
	interface IAnalyticsSearchAlertsUpdateMeta extends IAnalyticsSearchAlertsMeta {
	    frequency: string;
	}
	interface IAnalyticsSearchAlertsFollowDocumentMeta extends IAnalyticsDocumentViewMeta {
	    documentSource: string;
	    documentLanguage: string;
	    contentIDKey: string;
	    contentIDValue: string;
	}
	interface IAnalyticsResultsLayoutChange {
	    resultsLayoutChangeTo: string;
	}
	var analyticsActionCauseList: {
	    interfaceLoad: IAnalyticsActionCause;
	    interfaceChange: IAnalyticsActionCause;
	    contextRemove: IAnalyticsActionCause;
	    didyoumeanAutomatic: IAnalyticsActionCause;
	    didyoumeanClick: IAnalyticsActionCause;
	    resultsSort: IAnalyticsActionCause;
	    searchboxSubmit: IAnalyticsActionCause;
	    searchboxClear: IAnalyticsActionCause;
	    searchboxAsYouType: IAnalyticsActionCause;
	    breadcrumbFacet: IAnalyticsActionCause;
	    breadcrumbAdvancedSearch: IAnalyticsActionCause;
	    breadcrumbResetAll: IAnalyticsActionCause;
	    documentTag: IAnalyticsActionCause;
	    documentField: IAnalyticsActionCause;
	    documentQuickview: IAnalyticsActionCause;
	    documentOpen: IAnalyticsActionCause;
	    omniboxFacetSelect: IAnalyticsActionCause;
	    omniboxFacetExclude: IAnalyticsActionCause;
	    omniboxFacetDeselect: IAnalyticsActionCause;
	    omniboxFacetUnexclude: IAnalyticsActionCause;
	    omniboxAnalytics: IAnalyticsActionCause;
	    omniboxFromLink: IAnalyticsActionCause;
	    omniboxField: IAnalyticsActionCause;
	    facetClearAll: IAnalyticsActionCause;
	    facetSearch: IAnalyticsActionCause;
	    facetToggle: IAnalyticsActionCause;
	    facetRangeSlider: IAnalyticsActionCause;
	    facetRangeGraph: IAnalyticsActionCause;
	    facetSelect: IAnalyticsActionCause;
	    facetSelectAll: IAnalyticsActionCause;
	    facetDeselect: IAnalyticsActionCause;
	    facetExclude: IAnalyticsActionCause;
	    facetUnexclude: IAnalyticsActionCause;
	    errorBack: IAnalyticsActionCause;
	    errorClearQuery: IAnalyticsActionCause;
	    errorRetry: IAnalyticsActionCause;
	    noResultsBack: IAnalyticsActionCause;
	    expandToFullUI: IAnalyticsActionCause;
	    caseCreationInputChange: IAnalyticsActionCause;
	    caseCreationSubmitButton: IAnalyticsActionCause;
	    caseCreationCancelButton: IAnalyticsActionCause;
	    caseCreationUnloadPage: IAnalyticsActionCause;
	    casecontextAdd: IAnalyticsActionCause;
	    casecontextRemove: IAnalyticsActionCause;
	    preferencesChange: IAnalyticsActionCause;
	    getUserHistory: IAnalyticsActionCause;
	    userActionDocumentClick: IAnalyticsActionCause;
	    caseAttach: IAnalyticsActionCause;
	    caseDetach: IAnalyticsActionCause;
	    customfiltersChange: IAnalyticsActionCause;
	    pagerNumber: IAnalyticsActionCause;
	    pagerNext: IAnalyticsActionCause;
	    pagerPrevious: IAnalyticsActionCause;
	    pagerScrolling: IAnalyticsActionCause;
	    pagerResize: IAnalyticsActionCause;
	    searchFromLink: IAnalyticsActionCause;
	    triggerNotify: IAnalyticsActionCause;
	    triggerExecute: IAnalyticsActionCause;
	    triggerQuery: IAnalyticsActionCause;
	    triggerRedirect: IAnalyticsActionCause;
	    queryError: IAnalyticsActionCause;
	    exportToExcel: IAnalyticsActionCause;
	    recommendation: IAnalyticsActionCause;
	    recommendationInterfaceLoad: IAnalyticsActionCause;
	    recommendationOpen: IAnalyticsActionCause;
	    advancedSearch: IAnalyticsActionCause;
	    searchAlertsFollowDocument: IAnalyticsActionCause;
	    searchAlertsFollowQuery: IAnalyticsActionCause;
	    searchAlertsUpdateSubscription: IAnalyticsActionCause;
	    searchAlertsDeleteSubscription: IAnalyticsActionCause;
	    searchAlertsUnfollowDocument: IAnalyticsActionCause;
	    searchAlertsUnfollowQuery: IAnalyticsActionCause;
	    resultsLayoutChange: IAnalyticsActionCause;
	};

}
declare module Coveo {
	interface IAPIAnalyticsEventResponse {
	    visitId: string;
	    visitorId: string;
	}

}
declare module Coveo {
	/**
	 * Describe a request to get top queries
	 */
	interface ITopQueries extends IStringMap<any> {
	    /**
	     * Determine how many suggestions to receive
	     */
	    pageSize: number;
	    /**
	     * The query text for which to receive suggestions
	     */
	    queryText: string;
	}

}
declare module Coveo {
	interface IAnalyticsEvent {
	    actionCause: string;
	    actionType: string;
	    username?: string;
	    userDisplayName?: string;
	    anonymous?: boolean;
	    device: string;
	    mobile: boolean;
	    originLevel1: string;
	    originLevel2: string;
	    originLevel3?: string;
	    originContext: string;
	    language: string;
	    responseTime: number;
	    userAgent?: string;
	    userGroups?: string;
	    customData?: {
	        [key: string]: any;
	    };
	}

}
declare module Coveo {
	interface ISearchEvent extends IAnalyticsEvent {
	    searchQueryUid: string;
	    queryPipeline: string;
	    splitTestRunName: string;
	    splitTestRunVersion: string;
	    mobile: boolean;
	    queryText: string;
	    numberOfResults: number;
	    responseTime: number;
	    resultsPerPage: number;
	    pageNumber: number;
	    advancedQuery: string;
	    didYouMean: boolean;
	    contextual: boolean;
	}

}
declare module Coveo {
	interface IAPIAnalyticsVisitResponseRest {
	    id: string;
	}

}
declare module Coveo {
	interface IAPIAnalyticsSearchEventsResponse {
	    searchEventResponses: IAPIAnalyticsEventResponse[];
	}

}
declare module Coveo {
	interface IClickEvent extends IAnalyticsEvent {
	    searchQueryUid: string;
	    queryPipeline: string;
	    splitTestRunName: string;
	    splitTestRunVersion: string;
	    documentUri: string;
	    documentUriHash: string;
	    documentUrl: string;
	    documentTitle: string;
	    documentCategory: string;
	    collectionName: string;
	    sourceName: string;
	    documentPosition: number;
	    viewMethod: string;
	    rankingModifier: string;
	}

}
declare module Coveo {
	interface ICustomEvent extends IAnalyticsEvent {
	    eventType: string;
	    eventValue: string;
	}

}
declare module Coveo {
	class Cookie {
	    static set(name: string, value: string, expiration?: number): void;
	    static get(name: string): string;
	    static erase(name: string): void;
	}

}
declare module Coveo {
	interface IAnalyticsEndpointOptions {
	    token: string;
	    serviceUrl: string;
	    organization: string;
	}
	class AnalyticsEndpoint {
	    options: IAnalyticsEndpointOptions;
	    logger: Logger;
	    static DEFAULT_ANALYTICS_URI: string;
	    static DEFAULT_ANALYTICS_VERSION: string;
	    static CUSTOM_ANALYTICS_VERSION: any;
	    static VISITOR_COOKIE_TIME: number;
	    static pendingRequest: Promise<any>;
	    endpointCaller: EndpointCaller;
	    constructor(options: IAnalyticsEndpointOptions);
	    getCurrentVisitId(): string;
	    getCurrentVisitIdPromise(): Promise<string>;
	    sendSearchEvents(searchEvents: ISearchEvent[]): Promise<IAPIAnalyticsSearchEventsResponse>;
	    sendDocumentViewEvent(documentViewEvent: IClickEvent): Promise<IAPIAnalyticsEventResponse>;
	    sendCustomEvent(customEvent: ICustomEvent): Promise<{}>;
	    getTopQueries(params: ITopQueries): Promise<string[]>;
	}

}
declare module Coveo {
	interface IAPISearchEvent {
	    language: string;
	    device: string;
	    searchInterface: string;
	    searchHub: string;
	    responseTime: number;
	    customMetadatas: {
	        [name: string]: string;
	    };
	    queryText: string;
	    advancedQuery: string;
	    didYouMean: boolean;
	    numberOfResults: number;
	    resultsPerPage: number;
	    pageNumber: number;
	    type: string;
	    actionCause: string;
	    queryPipeline: string;
	    splitTestRunName: string;
	    splitTestRunVersion: string;
	    searchQueryUid: string;
	}

}
declare module Coveo {
	interface IAPIDocumentViewEvent {
	    language: string;
	    device: string;
	    searchInterface: string;
	    searchHub: string;
	    responseTime: number;
	    searchQueryUid: string;
	    title: string;
	    documentUrl: string;
	    documentUri: string;
	    documentUriHash: string;
	    viewMethod: string;
	    actionCause: string;
	    queryPipeline: string;
	    splitTestRunName: string;
	    splitTestRunVersion: string;
	    collectionName: string;
	    sourceName: string;
	    documentPosition: number;
	    customMetadatas: {
	        [name: string]: string;
	    };
	}

}
declare module Coveo {
	interface IAPICustomEvent {
	    language: string;
	    device: string;
	    searchInterface: string;
	    searchHub: string;
	    responseTime: number;
	    actionType: string;
	    actionCause: string;
	    customMetadatas: {
	        [name: string]: string;
	    };
	}

}
declare module Coveo {
	class APIAnalyticsBuilder {
	    static convertSearchEventToAPI(searchEvent: ISearchEvent): IAPISearchEvent;
	    static convertDocumentViewToAPI(documentView: IClickEvent): IAPIDocumentViewEvent;
	    static convertCustomEventToAPI(customEvent: ICustomEvent): IAPICustomEvent;
	}

}
declare module Coveo {
	interface IAnalyticsSearchEventsArgs {
	    searchEvents: IAPISearchEvent[];
	}
	interface IAnalyticsDocumentViewEventArgs {
	    documentViewEvent: IAPIDocumentViewEvent;
	}
	interface IAnalyticsCustomEventArgs {
	    customEvent: IAPICustomEvent;
	}
	/**
	 * Argument sent to all handlers bound on {@link AnalyticsEvents.changeAnalyticsCustomData}.
	 *
	 * It extends the {@link IChangeableAnalyticsDataObject} interface.
	 *
	 * Take note that only the attributes described by {@link IChangeableAnalyticsDataObject} can be modified by external code.
	 */
	interface IChangeAnalyticsCustomDataEventArgs extends IChangeableAnalyticsDataObject {
	    /**
	     * The type of the event that was just triggered.
	     *
	     * This can help external code to discriminate the event that it wishes to modify.
	     */
	    type: 'SearchEvent' | 'CustomEvent' | 'ClickEvent';
	    /**
	     * The type of the event.
	     *
	     * The type is normally a generic string that regroups all events triggered by the same feature or component.
	     *
	     * For example, all analytics events related to the Searchbox will all use the same actionType.
	     *
	     * Analytics events related to Facets, on the other hand, would use a different actionType.
	     */
	    actionType: string;
	    /**
	     * The cause of the event.
	     *
	     * All analytics events triggered by a different component will use a different action cause.
	     *
	     * For example, triggering a query by using the search box will send a `searchBoxSubmit` actionCause.
	     *
	     * Triggering a query with a facet selection, on the other hand, will send a `facetSelect`.
	     */
	    actionCause: string;
	}
	/**
	 * The interface that describe the metadata for every analytics event.
	 */
	interface IChangeableAnalyticsMetaObject {
	    /**
	     * The metadata for every analytics event is a simple key value pair, where the value has to be a simple string.
	     *
	     * The value cannot be a complex object.
	     */
	    [name: string]: string;
	}
	/**
	 * The interface that describe part of the analytics event that can be modified.
	 */
	interface IChangeableAnalyticsDataObject {
	    /**
	     * The metadata for the current event.
	     *
	     * External code can modify an existing value, or add a new key - value pair.
	     */
	    metaObject: IChangeableAnalyticsMetaObject;
	    /**
	     * The originLevel1 property can be used to describe the high level origin of the event.
	     *
	     * For example, this can be the location of the search page, or any name that allows you to uniquely identify a search interface.
	     *
	     * If not provided, this value will be `default`.
	     */
	    originLevel1: string;
	    /**
	     * The originLevel2 property can be used to describe the mid level origin of the event.
	     *
	     * By default, the framework will populate this with the currently selected tab.
	     */
	    originLevel2: string;
	    /**
	     * The originLevel3 property can be used to describe the low level origin of the event.
	     *
	     * By default, this property will be left empty.
	     */
	    originLevel3: string;
	    /**
	     * The language of the search interface.
	     *
	     * By default, this will be populated by the currently loaded localization and culture file for the search interface.
	     */
	    language: string;
	}
	/**
	 * This static class is there to contains the different string definition for all the events related to analytics.
	 */
	class AnalyticsEvents {
	    static searchEvent: string;
	    static documentViewEvent: string;
	    static customEvent: string;
	    /**
	     * Triggered whevoid an analytics event is logged. This event allows external code to modify the analytics data.
	     *
	     * All bound handlers will receive {@link IChangeAnalyticsCustomDataEventArgs} as an argument.
	     *
	     * The string value is `changeAnalyticsCustomData`.
	     */
	    static changeAnalyticsCustomData: string;
	}

}
declare module Coveo {
	class PendingSearchEvent {
	    root: HTMLElement;
	    endpoint: AnalyticsEndpoint;
	    templateSearchEvent: ISearchEvent;
	    sendToCloud: boolean;
	    protected cancelled: boolean;
	    protected finished: boolean;
	    protected searchEvents: ISearchEvent[];
	    constructor(root: HTMLElement, endpoint: AnalyticsEndpoint, templateSearchEvent: ISearchEvent, sendToCloud: boolean);
	    getEventCause(): string;
	    getEventMeta(): {
	        [key: string]: any;
	    };
	    cancel(): void;
	    protected handleDuringQuery(evt: Event, args: IDuringQueryEventArgs, queryBoxContentToUse?: string): void;
	    stopRecording(): void;
	}

}
declare module Coveo {
	/**
	 * The `IAnalyticsClient` interface describes an analytics client that can log events to, or return information from the
	 * usage analytics service.
	 *
	 * See also the [`Analytics`]{@link Analytics} component.
	 */
	interface IAnalyticsClient {
	    isContextual: boolean;
	    /**
	     * Indicates whether there is an [`Analytics`]{@link Analytics} component in the search page. Returns `true` if an
	     * `Analytics` component is present, and `false` otherwise.
	     */
	    isActivated(): boolean;
	    getCurrentEventCause(): string;
	    getCurrentEventMeta(): {
	        [key: string]: any;
	    };
	    /**
	     * Logs a Search event on the service, using an [`AnalyticsActionCause`]({@link IAnalyticsActionCause}) and a meta
	     * object.
	     *
	     * Note that the Search event is only sent to the service when the query successfully returns, not immediately after
	     * calling this method. Therefore, it is 
	     * service will log no search event and you will get a warning message in the console.
	     *
	     * See [Sending Custom Analytics Events](https://developers.coveo.com/x/KoGfAQ).
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts white spaces to underscores and uppercase characters to lowercase characters in key
	     * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
	     * ( `{}` ).
	     */
	    logSearchEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    /**
	     * Logs a SearchAsYouType event on the service, using an [`AnalyticsActionCause`]{@link IAnalyticsActionCause} and a
	     * meta object.
	     *
	     * This method is very similar to the [`logSearchEvent`]{@link logSearchEvent} method, except that
	     * `logSearchAsYouType` is, by definition, more frequently called.
	     *
	     * The `PendingSearchAsYouTypeEvent` takes care of logging only the "relevant" last event (i.e., an event that occurs
	     * after 5 seconds elapse without any event being logged, or an event that occurs after another part of the interface
	     * triggers a search event). This avoids logging every single partial query, which would make reporting very
	     * confusing.
	     *
	     * It is 
	     * SearchAsYouType event and you will get a warning message in the console.
	     *
	     * See [Sending Custom Analytics Events](https://developers.coveo.com/x/KoGfAQ).
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts white spaces to underscores and uppercase characters to lowercase characters in key
	     * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
	     * ( `{}` ).
	     */
	    logSearchAsYouType<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    /**
	     * Logs a Click event. You can understand click events as item views (e.g., clicking on a
	     * [`ResultLink`]{@link ResultLink} or opening a [`Quickview`]{@link Quickview}).
	     *
	     * This event is logged immediately on the service.
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts uppercase characters to lowercase characters in key names. Each value must be a simple
	     * string. You do not have to pass an [`AnalyticsDocumentViewMeta`]{@link IAnalyticsDocumentViewMeta} as meta when
	     * logging a custom Click event. You can actually send any arbitrary meta. If you do not need to log metadata, you can
	     * simply pass an empty JSON ( `{}` ).
	     * @param result The result that the user has clicked.
	     * @param element The HTMLElement that the user has clicked in the interface.
	     */
	    logClickEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta, result: IQueryResult, element: HTMLElement): Promise<IAPIAnalyticsEventResponse | IAPIAnalyticsEventResponse[]>;
	    /**
	     * Logs a custom event on the service. You can use custom events to create custom reports, or to track events
	     * that are not queries or item views.
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts white spaces to underscores and uppercase characters to lowercase characters in key
	     * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
	     * ( `{}` ).
	     * @param element The HTMLElement that the user has interacted with for this custom event.
	     */
	    logCustomEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta, element: HTMLElement): Promise<IAPIAnalyticsEventResponse | IAPIAnalyticsEventResponse[]>;
	    /**
	     * Gets suggested queries from the Coveo Usage Analytics service.
	     * @param params
	     */
	    getTopQueries(params: ITopQueries): Promise<string[]>;
	    getCurrentVisitId(): string;
	    /**
	     * Gets the current visitor ID for tracking purpose in the Coveo Usage Analytics service.
	     */
	    getCurrentVisitIdPromise(): Promise<string>;
	    cancelAllPendingEvents(): void;
	    getPendingSearchEvent(): PendingSearchEvent;
	    sendAllPendingEvents(): void;
	    warnAboutSearchEvent(): void;
	    /**
	     * Sets the Origin Context dimension on the analytic events.
	     *
	     * You can use this dimension to specify the context of your application.
	     *
	     * Suggested values are `Search`, `InternalSearch`, or `CommunitySearch`.
	     *
	     * Default value is `Search`.
	     *
	     * @param originContext The origin context value.
	     */
	    setOriginContext(originContext: string): any;
	}

}
declare module Coveo {
	class NoopAnalyticsClient implements IAnalyticsClient {
	    isContextual: boolean;
	    isActivated(): boolean;
	    getCurrentEventCause(): string;
	    getCurrentEventMeta(): IStringMap<any>;
	    logSearchEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    logSearchAsYouType<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    logClickEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta, result?: IQueryResult, element?: HTMLElement): Promise<IAPIAnalyticsEventResponse>;
	    logCustomEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta, element?: HTMLElement): Promise<IAPIAnalyticsEventResponse>;
	    getTopQueries(params: ITopQueries): Promise<string[]>;
	    getCurrentVisitIdPromise(): Promise<string>;
	    getCurrentVisitId(): string;
	    sendAllPendingEvents(): void;
	    cancelAllPendingEvents(): void;
	    warnAboutSearchEvent(): void;
	    getPendingSearchEvent(): any;
	    setOriginContext(originContext: string): void;
	}

}
declare module Coveo {
	/**
	 * The bindings, or environment in which each component exists.
	 */
	interface IComponentBindings {
	    /**
	     * The root HTMLElement of the {@link SearchInterface} in which the component exists.
	     */
	    root?: HTMLElement;
	    /**
	     * Contains the state of the query. Allows to get/set values. Triggers state event when modified. Each component can listen to those events.
	     */
	    queryStateModel?: QueryStateModel;
	    /**
	     * Contains the state of different components (enabled vs disabled). Allows to get/set values. Triggers component state event when modified. Each component can listen to those events.
	     */
	    componentStateModel?: ComponentStateModel;
	    /**
	     * Contains the singleton that allows to trigger queries.
	     */
	    queryController?: QueryController;
	    /**
	     * A reference to the root of every component, the {@link SearchInterface}.
	     */
	    searchInterface?: SearchInterface;
	    /**
	     * A reference to the {@link Analytics.client}.
	     */
	    usageAnalytics?: IAnalyticsClient;
	    /**
	     * Contains the state of options for different components. Mainly used by {@link ResultLink}.
	     */
	    componentOptionsModel?: ComponentOptionsModel;
	}

}
declare module Coveo {
	class DebugEvents {
	    static showDebugPanel: string;
	}

}
declare module Coveo {
	/**
	 * Definition for a Component.
	 */
	interface IComponentDefinition {
	    /**
	     * The static ID that each component need to be identified.<br/>
	     * For example, SearchButton -> static ID : SearchButton -> className : CoveoSearchButton
	     */
	    ID: string;
	    /**
	     * The generated `className` for this component.<br/>
	     * For example, SearchButton -> static ID : SearchButton -> className : CoveoSearchButton
	     */
	    className?: string;
	    /**
	     * Function that can be called to one or multiple module in the global scope.
	     */
	    doExport?: () => void;
	    /**
	     * Constructor for each component
	     * @param element The HTMLElement on which the component will instantiate.
	     * @param options The available options for the component.
	     * @param bindings The bindings (or environment) for the component.For exemple, the {@link QueryController} or {@link SearchInterface}. Optional, if not provided, the component will resolve those automatically. This has a cost on performance, though, since it has to traverses it's parents to find the correct elements.
	     * @param args Optional arguments, depending on the component type. For example, ResultComponent will receive the result there.
	     */
	    new (element: HTMLElement, options: any, bindings: IComponentBindings, ...args: any[]): Component;
	    /**
	     * The available options for the component.
	     */
	    options?: any;
	    /**
	     * The optional parent of the component, which will be a component itself.
	     */
	    parent?: IComponentDefinition;
	    /**
	     * The optional index fields that the component possess or display.
	     */
	    fields?: string[];
	}
	/**
	 * The base class for every component in the framework.
	 */
	class Component extends BaseComponent {
	    element: HTMLElement;
	    type: string;
	    /**
	     * Allows the component to bind events and execute them only when it is enabled.
	     * @type {Coveo.ComponentEvents}
	     */
	    bind: ComponentEvents;
	    /**
	     * A reference to the root HTMLElement (the {@link SearchInterface}).
	     */
	    root: HTMLElement;
	    /**
	     * Contains the state of the query. Allows to get/set values. Trigger query state event when modified. Each component can listen to those events.
	     */
	    queryStateModel: QueryStateModel;
	    /**
	     * Contains the state of different component (enabled vs disabled). Allows to get/set values. Trigger component state event when modified. Each component can listen to those events.
	     */
	    componentStateModel: ComponentStateModel;
	    /**
	     * Contains the singleton that allows to trigger queries.
	     */
	    queryController: QueryController;
	    /**
	     * A reference to the root of every component, the {@link SearchInterface}.
	     */
	    searchInterface: SearchInterface;
	    /**
	     * A reference to the {@link Analytics.client}.
	     */
	    usageAnalytics: IAnalyticsClient;
	    /**
	     * Contains the state of options for differents component. Mainly used by {@link ResultLink}.
	     */
	    componentOptionsModel: ComponentOptionsModel;
	    ensureDom: Function;
		options: any;
	    /**
	     * Create a new Component. Resolve all {@link IComponentBindings} if not provided.<br/>
	     * Create a new Logger for this component.
	     * Attach the component to the {@link SearchInterface}.<br/>
	     * @param element The HTMLElement on which to create the component. Used to bind data on the element.
	     * @param type The unique identifier for this component. See : {@link IComponentDefinition.ID}. Used to generate the unique Coveo CSS class associated with every component.
	     * @param bindings The environment for every component. Optional, but omitting to provide one will impact performance.
	     */
	    constructor(element: HTMLElement, type: string, bindings?: IComponentBindings);
	    /**
	     * Return the bindings, or environment, for the current component.
	     * @returns {IComponentBindings}
	     */
	    getBindings(): IComponentBindings;
	    createDom(): void;
	    resolveSearchInterface(): SearchInterface;
	    resolveRoot(): HTMLElement;
	    resolveQueryController(): QueryController;
	    resolveComponentStateModel(): ComponentStateModel;
	    resolveQueryStateModel(): QueryStateModel;
	    resolveComponentOptionsModel(): ComponentOptionsModel;
	    resolveUA(): IAnalyticsClient;
	    resolveResult(): IQueryResult;
	    /**
	     * Get the bound component to the given HTMLElement. Throws an assert if the HTMLElement has no component bound, unless using the noThrow argument.<br/>
	     * If there is multiple component bound to the current HTMLElement, you must specify the component class.
	     * @param element HTMLElement for which to get the bound component.
	     * @param componentClass Optional component class. If the HTMLElement has multiple components bound, you must specify which one you are targeting.
	     * @param noThrow Boolean option to tell the method to not throw on error.
	     * @returns {Component}
	     */
	    static get(element: HTMLElement, componentClass?: any, noThrow?: boolean): BaseComponent;
	    static getResult(element: HTMLElement, noThrow?: boolean): IQueryResult;
	    static bindResultToElement(element: HTMLElement, result: IQueryResult): void;
	    static resolveBinding(element: HTMLElement, componentClass: any): BaseComponent;
	    static pointElementsToDummyForm(element: HTMLElement): void;
	}
	/**
	 * The `ComponentEvents` class is used by the various Coveo Component to trigger events and bind event handlers. It adds
	 * logic to execute handlers or triggers only when a component is "enabled", which serves as a way to avoid executing
	 * handlers on components that are invisible and inactive in the query.
	 *
	 * Typically, a component is disabled when it is not active in the current [`Tab`]{@link Tab}. It can also be disabled
	 * by external code, however.
	 *
	 * To manually enable or disable a component, simply use its [`enable`]{@link Component.enable} or
	 * [`disable`]{@link Component.disable} method.
	 */
	class ComponentEvents {
	    owner: Component;
	    /**
	     * Creates a new `ComponentEvents` instance for a [`Component`]{@link Component}.
	     * @param owner The [`Component`]{@link Component} that owns the event handlers and triggers.
	     */
	    constructor(owner: Component);
	    /**
	     * Executes the handler for an event on a target element.
	     *
	     * Executes only if the component is enabled (see the [`enable`]{@link Component.enable} method).
	     * @param el The element from which the event originates.
	     * @param event The event for which to register a handler.
	     * @param handler The function to execute when the event is triggered.
	     */
	    on(el: HTMLElement | Window | Document, event: string, handler: Function): any;
	    on(el: Dom, event: string, handler: Function): any;
	    /**
	     * Executes the handler for the given event on the given target element.<br/>
	     * Execute only if the component is "enabled" (see {@link Component.enable}).<br/>
	     * Execute the handler only ONE time.
	     * @param el The target on which the event will originate.
	     * @param event The event for which to register an handler.
	     * @param handler The function to execute when the event is triggered.
	     */
	    one(el: HTMLElement, event: string, handler: Function): any;
	    one(el: Dom, event: string, handler: Function): any;
	    /**
	     * Bind on the "root" of the Component. The root is typically the {@link SearchInterface}.<br/>
	     * Bind an event using native javascript code.
	     * @param event The event for which to register an handler.
	     * @param handler The function to execute when the event is triggered.
	     */
	    onRootElement<T>(event: string, handler: (args: T) => any): void;
	    /**
	     * Bind on the "root" of the Component. The root is typically the {@link SearchInterface}.<br/>
	     * Bind an event using native javascript code.
	     * The handler will execute only ONE time.
	     * @param event The event for which to register an handler.
	     * @param handler The function to execute when the event is triggered.
	     */
	    oneRootElement<T>(event: string, handler: (args: T) => any): void;
	    /**
	     * Bind an event related specially to the query state model.<br/>
	     * This will build the correct string event and execute the handler only if the component is activated.
	     * @param eventType The event type for which to register an event.
	     * @param attribute The attribute for which to register an event.
	     * @param handler The handler to execute when the query state event is triggered.
	     */
	    onQueryState<T>(eventType: string, attribute?: string, handler?: (args: T) => any): void;
	    /**
	     * Bind an event related specially to the component option model.
	     * This will build the correct string event and execute the handler only if the component is activated.
	     * @param eventType The event type for which to register an event.
	     * @param attribute The attribute for which to register an event.
	     * @param handler The handler to execute when the query state event is triggered.
	     */
	    onComponentOptions<T>(eventType: string, attribute?: string, handler?: (args: T) => any): void;
	    /**
	     * Bind an event related specially to the query state model.<br/>
	     * This will build the correct string event and execute the handler only if the component is activated.<br/>
	     * Will execute only once.
	     * @param eventType The event type for which to register an event.
	     * @param attribute The attribute for which to register an event.
	     * @param handler The handler to execute when the query state event is triggered.
	     */
	    oneQueryState<T>(eventType: string, attribute?: string, handler?: (args: T) => any): void;
	    /**
	     * Trigger an event on the target element, with optional arguments.
	     * @param el The target HTMLElement on which to trigger the event.
	     * @param event The event to trigger.
	     * @param args The optional argument to pass to the handlers.
	     */
	    trigger(el: HTMLElement, event: string, args?: Object): any;
	    trigger(el: Dom, event: string, args?: Object): any;
	    /**
	     * Execute the function only if the component is enabled.
	     * @param func The function to execute if the component is enabled.
	     * @returns {function(...[any]): *}
	     */
	}

}
declare module Coveo {
	/**
	 * This static class is there to contain the different string definitions for all the events related to initialization.
	 *
	 * Note that these events will only be triggered when the {@link init} function is called.
	 *
	 * This means these events are normally called only once when the search interface is initialized.
	 */
	class InitializationEvents {
	    /**
	     * This event is triggered right before each components inside the search interface get initialized (eg: Before the constructor of each component is executed).
	     *
	     * The string value is `beforeInitialization`.
	     * @type {string}
	     */
	    static beforeInitialization: string;
	    /**
	     * Triggered after the components are initialized (eg: After the constructor of each component is executed)
	     * but before their state is set from the hash portion of the URL (e.g., http://mysearchinterface#q=myQuery ).
	     *
	     * This is also before the first query is launched (if the {@link SearchInterface.options.autoTriggerQuery} is `true`).
	     *
	     * The string value is `afterComponentsInitialization`.
	     * @type {string}
	     */
	    static afterComponentsInitialization: string;
	    /**
	     * Triggered right before the state from the URL (e.g., http://mysearchinterface#q=myQuery ) gets applied in the interface.
	     *
	     * This will typically only be useful if the {@link SearchInterface.options.enableHistory} is set to `true`.
	     *
	     * The string value is `restoreHistoryState`.
	     * @type {string}
	     */
	    static restoreHistoryState: string;
	    /**
	     * Triggered right after the UI is fully initialized.
	     *
	     * Concretely this means that the constructor of each component has been executed, and that the state coming for the URL (e.g., http://mysearchinterface#q=myquery) has been applied.
	     *
	     * It is triggered *before* the first query is launched, and if the {@link SearchInterface.options.autoTriggerQuery} is `true`.
	     *
	     * The string value is `afterInitialization`.
	     * @type {string}
	     */
	    static afterInitialization: string;
	    /**
	     * This is triggered when the UI needs to be dynamically removed so that components can unbind any internal handlers they might have set globally on the window or the document.
	     *
	     * After this event has been executed, the search interface can be dynamically removed and all handlers can be considered cleanly removed.
	     *
	     * The string value is `nuke`.
	     * @type {string}
	     */
	    static nuke: string;
	}

}
declare module Coveo {
	class HashUtils {
	    static getHash(w?: Window): string;
	    static getValue(key: string, toParse: string): any;
	    static encodeValues(values: {}): string;
	    static encodeArray(array: string[]): string;
	    static encodeObject(obj: Object): string;
	}

}
declare module Coveo {
	interface IJQuery {
	    fn: any;
	}
	function initCoveoJQuery(): boolean;
	function jQueryIsDefined(): boolean;

}
declare module Coveo {
	interface IDisplayedNewResultEventArgs {
	    result: IQueryResult;
	    item: HTMLElement;
	}
	interface IDisplayedNewResultsEventArgs {
	}
	interface IOpenQuickviewEventArgs {
	    termsToHighlight: any;
	}
	interface IChangeLayoutEventArgs {
	    layout: string;
	    results?: IQueryResults;
	}
	class ResultListEvents {
	    static newResultsDisplayed: string;
	    static newResultDisplayed: string;
	    static openQuickview: string;
	    static changeLayout: string;
	}

}
declare module Coveo {
	interface InitializationPlaceholderOption {
	    searchInterface?: boolean;
	    facet?: boolean;
	    searchbox?: boolean;
	    resultList?: boolean;
	    layout?: string;
	}
	class InitializationPlaceholder {
	    root: HTMLElement;
	    options: InitializationPlaceholderOption;
	    facetPlaceholder: string;
	    resultListPlaceholder: string;
	    cardResultListPlaceholder: string;
	    recommendationResultListPlaceholder: string;
	    static NUMBER_OF_FACETS: number;
	    static NUMBER_OF_RESULTS: number;
	    static NUMBER_OF_RESULTS_RECOMMENDATION: number;
	    static INITIALIZATION_CLASS: string;
	    constructor(root: HTMLElement, options?: InitializationPlaceholderOption);
	}

}
declare module Coveo {
	/**
	 * The `IPopulateOmniboxObject` is an interface that is used by components to interact with the Omnibox and provides a framework for type-ahead suggestions.
	 */
	interface IPopulateOmniboxObject {
	    /**
	     * A {@link IPopulateOmniboxQueryExpression} object used to describe the complete content of the Querybox component.
	     */
	    completeQueryExpression: IPopulateOmniboxQueryExpression;
	    /**
	     * A {@link IPopulateOmniboxQueryExpression} object used to describe the current active content (the current position of the cursor/caret) of the Omnibox component.
	     */
	    currentQueryExpression: IPopulateOmniboxQueryExpression;
	    /**
	     * An array {@link IPopulateOmniboxQueryExpression} used to describe each part of the content of the Omnibox component.
	     */
	    allQueryExpressions: IPopulateOmniboxQueryExpression[];
	    /**
	     * The number representing the current position of the cursor/caret inside the {@link Omnibox} component.
	     */
	    cursorPosition: number;
	    /**
	     * Clears the content of the {@link Omnibox} Component.
	     */
	    clear(): void;
	    /**
	     * Clears the current expression (current cursor position in the Omnibox).
	     */
	    clearCurrentExpression(): void;
	    /**
	     * Replaces the specified `searchValue` by the `newValue` in the Omnibox.
	     * @param searchValue
	     * @param newValue
	     */
	    replace(searchValue: string, newValue: string): void;
	    /**
	     * Replaces the current expression in the `QueryBox` (the current cursor position in the omnibox) by the `newValue`.
	     * @param newValue
	     */
	    replaceCurrentExpression(newValue: string): void;
	    /**
	     * Inserts new content in the omnibox at the specified position.
	     * @param at
	     * @param toInsert
	     */
	    insertAt(at: number, toInsert: string): void;
	    /**
	     * Closes the Omnibox.
	     */
	    closeOmnibox(): void;
	}
	/**
	 * This object is a simple interface that describes the content of an omnibox query expression.
	 */
	interface IPopulateOmniboxQueryExpression {
	    /**
	     * This is a simple string with the plain content of the {@link Omnibox}.
	     */
	    word: string;
	    /**
	     * This is a regex of the content of the {@link Omnibox} with some special character escaped.
	     */
	    regex: RegExp;
	}
	interface IOmniboxData extends IPopulateOmniboxObject {
	    rows: IOmniboxDataRow[];
	}
	/**
	 * The content that external code that wants to populate the omnibox need to populate.
	 */
	interface IOmniboxDataRow {
	    /**
	     * This is an optional property. It is used by each component to influence their rendering order in the Omnibox. It works like a normal CSS `zIndex`: higher value will render at the top most level. Providing no `zIndex` will make your item render with a low priority.
	     */
	    zIndex?: number;
	    /**
	     * This an `HTMLElement` that you want the Omnibox to render.
	     *
	     * It can be any valid HTML element (div, span, image, table, etc.). You can bind any event you want to this element and also add logic to handle the Omnibox (e.g. should the Omnibox close itself when clicking on your suggestion, should the Omnibox clear itself?).
	     *
	     * This element you provide can be as complex as you want it to be (see Providing Suggestions for the Omnibox).
	     */
	    element?: HTMLElement;
	    /**
	     * This is a Promise object. It is used when you want to make an asynchronous call (most likely an Ajax request) to a service in order to retrieve the data that you will use to build your HTML content.
	     */
	    deferred?: Promise<IOmniboxDataRow>;
	}

}
declare module Coveo {
	/// <reference path="../../lib/magic-box/index.d.ts" />
	/// <reference types="magic-box" />
	interface IPopulateOmniboxEventArgs extends IOmniboxData {
	}
	interface IPopulateOmniboxEventRow extends IOmniboxDataRow {
	}
	interface IOmniboxPreprocessResultForQueryEventArgs {
	    result: Coveo.MagicBox.Result;
	}
	interface ICloseOmniboxEventArgs {
	}
	class OmniboxEvents {
	    static populateOmnibox: string;
	    static openOmnibox: string;
	    static closeOmnibox: string;
	    static populateOmniboxSuggestions: string;
	    static omniboxPreprocessResultForQuery: string;
	}

}
declare module Coveo {
	class SettingsEvents {
	    static settingsPopulateMenu: string;
	}

}
declare module Coveo {
	interface ISavePreferencesEventArgs {
	}
	class PreferencesPanelEvents {
	    static savePreferences: string;
	    static exitPreferencesWithoutSave: string;
	}

}
declare module Coveo {
	/**
	 * Represent an item to insert in the breadcrumb
	 */
	interface IBreadcrumbItem {
	    /**
	     * The HTMLElement to insert in the breadcrumb
	     */
	    element: HTMLElement;
	}
	/**
	 * Event triggered when populating the breadcrumb
	 */
	interface IPopulateBreadcrumbEventArgs {
	    breadcrumbs: IBreadcrumbItem[];
	}
	interface IClearBreadcrumbEventArgs {
	}
	/**
	 * This static class is there to contains the different string definition for all the events related to {@link Breadcrumb}.
	 */
	class BreadcrumbEvents {
	    /**
	     * Triggered when the breadcrumb needs to update its content. External code can use this event to provide bits of HTML that should be included in the breadcrumb.
	     *
	     * All handlers bound to this event will receive a {@link IPopulateBreadcrumbEventArgs} as an argument.
	     */
	    static populateBreadcrumb: string;
	    /**
	     * Triggered when the user clicks the Clear All button in the breadcrumb. When this event is raised, every filter that is included in the breadcrumb should be removed.
	     *
	     * This event does not provide custom event data.
	     */
	    static clearBreadcrumb: string;
	    static redrawBreadcrumb: string;
	}

}
declare module Coveo {
	interface IQuickviewLoadedEventArgs {
	    duration: number;
	}
	class QuickviewEvents {
	    static quickviewLoaded: string;
	    static openQuickview: string;
	}

}
declare module Coveo {
	interface IPosition {
	    vertical: VerticalAlignment;
	    horizontal: HorizontalAlignment;
	    verticalOffset?: number;
	    horizontalOffset?: number;
	    horizontalClip?: boolean;
	}
	enum VerticalAlignment {
	    TOP = 0,
	    MIDDLE = 1,
	    BOTTOM = 2,
	    INNERTOP = 3,
	    INNERBOTTOM = 4,
	}
	enum HorizontalAlignment {
	    LEFT = 0,
	    CENTER = 1,
	    RIGHT = 2,
	    INNERLEFT = 3,
	    INNERRIGHT = 4,
	}
	class PopupUtils {
	    static positionPopup(popUp: HTMLElement, nextTo: HTMLElement, boundary: HTMLElement, desiredPosition: IPosition, appendTo?: HTMLElement, checkForBoundary?: number): void;
	}

}
declare module Coveo {
	class EventsUtils {
	    static addPrefixedEvent(element: HTMLElement, pascalCaseEventName: string, callback: any): void;
	    static removePrefixedEvent(element: HTMLElement, pascalCaseEventName: string, callback: any): void;
	}

}
declare module Coveo {
	class ResponsiveComponentsUtils {
	    static shouldDrawFacetSlider(root: Dom): boolean;
	    static isSmallTabsActivated(root: Dom): boolean;
	    static isSmallFacetActivated(root: Dom): boolean;
	    static isSmallRecommendationActivated(root: Dom): boolean;
	    static activateSmallTabs(root: Dom): void;
	    static deactivateSmallTabs(root: Dom): void;
	    static activateSmallFacet(root: Dom): void;
	    static deactivateSmallFacet(root: Dom): void;
	    static activateSmallRecommendation(root: Dom): void;
	    static deactivateSmallRecommendation(root: Dom): void;
	}

}
declare module Coveo {
	var L10N: {
	    format: (key: string, ...args: any[]) => string;
	    formatPlSn: (value: string, count: number | boolean) => string;
	};

}
declare module Coveo {
	function l(str: "Unknown"): any;
	function l(str: "And"): any;
	function l(str: "Authenticating", param0: string): any;
	function l(str: "Clear", param0: string): any;
	function l(str: "CompleteQuery"): any;
	function l(str: "Exclude", param0: string): any;
	function l(str: "EnterTag"): any;
	function l(str: "Next"): any;
	function l(str: "Last"): any;
	function l(str: "Link"): any;
	function l(str: "Or"): any;
	function l(str: "Previous"): any;
	function l(str: "QueryDidntMatchAnyDocuments"): any;
	function l(str: "QueryException", param0: string): any;
	function l(str: "Me"): any;
	function l(str: "Remove"): any;
	function l(str: "Search"): any;
	function l(str: "SearchFor", param0: string): any;
	function l(str: "ShareQuery"): any;
	function l(str: "Preferences"): any;
	function l(str: "LinkOpeningSettings"): any;
	function l(str: "Reauthenticate", param0: string): any;
	function l(str: "ResultsFilteringExpression"): any;
	function l(str: "FiltersInYourPreferences"): any;
	function l(str: "Create"): any;
	function l(str: "SearchIn", param0: string): any;
	function l(str: "Seconds", param0: string, count: number): any;
	function l(str: "ShowingResultsOf", param0: string, param1: string, param2: string, count: number): any;
	function l(str: "SwitchTo", param0: string): any;
	function l(str: "Unexclude", param0: string): any;
	function l(str: "ClearAllFilters"): any;
	function l(str: "SkipLogin"): any;
	function l(str: "LoginInProgress"): any;
	function l(str: "Login"): any;
	function l(str: "GetStarted"): any;
	function l(str: "More"): any;
	function l(str: "NMore", param0: string): any;
	function l(str: "Less"): any;
	function l(str: "Settings"): any;
	function l(str: "Score"): any;
	function l(str: "ScoreDescription"): any;
	function l(str: "Occurrences"): any;
	function l(str: "OccurrencesDescription"): any;
	function l(str: "Label"): any;
	function l(str: "Of"): any;
	function l(str: "LabelDescription"): any;
	function l(str: "Value"): any;
	function l(str: "ValueDescription"): any;
	function l(str: "AlphaAscending"): any;
	function l(str: "AlphaDescending"): any;
	function l(str: "ChiSquare"): any;
	function l(str: "Nosort"): any;
	function l(str: "NosortDescription"): any;
	function l(str: "RelativeFrequency"): any;
	function l(str: "RelativeFrequencyDescription"): any;
	function l(str: "DateDistribution"): any;
	function l(str: "Custom"): any;
	function l(str: "CustomDescription"): any;
	function l(str: "ComputedField"): any;
	function l(str: "Ascending"): any;
	function l(str: "Descending"): any;
	function l(str: "noResultFor", param0: string): any;
	function l(str: "autoCorrectedQueryTo", param0: string): any;
	function l(str: "didYouMean", param0: string): any;
	function l(str: "SuggestedResults"): any;
	function l(str: "SuggestedQueries"): any;
	function l(str: "MostRelevantItems"): any;
	function l(str: "AllItems"): any;
	function l(str: "ShowLess"): any;
	function l(str: "ShowMore"): any;
	function l(str: "HideFacet"): any;
	function l(str: "ShowFacet"): any;
	function l(str: "AndOthers", param0: string, count: number): any;
	function l(str: "Others", param0: string, count: number): any;
	function l(str: "MostRelevantPosts"): any;
	function l(str: "CompleteThread"): any;
	function l(str: "ShowCompleteThread"): any;
	function l(str: "ShowOnlyTopMatchingPosts"): any;
	function l(str: "MostRelevantReplies"): any;
	function l(str: "AllConversation"): any;
	function l(str: "ShowAllConversation"): any;
	function l(str: "ShowAllReplies"): any;
	function l(str: "ShowOnlyMostRelevantReplies"): any;
	function l(str: "Close"): any;
	function l(str: "Open"): any;
	function l(str: "OpenInOutlookWhenPossible"): any;
	function l(str: "AlwaysOpenInNewWindow"): any;
	function l(str: "Quickview"): any;
	function l(str: "NoQuickview"): any;
	function l(str: "ErrorReport"): any;
	function l(str: "OopsError"): any;
	function l(str: "ProblemPersists"): any;
	function l(str: "GoBack"): any;
	function l(str: "Reset"): any;
	function l(str: "Retry"): any;
	function l(str: "MoreInfo"): any;
	function l(str: "Username"): any;
	function l(str: "Password"): any;
	function l(str: "PostedBy"): any;
	function l(str: "CannotConnect"): any;
	function l(str: "BadUserPass"): any;
	function l(str: "PleaseEnterYourCredentials", param0: string): any;
	function l(str: "PleaseEnterYourSearchPage"): any;
	function l(str: "Collapse"): any;
	function l(str: "Collapsable"): any;
	function l(str: "Expand"): any;
	function l(str: "Today"): any;
	function l(str: "Yesterday"): any;
	function l(str: "Tomorrow"): any;
	function l(str: "Duration", param0: string): any;
	function l(str: "IndexDuration", param0: string): any;
	function l(str: "ProxyDuration", param0: string): any;
	function l(str: "ClientDuration", param0: string): any;
	function l(str: "Unavailable"): any;
	function l(str: "Reply"): any;
	function l(str: "ReplyAll"): any;
	function l(str: "Forward"): any;
	function l(str: "From"): any;
	function l(str: "Caption"): any;
	function l(str: "Expression"): any;
	function l(str: "Tab"): any;
	function l(str: "Tabs"): any;
	function l(str: "EnterExpressionName"): any;
	function l(str: "EnterExpressionToFilterWith"): any;
	function l(str: "SelectTab"): any;
	function l(str: "SelectAll"): any;
	function l(str: "PageUrl"): any;
	function l(str: "ErrorSavingToDevice"): any;
	function l(str: "ErrorReadingFromDevice"): any;
	function l(str: "AppIntro"): any;
	function l(str: "TryDemo"): any;
	function l(str: "ContactUs"): any;
	function l(str: "NewToCoveo"): any;
	function l(str: "LetUsHelpGetStarted"): any;
	function l(str: "LikesThis", param0: string, count: number): any;
	function l(str: "CannotConnectSearchPage"): any;
	function l(str: "AreYouSureDeleteFilter", param0: string, param1: string): any;
	function l(str: "OnlineHelp"): any;
	function l(str: "Done"): any;
	function l(str: "SaveFacetState"): any;
	function l(str: "ClearFacetState"): any;
	function l(str: "DisplayingTheOnlyMessage"): any;
	function l(str: "NoNetworkConnection"): any;
	function l(str: "UnknownConnection"): any;
	function l(str: "EthernetConnection"): any;
	function l(str: "WiFi"): any;
	function l(str: "CELL"): any;
	function l(str: "CELL_2G"): any;
	function l(str: "CELL_3G"): any;
	function l(str: "CELL_4G"): any;
	function l(str: "Relevance"): any;
	function l(str: "Date"): any;
	function l(str: "Amount"): any;
	function l(str: "QueryExceptionNoException"): any;
	function l(str: "QueryExceptionInvalidSyntax"): any;
	function l(str: "QueryExceptionInvalidCustomField"): any;
	function l(str: "QueryExceptionInvalidDate"): any;
	function l(str: "QueryExceptionInvalidExactPhrase"): any;
	function l(str: "QueryExceptionInvalidDateOp"): any;
	function l(str: "QueryExceptionInvalidNear"): any;
	function l(str: "QueryExceptionInvalidWeightedNear"): any;
	function l(str: "QueryExceptionInvalidTerm"): any;
	function l(str: "QueryExceptionTooManyTerms"): any;
	function l(str: "QueryExceptionWildcardTooGeneral"): any;
	function l(str: "QueryExceptionInvalidSortField"): any;
	function l(str: "QueryExceptionInvalidSmallStringOp"): any;
	function l(str: "QueryExceptionRequestedResultsMax"): any;
	function l(str: "QueryExceptionAggregatedMirrorDead"): any;
	function l(str: "QueryExceptionAggregatedMirrorQueryTimeOut"): any;
	function l(str: "QueryExceptionAggregatedMirrorInvalidBuildNumber"): any;
	function l(str: "QueryExceptionAggregatedMirrorCannotConnect"): any;
	function l(str: "QueryExceptionNotEnoughLeadingCharsWildcard"): any;
	function l(str: "QueryExceptionSecurityInverterNotFound"): any;
	function l(str: "QueryExceptionSecurityInverterAccessDenied"): any;
	function l(str: "QueryExceptionAggregatedMirrorCannotImpersonate"): any;
	function l(str: "QueryExceptionUnexpected"): any;
	function l(str: "QueryExceptionAccessDenied"): any;
	function l(str: "QueryExceptionSuperUserTokenInvalid"): any;
	function l(str: "QueryExceptionSuperUserTokenExpired"): any;
	function l(str: "QueryExceptionLicenseQueriesExpired"): any;
	function l(str: "QueryExceptionLicenseSuperUserTokenNotSupported"): any;
	function l(str: "QueryExceptionInvalidSession"): any;
	function l(str: "QueryExceptionInvalidDocument"): any;
	function l(str: "QueryExceptionSearchDisabled"): any;
	function l(str: "FileType"): any;
	function l(str: "ShowAttachment"): any;
	function l(str: "OnFeed", param0: string): any;
	function l(str: "Author"): any;
	function l(str: "NoTitle"): any;
	function l(str: "CurrentSelections"): any;
	function l(str: "AllContent"): any;
	function l(str: "CancelLastAction"): any;
	function l(str: "SearchTips"): any;
	function l(str: "CheckSpelling"): any;
	function l(str: "TryUsingFewerKeywords"): any;
	function l(str: "SelectFewerFilters"): any;
	function l(str: "Document"): any;
	function l(str: "Time"): any;
	function l(str: "StartDate"): any;
	function l(str: "StartTime"): any;
	function l(str: "DurationTitle"): any;
	function l(str: "UserQuery"): any;
	function l(str: "ShowUserActions"): any;
	function l(str: "NoData"): any;
	function l(str: "EventType"): any;
	function l(str: "GoToFullSearch"): any;
	function l(str: "GoToEdition"): any;
	function l(str: "RemoveContext"): any;
	function l(str: "BoxAttachToCase"): any;
	function l(str: "AttachToCase"): any;
	function l(str: "Attach"): any;
	function l(str: "Attached"): any;
	function l(str: "Detach"): any;
	function l(str: "Details"): any;
	function l(str: "AdditionalFilters"): any;
	function l(str: "SelectNonContextualSearch"): any;
	function l(str: "CopyPasteToSupport"): any;
	function l(str: "FollowQueryDescription"): any;
	function l(str: "SearchAlerts_Panel"): any;
	function l(str: "SearchAlerts_PanelDescription"): any;
	function l(str: "SearchAlerts_PanelNoSearchAlerts"): any;
	function l(str: "SearchAlerts_Fail"): any;
	function l(str: "SearchAlerts_Type"): any;
	function l(str: "SearchAlerts_Content"): any;
	function l(str: "SearchAlerts_Actions"): any;
	function l(str: "EmptyQuery"): any;
	function l(str: "SearchAlerts_Type_followQuery"): any;
	function l(str: "SearchAlerts_Type_followDocument"): any;
	function l(str: "SearchAlerts_unFollowing"): any;
	function l(str: "SearchAlerts_follow"): any;
	function l(str: "SearchAlerts_followed"): any;
	function l(str: "SearchAlerts_followQuery"): any;
	function l(str: "Subscription_StopFollowingQuery"): any;
	function l(str: "SearchAlerts_Frequency"): any;
	function l(str: "SubscriptionsManageSubscriptions"): any;
	function l(str: "SubscriptionsMessageFollowQuery", param0: string): any;
	function l(str: "SubscriptionsMessageFollow", param0: string): any;
	function l(str: "Expiration"): any;
	function l(str: "Monthly"): any;
	function l(str: "Daily"): any;
	function l(str: "Monday"): any;
	function l(str: "Tuesday"): any;
	function l(str: "Wednesday"): any;
	function l(str: "Thursday"): any;
	function l(str: "Friday"): any;
	function l(str: "Saturday"): any;
	function l(str: "Sunday"): any;
	function l(str: "NextDay", param0: string): any;
	function l(str: "LastDay", param0: string): any;
	function l(str: "StartTypingCaseForSuggestions"): any;
	function l(str: "ExportToExcel"): any;
	function l(str: "ExportToExcelDescription"): any;
	function l(str: "CaseCreationNoResults"): any;
	function l(str: "SortBy"): any;
	function l(str: "BoxCreateArticle"): any;
	function l(str: "Facets"): any;
	function l(str: "AdvancedSearch"): any;
	function l(str: "Keywords"): any;
	function l(str: "AllTheseWords"): any;
	function l(str: "ExactPhrase"): any;
	function l(str: "AnyOfTheseWords"): any;
	function l(str: "NoneOfTheseWords"): any;
	function l(str: "Anytime"): any;
	function l(str: "InTheLast"): any;
	function l(str: "Days"): any;
	function l(str: "Months"): any;
	function l(str: "Month"): any;
	function l(str: "Year"): any;
	function l(str: "Between"): any;
	function l(str: "Language"): any;
	function l(str: "Size"): any;
	function l(str: "AtLeast"): any;
	function l(str: "AtMost"): any;
	function l(str: "Contains"): any;
	function l(str: "DoesNotContain"): any;
	function l(str: "Matches"): any;
	function l(str: "Bytes"): any;
	function l(str: "list"): any;
	function l(str: "card"): any;
	function l(str: "table"): any;
	function l(str: "ResultLinks"): any;
	function l(str: "EnableQuerySyntax"): any;
	function l(str: "On"): any;
	function l(str: "Off"): any;
	function l(str: "Automatic"): any;
	function l(str: "ResultsPerPage"): any;
	function l(str: "FiltersInAdvancedSearch"): any;
	function l(str: "InvalidTimeRange"): any;
	function l(str: "PreviousMonth"): any;
	function l(str: "NextMonth"): any;
	function l(str: "Title"): any;
	function l(str: "objecttype_people"): any;
	function l(str: "objecttype_message"): any;
	function l(str: "objecttype_feed"): any;
	function l(str: "objecttype_thread"): any;
	function l(str: "objecttype_file"): any;
	function l(str: "objecttype_board"): any;
	function l(str: "objecttype_category"): any;
	function l(str: "objecttype_account"): any;
	function l(str: "objecttype_annotation"): any;
	function l(str: "objecttype_campaign"): any;
	function l(str: "objecttype_case"): any;
	function l(str: "objecttype_contentversion"): any;
	function l(str: "objecttype_contact"): any;
	function l(str: "objecttype_contract"): any;
	function l(str: "objecttype_event"): any;
	function l(str: "objecttype_email"): any;
	function l(str: "objecttype_goal"): any;
	function l(str: "objecttype_incident"): any;
	function l(str: "objecttype_invoice"): any;
	function l(str: "objecttype_lead"): any;
	function l(str: "objecttype_list"): any;
	function l(str: "objecttype_solution"): any;
	function l(str: "objecttype_task"): any;
	function l(str: "objecttype_user"): any;
	function l(str: "objecttype_attachment"): any;
	function l(str: "objecttype_casecomment"): any;
	function l(str: "objecttype_opportunity"): any;
	function l(str: "objecttype_opportunityproduct"): any;
	function l(str: "objecttype_feeditem"): any;
	function l(str: "objecttype_feedcomment"): any;
	function l(str: "objecttype_note"): any;
	function l(str: "objecttype_product"): any;
	function l(str: "objecttype_partner"): any;
	function l(str: "objecttype_queueitem"): any;
	function l(str: "objecttype_quote"): any;
	function l(str: "objecttype_salesliterature"): any;
	function l(str: "objecttype_salesorder"): any;
	function l(str: "objecttype_service"): any;
	function l(str: "objecttype_socialprofile"): any;
	function l(str: "objecttype_kbdocumentation"): any;
	function l(str: "objecttype_kbtechnicalarticle"): any;
	function l(str: "objecttype_kbsolution"): any;
	function l(str: "objecttype_kbknowledgearticle"): any;
	function l(str: "objecttype_kbattachment"): any;
	function l(str: "objecttype_kbarticle"): any;
	function l(str: "objecttype_kbarticlecomment"): any;
	function l(str: "objecttype_knowledgearticle"): any;
	function l(str: "filetype_box user"): any;
	function l(str: "filetype_html"): any;
	function l(str: "filetype_wiki"): any;
	function l(str: "filetype_webscraperwebpage"): any;
	function l(str: "filetype_image"): any;
	function l(str: "filetype_folder"): any;
	function l(str: "filetype_txt"): any;
	function l(str: "filetype_zip"): any;
	function l(str: "filetype_olefile"): any;
	function l(str: "filetype_gmailmessage"): any;
	function l(str: "filetype_pdf"): any;
	function l(str: "filetype_swf"): any;
	function l(str: "filetype_xml"): any;
	function l(str: "filetype_vsd"): any;
	function l(str: "filetype_svg"): any;
	function l(str: "filetype_svm"): any;
	function l(str: "filetype_rssitem"): any;
	function l(str: "filetype_doc"): any;
	function l(str: "filetype_docx"): any;
	function l(str: "filetype_xls"): any;
	function l(str: "filetype_ppt"): any;
	function l(str: "filetype_video"): any;
	function l(str: "filetype_youtube"): any;
	function l(str: "filetype_saleforceitem"): any;
	function l(str: "filetype_dynamicscrmitem"): any;
	function l(str: "filetype_salesforceitem"): any;
	function l(str: "filetype_odt"): any;
	function l(str: "filetype_box"): any;
	function l(str: "filetype_jiraissue"): any;
	function l(str: "filetype_cfpage"): any;
	function l(str: "filetype_cfcomment"): any;
	function l(str: "filetype_cfspace"): any;
	function l(str: "filetype_cfblogentry"): any;
	function l(str: "filetype_confluencespace"): any;
	function l(str: "filetype_exchangemessage"): any;
	function l(str: "filetype_exchangeappointment"): any;
	function l(str: "filetype_exchangenote"): any;
	function l(str: "filetype_exchangetask"): any;
	function l(str: "filetype_exchangeperson"): any;
	function l(str: "filetype_activedirperson"): any;
	function l(str: "filetype_exchangeactivity"): any;
	function l(str: "filetype_exchangecalendarmessage"): any;
	function l(str: "filetype_exchangedocument"): any;
	function l(str: "filetype_exchangedsn"): any;
	function l(str: "filetype_exchangefreebusy"): any;
	function l(str: "filetype_exchangegroup"): any;
	function l(str: "filetype_exchangerssfeed"): any;
	function l(str: "filetype_exchangejunkmessage"): any;
	function l(str: "filetype_exchangeofficecom"): any;
	function l(str: "filetype_lithiummessage"): any;
	function l(str: "filetype_lithiumthread"): any;
	function l(str: "filetype_lithiumboard"): any;
	function l(str: "filetype_lithiumcategory"): any;
	function l(str: "filetype_lithiumcommunity"): any;
	function l(str: "filetype_spportal"): any;
	function l(str: "filetype_spsite"): any;
	function l(str: "filetype_spuserprofile"): any;
	function l(str: "filetype_sparea"): any;
	function l(str: "filetype_spannouncement"): any;
	function l(str: "filetype_spannouncementlist"): any;
	function l(str: "filetype_spcontact"): any;
	function l(str: "filetype_spcontactlist"): any;
	function l(str: "filetype_spcustomlist"): any;
	function l(str: "filetype_spdiscussionboard"): any;
	function l(str: "filetype_spdiscussionboardlist"): any;
	function l(str: "filetype_spdocumentlibrarylist"): any;
	function l(str: "filetype_spevent"): any;
	function l(str: "filetype_speventlist"): any;
	function l(str: "filetype_spformlibrarylist"): any;
	function l(str: "filetype_spissue"): any;
	function l(str: "filetype_spissuelist"): any;
	function l(str: "filetype_splink"): any;
	function l(str: "filetype_splinklist"): any;
	function l(str: "filetype_sppicturelibrarylist"): any;
	function l(str: "filetype_spsurvey"): any;
	function l(str: "filetype_spsurveylist"): any;
	function l(str: "filetype_sptask"): any;
	function l(str: "filetype_sptasklist"): any;
	function l(str: "filetype_spagenda"): any;
	function l(str: "filetype_spagendalist"): any;
	function l(str: "filetype_spattendee"): any;
	function l(str: "filetype_spattendeelist"): any;
	function l(str: "filetype_spcustomgridlist"): any;
	function l(str: "filetype_spdecision"): any;
	function l(str: "filetype_spdecisionlist"): any;
	function l(str: "filetype_spobjective"): any;
	function l(str: "filetype_spobjectivelist"): any;
	function l(str: "filetype_sptextbox"): any;
	function l(str: "filetype_sptextboxlist"): any;
	function l(str: "filetype_spthingstobring"): any;
	function l(str: "filetype_spthingstobringlist"): any;
	function l(str: "filetype_sparealisting"): any;
	function l(str: "filetype_spmeetingserie"): any;
	function l(str: "filetype_spmeetingserielist"): any;
	function l(str: "filetype_spsitedirectory"): any;
	function l(str: "filetype_spsitedirectorylist"): any;
	function l(str: "filetype_spdatasource"): any;
	function l(str: "filetype_spdatasourcelist"): any;
	function l(str: "filetype_splisttemplatecataloglist"): any;
	function l(str: "filetype_spwebpartcataloglist"): any;
	function l(str: "filetype_spwebtemplatecataloglist"): any;
	function l(str: "filetype_spworkspacepagelist"): any;
	function l(str: "filetype_spunknownlist"): any;
	function l(str: "filetype_spadministratortask"): any;
	function l(str: "filetype_spadministratortasklist"): any;
	function l(str: "filetype_spareadocumentlibrarylist"): any;
	function l(str: "filetype_spblogcategory"): any;
	function l(str: "filetype_spblogcategorylist"): any;
	function l(str: "filetype_spblogcomment"): any;
	function l(str: "filetype_spblogcommentlist"): any;
	function l(str: "filetype_spblogpost"): any;
	function l(str: "filetype_spblogpostlist"): any;
	function l(str: "filetype_spdataconnectionlibrarylist"): any;
	function l(str: "filetype_spdistributiongroup"): any;
	function l(str: "filetype_spdistributiongrouplist"): any;
	function l(str: "filetype_spipfslist"): any;
	function l(str: "filetype_spkeyperformanceindicator"): any;
	function l(str: "filetype_spkeyperformanceindicatorlist"): any;
	function l(str: "filetype_splanguagesandtranslator"): any;
	function l(str: "filetype_splanguagesandtranslatorlist"): any;
	function l(str: "filetype_spmasterpagescataloglist"): any;
	function l(str: "filetype_spnocodeworkflowlibrarylist"): any;
	function l(str: "filetype_spprojecttask"): any;
	function l(str: "filetype_spprojecttasklist"): any;
	function l(str: "filetype_sppublishingpageslibrarylist"): any;
	function l(str: "filetype_spreportdocumentlibrarylist"): any;
	function l(str: "filetype_spreportlibrarylist"): any;
	function l(str: "filetype_spslidelibrarylist"): any;
	function l(str: "filetype_sptab"): any;
	function l(str: "filetype_sptablist"): any;
	function l(str: "filetype_sptranslationmanagementlibrarylist"): any;
	function l(str: "filetype_spuserinformation"): any;
	function l(str: "filetype_spuserinformationlist"): any;
	function l(str: "filetype_spwikipagelibrarylist"): any;
	function l(str: "filetype_spworkflowhistory"): any;
	function l(str: "filetype_spworkflowhistorylist"): any;
	function l(str: "filetype_spworkflowprocess"): any;
	function l(str: "filetype_spworkflowprocesslist"): any;
	function l(str: "filetype_sppublishingimageslibrarylist"): any;
	function l(str: "filetype_spcirculation"): any;
	function l(str: "filetype_spcirculationlist"): any;
	function l(str: "filetype_spdashboardslibrarylist"): any;
	function l(str: "filetype_spdataconnectionforperformancepointlibrarylist"): any;
	function l(str: "filetype_sphealthreport"): any;
	function l(str: "filetype_sphealthreportlist"): any;
	function l(str: "filetype_sphealthrule"): any;
	function l(str: "filetype_sphealthrulelist"): any;
	function l(str: "filetype_spimedictionary"): any;
	function l(str: "filetype_spimedictionarylist"): any;
	function l(str: "filetype_spperformancepointcontent"): any;
	function l(str: "filetype_spperformancepointcontentlist"): any;
	function l(str: "filetype_spphonecallmemo"): any;
	function l(str: "filetype_spphonecallmemolist"): any;
	function l(str: "filetype_sprecordlibrarylist"): any;
	function l(str: "filetype_spresource"): any;
	function l(str: "filetype_spresourcelist"): any;
	function l(str: "filetype_spprocessdiagramslibrarylist"): any;
	function l(str: "filetype_spsitethemeslibrarylist"): any;
	function l(str: "filetype_spsolutionslibrarylist"): any;
	function l(str: "filetype_spwfpublibrarylist"): any;
	function l(str: "filetype_spwhereabout"): any;
	function l(str: "filetype_spwhereaboutlist"): any;
	function l(str: "filetype_spdocumentlink"): any;
	function l(str: "filetype_spdocumentset"): any;
	function l(str: "filetype_spmicrofeedpost"): any;
	function l(str: "filetype_spmicrofeedlist"): any;
	function l(str: "filetype_splistfolder"): any;
	function l(str: "filetype_youtubevideo"): any;
	function l(str: "filetype_youtubeplaylistitem"): any;
	function l(...params: any[]): any;

}
declare module Coveo {
	/**
	 * This class serves as a way to get and set the different screen size breakpoints for the interface.
	 *
	 * By settings those, you can impact, amongst other, the {@link Facet}, {@link Tab} or {@link ResultList} behaviour.
	 *
	 * For example, the {@link Facet} components of your interface will switch to a dropdown menu when the screen size reaches 800px or less.
	 *
	 * You could modify this value using this calls
	 *
	 * Normally, you would interact with this class using the instance bound to {@link SearchInterface.responsiveComponents}
	 */
	class ResponsiveComponents {
	    windoh: Window;
	    constructor(windoh?: Window);
	    /**
	     * Set the breakpoint for small screen size.
	     * @param width
	     */
	    setSmallScreenWidth(width: number): void;
	    /**
	     * Set the breakpoint for medium screen size
	     * @param width
	     */
	    setMediumScreenWidth(width: number): void;
	    /**
	     * Get the current breakpoint for small screen size.
	     *
	     * If it was not explicitly set by {@link ResponsiveComponents.setSmallScreenWidth}, the default value is `480`.
	     * @returns {number}
	     */
	    getSmallScreenWidth(): number;
	    /**
	     * Get the current breakpoint for medium screen size.
	     *
	     * If it was not explicitly set by {@link ResponsiveComponents.setMediumScreenWidth}, the default value is `800`.
	     * @returns {number}
	     */
	    getMediumScreenWidth(): number;
	    /**
	     * Return true if the current screen size is smaller than the current breakpoint set for small screen width.
	     * @returns {boolean}
	     */
	    isSmallScreenWidth(): boolean;
	    /**
	     * Return true if the current screen size is smaller than the current breakpoint set for medium screen width.
	     * @returns {boolean}
	     */
	    isMediumScreenWidth(): boolean;
	    /**
	     * Return true if the current screen size is larger than the current breakpoint set for medium and small.
	     * @returns {boolean}
	     */
	    isLargeScreenWidth(): boolean;
	}

}
declare module Coveo {
	class SVGIcons {
	    static icons: {
	        search: string;
	        more: string;
	        loading: string;
	        checkboxHookExclusionMore: string;
	        arrowUp: string;
	        arrowDown: string;
	        mainClear: string;
	        orAnd: string;
	        sort: string;
	        ascending: string;
	        descending: string;
	        dropdownMore: string;
	        dropdownLess: string;
	        facetCollapse: string;
	        facetExpand: string;
	        dropdownShareQuery: string;
	        dropdownPreferences: string;
	        dropdownAuthenticate: string;
	        dropdownExport: string;
	        dropdownFollowQuery: string;
	        quickview: string;
	        pagerRightArrow: string;
	        pagerLeftArrow: string;
	        replies: string;
	        coveoLogo: string;
	        coveoPoweredBy: string;
	        taggingOk: string;
	        edit: string;
	        star: string;
	        listLayout: string;
	        cardLayout: string;
	        tableLayout: string;
	    };
	}

}
declare module Coveo {
	class SVGDom {
	    static addClassToSVGInContainer(svgContainer: HTMLElement, classToAdd: string): void;
	    static removeClassFromSVGInContainer(svgContainer: HTMLElement, classToRemove: string): void;
	}

}
declare module Coveo {
	class ResponsiveTabs implements IResponsiveComponent {
	    ID: string;
	    constructor(coveoRoot: Dom, ID: string);
	    static init(root: HTMLElement, component: Component, options: IResponsiveComponentOptions): void;
	    handleResizeEvent(): void;
	}

}
declare module Coveo {
	enum KEYBOARD {
	    BACKSPACE = 8,
	    TAB = 9,
	    ENTER = 13,
	    SHIFT = 16,
	    CTRL = 17,
	    ALT = 18,
	    ESCAPE = 27,
	    SPACEBAR = 32,
	    PAGE_UP = 33,
	    PAGE_DOWN = 34,
	    HOME = 36,
	    LEFT_ARROW = 37,
	    UP_ARROW = 38,
	    RIGHT_ARROW = 39,
	    DOWN_ARROW = 40,
	    INSERT = 45,
	    DELETE = 46,
	}
	class KeyboardUtils {
	    static keysEqual(key: any, code: any): boolean;
	    static isAllowedKeyForOmnibox(e: KeyboardEvent): boolean;
	    static isAllowedKeyForSearchAsYouType(e: KeyboardEvent): boolean;
	    static isDeleteOrBackspace(e: KeyboardEvent): boolean;
	    static isArrowKeyPushed(keycode: number): boolean;
	    static isNumberKeyPushed(keycode: number): boolean;
	    static isLetterKeyPushed(keycode: number): boolean;
	    static keypressAction(keyCode: KEYBOARD | KEYBOARD[], action: Function): (e: KeyboardEvent, ...data: any[]) => void;
	}

}
declare module Coveo {
	interface ITabOptions {
	    expression?: string;
	    constant?: boolean;
	    id?: string;
	    icon?: string;
	    caption?: string;
	    sort?: string;
	    layout?: string;
	    endpoint?: SearchEndpoint;
	    enableDuplicateFiltering?: boolean;
	    pipeline?: string;
	    maximumAge?: number;
	    enableResponsiveMode?: boolean;
	    dropdownHeaderLabel?: string;
	}
	/**
	 * The Tab component renders a bar that allows the end user to select a specific search interface.
	 *
	 * This component attaches itself to a `div` element. It is in charge of adding an advanced expression to the outgoing
	 * query in order to refine the results.
	 *
	 * The Tab component can also hide and show different parts of the UI. For each individual component in the UI, you can
	 * specify whether you wish to include or exclude that component when the user selects a certain Tab.
	 *
	 * **Including and Excluding Other HTML Components:**
	 *
	 * You can hide or show a specific HTML component based on the currently selected Tab by adding one of the following
	 * attributes to its tag:
	 *
	 * - `<div data-tab="foobar">`: Only include this element in the Tab with `foobar` as its `data-id`.
	 * - `<div data-tab-not="foobar">`: Do not include this element in the Tab with `foobar` as its `data-id`.
	 * - `<div data-tab="foobar,somethingelse">`: Only include this element in the Tab with `foobar` as its `data-id` and in
	 * the Tab with `somethingelse` as its `data-id`.
	 *
	 * **Setting a New Endpoint for a Tab:**
	 *
	 * A Tab can use a custom endpoint when performing a query. Of course, you need to make sure that the endpoint exists in
	 * the array of Coveo.SearchEndpoint.endpoints (see {@link SearchEndpoint.endpoints}).
	 *
	 * ```
	 * Coveo.SearchEndpoint.endpoints["specialEndpoint"] = new Coveo.SearchEndpoint({
	 *     restUri : 'https://somewhere.com/rest/search'
	 * })
	 *
	 * [ ... ]
	 *
	 * <div class='CoveoTab' data-endpoint='specialEndpoint'></div>
	 *
	 * ```
	 */
	class Tab extends Component {
	    element: HTMLElement;
	    options: ITabOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for a Tab
	     * @componentOptions
	     */
	    static options: ITabOptions;
	    /**
	     * Creates a new Tab. Binds on buildingQuery event as well as an event on click of the element.
	     * @param element The HTMLElement on which to instantiate the component. Normally a `div`.
	     * @param options The options for the Tab component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: ITabOptions, bindings?: IComponentBindings);
	    /**
	     * Selects the current Tab.
	     *
	     * Also logs the `interfaceChange` event in the usage analytics with the new current {@link Tab.options.id} as metada
	     * and triggers a new query.
	     */
	    select(): void;
	    /**
	     * Indicates whether the HTMLElement argument is included in the Tab. *Included* elements are shown when the Tab is
	     * selected, whereas *excluded* elements are not.
	     * @param element The HTMLElement to verify.
	     * @returns {boolean} `true` if the HTMLElement is included in the Tab; `false` if it is excluded.
	     */
	    isElementIncludedInTab(element: HTMLElement): boolean;
	    protected handleBuildingQuery(data: IBuildingQueryEventArgs): void;
	    protected isSelected(): boolean;
	    enable(): void;
	    disable(): void;
	}

}
declare module Coveo {
	class ResponsiveDropdownHeader {
	    element: Dom;
	    static DEFAULT_CSS_CLASS_NAME: string;
	    static ACTIVE_HEADER_CSS_CLASS_NAME: string;
	    constructor(componentName: string, element: Dom);
	    open(): void;
	    close(): void;
	    cleanUp(): void;
	    hide(): void;
	    show(): void;
	}

}
declare module Coveo {
	interface IResponsiveDropdownContent {
	    element: Dom;
	    positionDropdown(): void;
	    hideDropdown(): void;
	    cleanUp(): void;
	}
	class ResponsiveDropdownContent implements IResponsiveDropdownContent {
	    element: Dom;
	    static DEFAULT_CSS_CLASS_NAME: string;
	    constructor(componentName: string, element: Dom, coveoRoot: Dom, minWidth: number, widthRatio: number);
	    positionDropdown(): void;
	    hideDropdown(): void;
	    cleanUp(): void;
	}

}
declare module Coveo {
	class ResponsiveDropdown {
	    dropdownContent: IResponsiveDropdownContent;
	    dropdownHeader: ResponsiveDropdownHeader;
	    coveoRoot: Dom;
	    static TRANSPARENT_BACKGROUND_OPACITY: string;
	    static DROPDOWN_BACKGROUND_CSS_CLASS_NAME: string;
	    isOpened: boolean;
	    constructor(dropdownContent: IResponsiveDropdownContent, dropdownHeader: ResponsiveDropdownHeader, coveoRoot: Dom);
	    registerOnOpenHandler(handler: Function, context: any): void;
	    registerOnCloseHandler(handler: Function, context: any): void;
	    cleanUp(): void;
	    open(): void;
	    close(): void;
	    disablePopupBackground(): void;
	}

}
declare module Coveo {
	class ResponsiveFacetColumn implements IResponsiveComponent {
	    coveoRoot: Dom;
	    ID: string;
	    static DEBOUNCE_SCROLL_WAIT: number;
	    protected dropdown: ResponsiveDropdown;
	    static init(responsiveComponentConstructor: any, root: HTMLElement, component: any, options: IResponsiveComponentOptions, ID: string): void;
	    constructor(coveoRoot: Dom, ID: string, options: IResponsiveComponentOptions, responsiveDropdown?: ResponsiveDropdown);
	    registerComponent(accept: Component): boolean;
	    needDropdownWrapper(): boolean;
	    handleResizeEvent(): void;
	    dismissFacetSearches(): void;
	}

}
declare module Coveo {
	/**
	 * A class which holds information and operation available on a single facet value returned by a {@link IGroupByRequest}.<br/>
	 * This class is used extensibely in the {@link Facet} component.
	 */
	class FacetValue {
	    value: string;
	    lookupValue: string;
	    occurrences: number;
	    computedField: number;
	    delta: number;
	    score: number;
	    selected: boolean;
	    excluded: boolean;
	    waitingForDelta: boolean;
	    reset(): void;
	    updateCountsFromNewValue(newValue: FacetValue): void;
	    cloneWithZeroOccurrences(): FacetValue;
	    cloneWithDelta(count: number, delta: number): FacetValue;
	    getFormattedCount(): string;
	    getFormattedComputedField(format: string): any;
	    static create(value: any): FacetValue;
	    static createFromValue(value: string): FacetValue;
	    static createFromGroupByValue(groupByValue: IGroupByValue): FacetValue;
	    static createFromFieldValue(fieldValue: IIndexFieldValue): FacetValue;
	}
	class FacetValues {
	    constructor(groupByResult?: IGroupByResult);
	    add(facetValue: FacetValue): void;
	    remove(value: string): void;
	    size(): number;
	    isEmpty(): boolean;
	    at(index: number): FacetValue;
	    get(value: string): FacetValue;
	    contains(value: string): boolean;
	    getAll(): FacetValue[];
	    getSelected(): FacetValue[];
	    getExcluded(): FacetValue[];
	    hasSelectedOrExcludedValues(): boolean;
	    reset(): void;
	    updateCountsFromNewValues(newValues: FacetValues): void;
	    updateDeltaWithFilteredFacetValues(filtered: FacetValues): void;
	    mergeWithUnfilteredFacetValues(unfiltered: FacetValues): void;
	    sortValuesDependingOnStatus(excludeLastIndex?: number): void;
	}

}
declare module Coveo {
	class DeviceUtils {
	    static getDeviceName(userAgent?: string): string;
	    static isAndroid(): boolean;
	    static isIos(): boolean;
	    static isMobileDevice(): boolean;
	    /**
	     * @deprecated
	     *
	     * Use ResponsiveComponents.isSmallScreenWidth() instead
	     */
	    static isSmallScreenWidth(): boolean;
	}

}
declare module Coveo {
	class StringUtils {
	    static javascriptEncode(value: string): string;
	    static htmlEncode(value: string): string;
	    static splice(value: string, index: number, remove: number, toAdd: string): string;
	    static removeMiddle(value: string, length: number, toAdd: string): string;
	    static regexEncode(value: string): string;
	    static stringToRegex(value: string, ignoreAccent?: boolean): string;
	    static wildcardsToRegex(value: string, ignoreAccent?: boolean): string;
	    static getHighlights(strToSearch: string, regexToFind: RegExp, dataHighlightGroupTerm: string): IHighlight[];
	    static encodeCarriageReturn(strToEncode: string): string;
	    static equalsCaseInsensitive(str1: string, str2: string): boolean;
	    static match(value: string, regex: RegExp): string[][];
	    static hashCode(str: string): string;
	    static latinize(str: string): string;
	    static capitalizeFirstLetter(str: string): string;
	    static accented: {
	        [letter: string]: RegExp;
	    };
	}

}
declare module Coveo {
	interface IFileTypeInfo {
	    icon: string;
	    caption: string;
	}
	class FileTypes {
	    static get(result: IQueryResult): IFileTypeInfo;
	    static getObjectType(objecttype: string): IFileTypeInfo;
	    static getFileType(filetype: string): IFileTypeInfo;
	    static getFileTypeCaptions(): {
	        [id: string]: string;
	    };
	}

}
declare module Coveo {
	class Options {
	    merge<T>(provided: T): T;
	    mergeDeep<T>(provided: T): T;
	}

}
declare module Coveo {
	/**
	 * The `IDateToStringOptions` interface describes a set of options to use when converting a standard Date object to a
	 * string using the [ `dateToString` ]{@link DateUtils.dateToString}, or the
	 * [ `dateTimeToString` ]{@link DateUtils.dateTimeToString} method from the [ `DateUtils` ]{@link DateUtils} class.
	 * The precedence orders for the options are:
	 * [ `useTodayYesterdayAndTomorrow` ]{@link IDateToStringOptions.useTodayYesterdayAndTomorrow}
	 * -> [ `useWeekdayIfThisWeek` ]{@link IDateToStringOptions.useWeekdayIfThisWeek}
	 * -> [ `omitYearIfCurrentOne` ]{@link IDateToStringOptions.omitYearIfCurrentOne}
	 * -> [ `useLongDateFormat` ]{@link IDateToStringOptions.useLongDateFormat}
	 * and [ `alwaysIncludeTime` ]{@link IDateToStringOptions.alwaysIncludeTime}
	 * -> [ `includeTimeIfThisWeek` ]{@link IDateToStringOptions.includeTimeIfThisWeek}
	 * -> [ `includeTimeIfToday` ]{@link IDateToStringOptions.includeTimeIfToday}.
	 */
	interface IDateToStringOptions {
	    /**
	     * Contains a standard Date object that specifies the current date and time.
	     *
	     * Default value is `undefined`.
	     */
	    now?: Date;
	    /**
	     * Specifies whether to convert the Date object to the localized version of `Today`, `Yesterday`, or `Tomorrow`,
	     * if possible. This option takes precedence over
	     * [ `useWeekdayIfThisWeek` ]{@link IDateToStringOptions.useWeekdayIfThisWeek}.
	     *
	     * **Examples**
	     *
	     * If [ `useTodayYesterdayAndTomorrow` ]{@link IDateToStringOptions.useTodayYesterdayAndTomorrow} is `true`,
	     * and [ `now` ]{@link IDateToStringOptions.now} contains a Date object equivalent to `March 8, 2017`, then:
	     *
	     *  - If the Date object to convert contains a value equivalent to `March 7, 2017`, the resulting string is the
	     *  localized version of `Yesterday`.
	     *
	     *  - If the Date object to convert contains a value equivalent to `March 8, 2017`, the resulting string is the
	     *  localized version of `Today`.
	     *
	     *  - If the Date object to convert contains a value equivalent to `March 9, 2017`, the resulting string is the
	     *  localized version of `Tomorrow`.
	     *
	     * Default value is `true`.
	     */
	    useTodayYesterdayAndTomorrow?: boolean;
	    /**
	     * Specifies whether to convert the Date object to the localized version of the corresponding day of the week,
	     * if the date to convert is part of the current week. This option takes precedence over
	     * [ `omitYearIfCurrentOne` ]{@link IDateToStringOptions.omitYearIfCurrentOne}.
	     *
	     * **Examples**
	     *
	     *  If [ `useWeekdayIfThisWeek` ]{@link IDateToStringOptions.useWeekdayIfThisWeek} is `true`
	     *  and [ `now` ]{@link IDateToStringOptions.now} contains a Date object equivalent to `Monday, March 8, 2017`, then:
	     *
	     *   - If the date to convert is equivalent to `Saturday, March 6, 2017`, the resulting string is the localized
	     *   version of `Last Saturday`.
	     *
	     *   - If the date to convert is equivalent to `Thursday, March 11, 2017`, the resulting string is the localized
	     *   version of `Next Thursday`.
	     *
	     * Default value is `true`.
	     */
	    useWeekdayIfThisWeek?: boolean;
	    /**
	     * Specifies whether to omit the year from the resulting string when converting the Date object, if the year
	     * is the current one. This option takes precedence over
	     * [ `useLongDateFormat` ]{@link IDateToStringOptions.useLongDateFormat}.
	     *
	     * **Examples**
	     *
	     *  - If the Date object to convert is equivalent to `September 22, 2017`, the resulting string does not contain
	     *  the year (e.g., `September 22`).
	     *
	     *  - If the Date object to convert is equivalent to `September 22, 2016`, the resulting string contains the year
	     *  (e.g., `September 22, 2016`).
	     *
	     * Default value is `true`.
	     */
	    omitYearIfCurrentOne?: boolean;
	    /**
	     * Specifies whether to format the resulting string in the long date format (e.g., `Friday, August 04, 2017`).
	     *
	     * Default value is `false`.
	     */
	    useLongDateFormat?: boolean;
	    /**
	     * Specifies whether to include the time in the resulting string when converting the Date object (e.g. `May 15, 4:17 PM`)
	     * if the date to convert is equivalent to [ `now` ]{@link IDateToStringOptions.now}.
	     *
	     * **Examples**
	     *
	     * If [ `includeTimeIfToday` ]{@link IDateToStringOptions.includeTimeIfToday} is `true`
	     * and [ `now` ]{@link IDateToStringOptions.now} contains a Date object equivalent to `Monday, March 8, 2017`, then:
	     *
	     *    - If the Date object to convert is equivalent to `2017/03/08 17:23:11`, the resulting string is `3/8/2017, 5:23 PM`.
	     *
	     *    - If the Date object to convert is equivalent to `2017/03/09 17:23:11`, the resulting string is `3/9/2017`.
	     *
	     * Default value is `true`.
	     */
	    includeTimeIfToday?: boolean;
	    /**
	     * Specifies whether to include the time in the resulting string when converting the Date object (e.g. `May 15, 4:17 PM`)
	     * if the date to convert within a week from [ `now` ]{@link IDateToStringOptions.now}. This option takes precedence over
	     * [ `includeTimeIfToday` ]{@link IDateToStringOptions.includeTimeIfToday}.
	     *
	     * **Examples**
	     *
	     * If [ `includeTimeIfToday` ]{@link IDateToStringOptions.includeTimeIfToday} is `true`
	     * and [ `now` ]{@link IDateToStringOptions.now} contains a Date object equivalent to `Monday, March 8, 2017`, then:
	     *
	     *    - If the Date object to convert is equivalent to `2017/03/08 17:23:11`, the resulting string is `3/8/2017, 5:23 PM`.
	     *
	     *    - If the Date object to convert is equivalent to `2017/03/09 17:23:11`, the resulting string is `3/9/2017 ,5:23 PM`.
	     *
	     * Default value is `true`.
	     */
	    includeTimeIfThisWeek?: boolean;
	    /**
	     * Specifies whether to always include the time in the resulting string when converting the Date object (e.g. `May 15, 4:17 PM`)
	     * This option takes precedence over [ `includeTimeIfThisWeek` ]{@link IDateToStringOptions.includeTimeIfThisWeek}.
	     *
	     * **Example**
	     *
	     * If [ `includeTimeIfToday` ]{@link IDateToStringOptions.includeTimeIfToday} is `true`
	     * and [ `now` ]{@link IDateToStringOptions.now} contains a Date object equivalent to `Monday, March 8, 2017`, then:
	     *
	     *    - If the Date object to convert is equivalent to `2010/03/08 17:23:11`, the resulting string is `3/8/2010, 5:23 PM`.
	     *
	     * Default value is `false`.
	     */
	    alwaysIncludeTime?: boolean;
	    predefinedFormat?: string;
	}
	/**
	 * The `DateUtils` class exposes methods to convert strings, numbers and date objects to standard ISO 8601 Date objects,
	 * using the correct culture, language and format. It also offers methods to convert date objects to strings.
	 */
	class DateUtils {
	    static convertFromJsonDateIfNeeded(date: any): Date;
	    /**
	     * Tries to parse an argument of any type to a standard Date object.
	     * @param date The value to parse. Can be of any type (string, number, Date, etc.).
	     * @returns {any} The parsed Date object, or `Invalid Date` if the `date` argument was not recognized as a valid date.
	     */
	    static convertToStandardDate(date: any): Date;
	    static setLocale(): void;
	    /**
	     * Creates a string from a Date object. The resulting string is in the format required for queries.
	     * @param date The Date object to create a string from.
	     * @returns {string} A string corresponding to the `date` argument value, in the `YYYY/MM/DD` format.
	     */
	    static dateForQuery(date: Date): string;
	    /**
	     * Creates a cropped version of a Date object. The resulting object contains no time information.
	     * @param date The original Date object to create a cropped Date object from.
	     * @returns {Date} A cropped Date object corresponding to the `date` argument value, excluding its time information.
	     */
	    static keepOnlyDatePart(date: Date): Date;
	    /**
	     * Creates an offset version of a Date object. The offset is counted in days.
	     * @param date The original Date object to create an offset Date object from.
	     * @param offset The number of days to add to (or subtract from) the `date` argument.
	     * @returns {Date} An offset Date object corresponding to the `date` argument value plus the `offset` value.
	     */
	    static offsetDateByDays(date: Date, offset: number): Date;
	    /**
	     * Creates a string from a Date object. The resulting string is formatted according to a set of options.
	     * This method calls [ `keepOnlyDatePart` ]{@link DateUtils.keepOnlyDatePart} to remove time information from the date.
	     * If you need to create a timestamp, use the [ `dateTimeToString` ]{@link DateUtils.dateTimeToString} method instead.
	     * @param date The Date object to create a string from.
	     * @param options The set of options to apply when formatting the resulting string. If you do not specify a value for
	     * this parameter, the method uses a default set of options.
	     * @returns {string} A date string corresponding to the `date` argument value, formatted according to the specified `options`.
	     */
	    static dateToString(date: Date, options?: IDateToStringOptions): string;
	    /**
	     * Creates a string from a Date object. The string corresponds to the time information of the Date object.
	     * @param date The Date object to create a string from.
	     * @param options The set of options to apply when formatting the resulting string. If you do not specify a
	     * value for this parameter, the method uses a default set of options.
	     * @returns {string} A string containing the time information of the `date` argument, and formatted according to the specified `options`.
	     */
	    static timeToString(date: Date, options?: IDateToStringOptions): string;
	    /**
	     * Creates a string from a Date object. The resulting string is formatted according to a set of options.
	     * This method calls [ `timeToString` ]{@link DateUtils.timeToString} to add time information to the date.
	     * If you need to create a date string without a timestamp, use the [ `dateToString` ]{@link DateUtils.dateToString} method instead.
	     * @param date The date object to create a string from.
	     * @param options The set of options to apply when formatting the resulting string. If you do not specify a value for
	     * this parameter, the method uses a default set of options.
	     * @returns {string} A date string corresponding to the `date` argument value, formatted according to the specified `options`.
	     */
	    static dateTimeToString(date: Date, options?: IDateToStringOptions): string;
	    /**
	     * Creates a string from a number. The resulting string is the localized name of the month that corresponds
	     * to this number (e.g., `0` results in the localized version of `January`).
	     * @param month The number to create a string from. Minimum value is `0` (which corresponds to `January`). Maximum
	     * value is `11` (which corresponds to `December`).
	     * @returns {string} A string whose value is the localized name of the corresponding `month`.
	     */
	    static monthToString(month: number): string;
	    /**
	     * Validates whether a value is an instance of Date.
	     * @param date The value to verify.
	     * @returns {boolean} `true` if the `date` argument is an instance of Date; `false` otherwise.
	     */
	    static isValid(date: any): boolean;
	    /**
	     * Creates a string from two Date objects. The resulting string corresponds to the amount of time between those two dates.
	     * @param from The Date object which contains the "oldest" value.
	     * @param to The Date object which contains the "newest" value.
	     * @returns {any} A string whose value corresponds to the amount of time between `from` and `to`,
	     * or an empty string if either argument was undefined.
	     */
	    static timeBetween(from: Date, to: Date): string;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	class FacetUtils {
	    static getRegexToUseForFacetSearch(value: string, ignoreAccent: boolean): RegExp;
	    static getValuesToUseForSearchInFacet(original: Facet): string[];
	    static buildFacetSearchPattern(values: string[]): string;
	    static needAnotherFacetSearch(currentSearchLength: number, newSearchLength: number, oldSearchLength: number, desiredSearchLength: number): boolean;
	    static addNoStateCssClassToFacetValues(facet: Facet, container: HTMLElement): void;
	    static tryToGetTranslatedCaption(field: string, value: string): string;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	class FacetSearchParameters {
	    facet: Facet;
	    nbResults: number;
	    ignoreAccents: boolean;
	    valueToSearch: string;
	    alwaysInclude: string[];
	    alwaysExclude: string[];
	    sortCriteria: string;
	    fetchMore: boolean;
	    constructor(facet: Facet);
	    setValueToSearch(value: string): this;
	    excludeCurrentlyDisplayedValuesInSearch(searchResults: HTMLElement): void;
	    getGroupByRequest(): IGroupByRequest;
	    getQuery(): IQuery;
	}

}
declare module Coveo {
	/// <reference path="../ui/Facet/Facet.d.ts" />
	class FacetQueryController {
	    facet: Facet;
	    expressionToUseForFacetSearch: string;
	    basicExpressionToUseForFacetSearch: string;
	    advancedExpressionToUseForFacetSearch: string;
	    constantExpressionToUseForFacetSearch: string;
	    lastGroupByRequestIndex: number;
	    lastGroupByRequest: IGroupByRequest;
	    lastGroupByResult: IGroupByResult;
	    constructor(facet: Facet);
	    /**
	     * Reset the expression for the facet search, used when a new query is triggered
	     */
	    prepareForNewQuery(): void;
	    /**
	     * Compute the filter expression that the facet need to output for the query
	     * @returns {string}
	     */
	    computeOurFilterExpression(): string;
	    /**
	     * Build the group by request for the facet, and insert it in the query builder
	     * @param queryBuilder
	     */
	    putGroupByIntoQueryBuilder(queryBuilder: QueryBuilder): void;
	    /**
	     * Search inside the facet, using a group by request
	     * @param params
	     * @param oldLength Optional params, used by the search method to call itself recursively to fetch all required values
	     * @returns {Promise|Promise<T>}
	     */
	    search(params: FacetSearchParameters, oldLength?: number): Promise<IIndexFieldValue[]>;
	    fetchMore(numberOfValuesToFetch: number): Promise<IQueryResults>;
	    searchInFacetToUpdateDelta(facetValues: FacetValue[]): Promise<IQueryResults>;
	    protected createGroupByAllowedValues(): string[];
	    protected getAllowedValuesFromSelected(): FacetValue[];
	    protected createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): IGroupByRequest;
	}

}
declare module Coveo {
	/**
	 * The bindings, or environment in which each component inside the {@link ResultList} exists.
	 */
	interface IResultsComponentBindings extends IComponentBindings {
	    resultElement: HTMLElement;
	}

}
declare module Coveo {
	class DomUtils {
	    static getPopUpCloseButton(captionForClose: string, captionForReminder: string): string;
	    static getBasicLoadingAnimation(): HTMLDivElement;
	    static highlightElement(initialString: string, valueToSearch: string): string;
	    static getLoadingSpinner(): HTMLElement;
	    static getModalBoxHeader(title: string): Dom;
	    static getQuickviewHeader(result: IQueryResult, options: {
	        showDate: boolean;
	        title: string;
	    }, bindings: IResultsComponentBindings): Dom;
	    static getCurrentScript(): HTMLScriptElement;
	}

}
declare module Coveo {
	class ValueElementRenderer {
	    facet: Facet;
	    facetValue: FacetValue;
	    listItem: HTMLElement;
	    label: HTMLElement;
	    checkbox: HTMLElement;
	    stylishCheckbox: HTMLElement;
	    valueCaption: HTMLElement;
	    valueCount: HTMLElement;
	    icon: HTMLElement;
	    excludeIcon: HTMLElement;
	    computedField: HTMLElement;
	    constructor(facet: Facet, facetValue: FacetValue);
	    withNo(element: HTMLElement[]): ValueElementRenderer;
	    withNo(element: HTMLElement): ValueElementRenderer;
	    build(): ValueElementRenderer;
	    setCssClassOnListValueElement(): void;
	    protected buildExcludeIcon(): HTMLElement;
	    protected buildValueComputedField(): HTMLElement;
	    protected buildValueCheckbox(): HTMLElement;
	    protected buildValueStylishCheckbox(): HTMLElement;
	    protected buildValueIcon(): HTMLElement;
	    protected getValueIcon(): string;
	    protected buildValueIconFromSprite(): HTMLElement;
	    protected buildValueCaption(): HTMLElement;
	    protected buildValueCount(): HTMLElement;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	interface IValueElementKlass {
	    new (facet: Facet, facetValue: FacetValue): ValueElement;
	}
	interface IValueElementEventsBinding {
	    displayNextTime: boolean;
	    pinFacet: boolean;
	    omniboxObject?: IPopulateOmniboxObject;
	}
	class ValueElement {
	    facet: Facet;
	    facetValue: FacetValue;
	    onSelect: (elem: ValueElement, cause: IAnalyticsActionCause) => void;
	    onExclude: (elem: ValueElement, cause: IAnalyticsActionCause) => void;
	    renderer: ValueElementRenderer;
	    constructor(facet: Facet, facetValue: FacetValue, onSelect?: (elem: ValueElement, cause: IAnalyticsActionCause) => void, onExclude?: (elem: ValueElement, cause: IAnalyticsActionCause) => void);
	    build(): ValueElement;
	    bindEvent(eventBindings: IValueElementEventsBinding): void;
	    select(): void;
	    unselect(): void;
	    exclude(): void;
	    unexclude(): void;
	    toggleExcludeWithUA(): void;
	    protected handleSelectValue(eventBindings: IValueElementEventsBinding): void;
	    protected handleExcludeClick(eventBindings: IValueElementEventsBinding): void;
	    protected handleEventForExcludedValueElement(eventBindings: IValueElementEventsBinding): void;
	    protected handleEventForValueElement(eventBindings: IValueElementEventsBinding): void;
	    protected handleEventForCheckboxChange(eventBindings: IValueElementEventsBinding): void;
	    protected omniboxCloseEvent(eventArg: IPopulateOmniboxObject): void;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	interface IFacetValueElementKlass {
	    new (facet: Facet, facetValue: FacetValue, displayNextTime?: boolean): FacetValueElement;
	}
	class FacetValueElement extends ValueElement {
	    facet: Facet;
	    facetValue: FacetValue;
	    keepDisplayedValueNextTime: boolean;
	    constructor(facet: Facet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
	    bindEvent(): void;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	interface IFacetSearchValuesListKlass {
	    new (facet: Facet, facetValueElementKlass: IFacetValueElementKlass): FacetSearchValuesList;
	}
	class FacetSearchValuesList {
	    facet: Facet;
	    facetValueElementKlass: IFacetValueElementKlass;
	    constructor(facet: Facet, facetValueElementKlass: IFacetValueElementKlass);
	    build(facetValues: FacetValue[]): HTMLElement[];
	}

}
declare module Coveo {
	interface IFacetSettingsKlass {
	    new (sorts: string[], facet: Facet): FacetSettings;
	}
	interface IFacetState {
	    included: string[];
	    excluded: string[];
	    operator: string;
	}
	/**
	 * Handle the rendering of the {@link Facet} settings menu (typically the ... in the facet header).
	 */
	class FacetSettings extends FacetSort {
	    sorts: string[];
	    facet: Facet;
	    loadedFromSettings: {
	        [attribute: string]: any;
	    };
	    constructor(sorts: string[], facet: Facet);
	    /**
	     * Build the menu, hook click events.
	     * @returns {HTMLElement}
	     */
	    build(): HTMLElement;
	    /**
	     * Restore the facet state from local storage, and apply it in the query state model.
	     */
	    loadSavedState(): void;
	    /**
	     * Take the current state of the facet and save it in the local storage.
	     */
	    saveState(): void;
	    /**
	     * Close the settings menu
	     */
	    close(): void;
	    /**
	     * Open the settings menu
	     */
	    open(): void;
	    getCurrentDirectionItem(directionSection?: HTMLElement[]): HTMLElement;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	/// <reference path="FacetSettings.d.ts" />
	interface IFacetSortKlass {
	    new (sorts: string[], facet: Facet): FacetSort;
	}
	interface IFacetSortDescription {
	    label: string;
	    directionToggle: boolean;
	    description: string;
	    name: string;
	    relatedSort?: string;
	}
	class FacetSort {
	    facet: Facet;
	    static availableSorts: {
	        [name: string]: IFacetSortDescription;
	    };
	    enabledSorts: IFacetSortDescription[];
	    activeSort: IFacetSortDescription;
	    customSortDirection: string;
	    constructor(sorts: string[], facet: Facet);
	}

}
declare module Coveo {
	class FacetValuesOrder {
	    facet: Facet;
	    facetSort: FacetSort;
	    constructor(facet: Facet, facetSort: FacetSort);
	    reorderValues(facetValues: IIndexFieldValue[]): IIndexFieldValue[];
	    reorderValues(facetValues: FacetValue[]): FacetValue[];
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	/**
	 * Used by the {@link Facet} component to render and handle the facet search part of each facet.
	 */
	class FacetSearch {
	    facet: Facet;
	    facetSearchValuesListKlass: IFacetSearchValuesListKlass;
	    currentlyDisplayedResults: string[];
	    searchResults: HTMLElement;
	    search: HTMLElement;
	    constructor(facet: Facet, facetSearchValuesListKlass: IFacetSearchValuesListKlass, root: HTMLElement);
	    /**
	     * Build the search component and return an `HTMLElement` which can be appended to the {@link Facet}.
	     * @returns {HTMLElement}
	     */
	    build(): HTMLElement;
	    /**
	     * Position the search results at the footer of the facet.
	     */
	    positionSearchResults(nextTo?: HTMLElement): void;
	    /**
	     * Dismiss the search results
	     */
	    completelyDismissSearch(): void;
	    /**
	     * Trigger a new facet search, and display the results.
	     * @param params
	     */
	    triggerNewFacetSearch(params: FacetSearchParameters): void;
	    /**
	     * Trigger the event associated with the focus of the search input.
	     */
	    focus(): void;
	    protected buildParamsForExcludingCurrentlyDisplayedValues(): FacetSearchParameters;
	    getValueInInputForFacetSearch(): string;
	    protected selectAllValuesMatchingSearch(): void;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	class FacetValuesList {
	    facet: Facet;
	    facetValueElementKlass: IFacetValueElementKlass;
	    valueContainer: HTMLElement;
	    constructor(facet: Facet, facetValueElementKlass: IFacetValueElementKlass);
	    build(): HTMLElement;
	    getAllCurrentlyDisplayed(): ValueElement[];
	    getAll(): ValueElement[];
	    getAllFacetValue(): FacetValue[];
	    get(value: FacetValue): ValueElement;
	    get(value: string): ValueElement;
	    select(value: FacetValue): ValueElement;
	    select(value: string): ValueElement;
	    unselect(value: FacetValue): ValueElement;
	    unselect(value: string): ValueElement;
	    exclude(value: FacetValue): ValueElement;
	    exclude(value: string): ValueElement;
	    unExclude(value: FacetValue): ValueElement;
	    unExclude(value: string): ValueElement;
	    toggleSelect(value: FacetValue): ValueElement;
	    toggleSelect(value: string): ValueElement;
	    toggleExclude(value: FacetValue): ValueElement;
	    toggleExclude(value: string): ValueElement;
	    rebuild(numberOfValues: number): void;
	    protected getValuesToBuildWith(): FacetValue[];
	}

}
declare module Coveo {
	/// <reference path="../ui/FacetSlider/FacetSlider.d.ts" />
	class FacetSliderQueryController {
	    facet: FacetSlider;
	    graphGroupByQueriesIndex: number;
	    lastGroupByRequestIndex: number;
	    groupByRequestForFullRange: number;
	    constructor(facet: FacetSlider);
	    prepareForNewQuery(): void;
	    putGroupByIntoQueryBuilder(queryBuilder: QueryBuilder): void;
	    computeOurFilterExpression(boundary?: number[]): string;
	}

}
declare module Coveo {
	interface IGraphValueSelectedArgs {
	    start: any;
	    end: any;
	    value: any;
	}
	class SliderEvents {
	    static startSlide: string;
	    static duringSlide: string;
	    static endSlide: string;
	    static graphValueSelected: string;
	}

}
declare module Coveo {
	interface IStartSlideEventArgs {
	    slider: Slider;
	    button: SliderButton;
	}
	interface IDuringSlideEventArgs {
	    slider: Slider;
	    button: SliderButton;
	}
	interface IEndSlideEventArgs {
	    slider: Slider;
	    button: SliderButton;
	}
	interface ISliderGraphData {
	    start: any;
	    y: number;
	    end: any;
	    isDate?: boolean;
	}
	interface ISliderOptions {
	    start?: any;
	    end?: any;
	    excludeOuterBounds?: boolean;
	    steps?: number;
	    getSteps?: (start: number, end: number) => number[];
	    rangeSlider?: boolean;
	    displayAsValue?: {
	        enable?: boolean;
	        unitSign?: string;
	        separator?: string;
	    };
	    displayAsPercent?: {
	        enable?: boolean;
	        separator?: string;
	    };
	    valueCaption?: (values: number[]) => string;
	    percentCaption?: (percent: number[]) => string;
	    dateFormat?: string;
	    document?: Document;
	    graph?: {
	        steps?: number;
	        animationDuration?: number;
	        margin?: {
	            top?: number;
	            bottom?: number;
	            left?: number;
	            right?: number;
	        };
	    };
	    dateField?: boolean;
	    rounded?: number;
	}
	class Slider {
	    element: HTMLElement;
	    options: ISliderOptions;
	    root: HTMLElement;
	    steps: number[];
	    currentValues: number[];
	    constructor(element: HTMLElement, options: ISliderOptions, root: HTMLElement);
	    onMoving(): void;
	    initializeState(values?: number[]): void;
	    getPosition(): number[];
	    getPercentPosition(): number[];
	    getValues(): any[];
	    getCaptionFromValue(values: number[]): string;
	    getCaption(): string;
	    setValues(values: number[]): void;
	    drawGraph(data?: ISliderGraphData[]): void;
	}
	class SliderButton {
	    slider: Slider;
	    leftBoundary: number;
	    rightBoundary: number;
	    element: HTMLElement;
	    constructor(slider: Slider, which: number);
	    build(): HTMLElement;
	    toBeginning(): void;
	    toEnd(): void;
	    setValue(value: number): void;
	    getPosition(): number;
	    getPercent(position?: number): number;
	    getValue(): any;
	    fromValueToPercent(value: number): number;
	    fromPositionToValue(position: number): any;
	    fromValueToPosition(value: number): number;
	}

}
declare module Coveo {
	interface ISearchAlertsEventArgs {
	    subscription: ISubscription;
	    dom?: HTMLElement;
	}
	interface ISearchAlertsFailEventArgs {
	    dom?: HTMLElement;
	}
	interface ISearchAlertsPopulateMessageEventArgs {
	    text: Array<string | ISearchAlertsPopulateMessageText>;
	}
	interface ISearchAlertsPopulateMessageText {
	    lineThrough: boolean;
	    value: string;
	}
	class SearchAlertsEvents {
	    static searchAlertsCreated: string;
	    static searchAlertsDeleted: string;
	    static searchAlertsFail: string;
	    static searchAlertsPopulateMessage: string;
	}

}
declare module Coveo {
	class ResponsiveFacetSlider extends ResponsiveFacetColumn {
	    coveoRoot: Dom;
	    ID: string;
	    static init(root: HTMLElement, component: any, options: IResponsiveComponentOptions): void;
	    constructor(coveoRoot: Dom, ID: string, options: IResponsiveComponentOptions, responsiveDropdown?: ResponsiveDropdown);
	    registerComponent(accept: Component): boolean;
	    drawFacetSliderGraphs(): void;
	}

}
declare module Coveo {
	/// <reference path="../Facet/FacetHeader.d.ts" />
	/// <reference path="../../controllers/FacetSliderQueryController.d.ts" />
	interface IFacetSliderOptions extends ISliderOptions {
	    dateField?: boolean;
	    queryOverride?: string;
	    id?: string;
	    field?: IFieldOption;
	    title?: string;
	    enableResponsiveMode?: boolean;
	    responsiveBreakpoint?: number;
	    dropdownHeaderLabel?: string;
	}
	/**
	 * The `FacetSlider` component creates a facet which contains a slider widget that allows the end user to filter results
	 * based on a range of numerical values (e.g., a date range, a price range, etc.).
	 *
	 * **Note:**
	 * > This component does **not** inherit from the [`Facet`]{@link Facet} component. Consequently, it does not offer the
	 * > same configuration options. Moreover, some of the `FacetSlider` options (see
	 * > [`getSteps`]{@link FacetSlider.options.getSteps} and [`valueCaption`]{@link FacetSlider.options.valueCaption})
	 * > cannot be configured as `data-` attributes in the markup. If you wish to configure those options, you must either
	 * > do so in the [`init`]{@link init} call of your search interface (see
	 * > [Components - Passing Component Options in the init Call](https://developers.coveo.com/x/PoGfAQ#Components-PassingComponentOptionsintheinitCall)),
	 * > or before the `init` call, using the `options` top-level function (see
	 * > [Components - Passing Component Options Before the init Call](https://developers.coveo.com/x/PoGfAQ#Components-PassingComponentOptionsBeforetheinitCall)).
	 */
	class FacetSlider extends Component {
	    element: HTMLElement;
	    options: IFacetSliderOptions;
	    /**
	     * The component options
	     * @componentOptions
	     */
	    static options: IFacetSliderOptions;
	    static ID: string;
	    static doExport: () => void;
	    static DEBOUNCED_RESIZE_DELAY: number;
	    startOfSlider: number;
	    endOfSlider: number;
	    initialStartOfSlider: number;
	    initialEndOfSlider: number;
	    facetQueryController: FacetSliderQueryController;
	    facetHeader: FacetHeader;
	    onResize: EventListener;
	    /**
	     * Creates a new `FacetSlider` component. Binds multiple query events as well.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `FacetSlider` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param slider
	     */
	    constructor(element: HTMLElement, options: IFacetSliderOptions, bindings?: IComponentBindings, slider?: Slider);
	    createDom(): void;
	    disable(): void;
	    /**
	     * Resets the `FacetSlider` (meaning that you need to set the range value as inactive).
	     */
	    reset(): void;
	    /**
	     * Gets the current selection in the slider.
	     *
	     * **Note:**
	     * > This method returns an array of number for selected date values. These numbers represent a number of milliseconds
	     * > before or after January 1, 1970. Therefore, you can use these numbers to instantiate standard JavaScript Date
	     * > objects.
	     *
	     * @returns {any} An array of number containing the first and last selected values, if possible. An array containing
	     * two `undefined` values otherwise.
	     */
	    getSelectedValues(): number[];
	    /**
	     * Sets the selected values in the slider.
	     *
	     * **Note:**
	     * > You must set date values with numbers representing a number of milliseconds before or after January 1, 1970. You
	     * > can easily extract such numbers from standard JavaScript Date objects.
	     *
	     * @param values [start, end] An array containing the first and last values to select in the slider.
	     */
	    setSelectedValues(values: number[]): void;
	    /**
	     * Indicates whether the `FacetSlider` is active. An active `FacetSlider` outputs an expression in the query when a
	     * search is performed.
	     * @returns {boolean} `true` if the FacetSlider is active; `false` otherwise.
	     */
	    isActive(): boolean;
	    getSliderBoundaryForQuery(): number[];
	    drawDelayedGraphData(): void;
	    isSimpleSliderConfig(): boolean;
	    hasAGraph(): boolean;
	}

}
declare module Coveo {
	interface IFacetHeaderOptions {
	    facetElement: HTMLElement;
	    facet?: Facet;
	    title: string;
	    field: string;
	    enableClearElement: boolean;
	    enableCollapseElement: boolean;
	    icon?: string;
	    facetSlider?: FacetSlider;
	    settingsKlass?: IFacetSettingsKlass;
	    sortKlass?: IFacetSortKlass;
	    availableSorts?: string[];
	}
	class FacetHeader {
	    options: IFacetHeaderOptions;
	    element: HTMLElement;
	    iconElement: HTMLElement;
	    waitElement: HTMLElement;
	    collapseElement: HTMLElement;
	    expandElement: HTMLElement;
	    operatorElement: HTMLElement;
	    eraserElement: HTMLElement;
	    settings: FacetSettings;
	    sort: FacetSort;
	    constructor(options: IFacetHeaderOptions);
	    build(): HTMLElement;
	    switchToAnd(): void;
	    switchToOr(): void;
	    collapseFacet(): void;
	    expandFacet(): void;
	    updateOperatorQueryStateModel(): void;
	    buildEraser(): HTMLElement;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	interface IBreadcrumbValueElementKlass {
	    new (facet: Facet, facetValue: FacetValue): BreadcrumbValueElement;
	}
	class BreadcrumbValueElement {
	    facet: Facet;
	    facetValue: FacetValue;
	    constructor(facet: Facet, facetValue: FacetValue);
	    build(tooltip?: boolean): Dom;
	    getBreadcrumbTooltip(): string;
	}

}
declare module Coveo {
	class BreadcrumbValueList {
	    facet: Facet;
	    facetValues: FacetValue[];
	    breadcrumbValueElementKlass: IBreadcrumbValueElementKlass;
	    protected elem: HTMLElement;
	    constructor(facet: Facet, facetValues: FacetValue[], breadcrumbValueElementKlass: IBreadcrumbValueElementKlass);
	    build(): HTMLElement;
	    buildAsString(): string;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	interface IOmniboxValueElementKlass {
	    new (facet: Facet, facetValue: FacetValue, eventArg: IPopulateOmniboxObject, onSelect?: (elem: ValueElement, cause: IAnalyticsActionCause) => void, onExclude?: (elem: ValueElement, cause: IAnalyticsActionCause) => void): OmniboxValueElement;
	}
	class OmniboxValueElement extends ValueElement {
	    facet: Facet;
	    facetValue: FacetValue;
	    eventArg: IPopulateOmniboxObject;
	    constructor(facet: Facet, facetValue: FacetValue, eventArg: IPopulateOmniboxObject, onSelect?: (elem: ValueElement, cause: IAnalyticsActionCause) => void, onExclude?: (elem: ValueElement, cause: IAnalyticsActionCause) => void);
	    bindEvent(): void;
	}

}
declare module Coveo {
	/// <reference path="Facet.d.ts" />
	class OmniboxValuesList {
	    facet: Facet;
	    facetValues: FacetValue[];
	    omniboxObject: IPopulateOmniboxObject;
	    omniboxValueElementKlass: IOmniboxValueElementKlass;
	    constructor(facet: Facet, facetValues: FacetValue[], omniboxObject: IPopulateOmniboxObject, omniboxValueElementKlass: IOmniboxValueElementKlass);
	    build(): HTMLElement;
	}

}
declare module Coveo {
	interface IFacetOptions {
	    title?: string;
	    field?: IFieldOption;
	    isMultiValueField?: boolean;
	    numberOfValues?: number;
	    pageSize?: number;
	    sortCriteria?: string;
	    availableSorts?: string[];
	    injectionDepth?: number;
	    showIcon?: boolean;
	    useAnd?: boolean;
	    enableCollapse?: boolean;
	    enableTogglingOperator?: boolean;
	    enableMoreLess?: boolean;
	    valueCaption?: any;
	    lookupField?: IFieldOption;
	    enableFacetSearch?: boolean;
	    facetSearchDelay?: number;
	    facetSearchIgnoreAccents?: boolean;
	    numberOfValuesInFacetSearch?: number;
	    includeInBreadcrumb?: boolean;
	    includeInOmnibox?: boolean;
	    numberOfValuesInOmnibox?: number;
	    numberOfValuesInBreadcrumb?: number;
	    id?: string;
	    computedField?: IFieldOption;
	    computedFieldOperation?: string;
	    computedFieldFormat?: string;
	    computedFieldCaption?: string;
	    preservePosition?: boolean;
	    scrollContainer?: HTMLElement;
	    paddingContainer?: HTMLElement;
	    customSort?: string[];
	    enableSettings?: boolean;
	    enableSettingsFacetState?: boolean;
	    allowedValues?: string[];
	    headerIcon?: string;
	    valueIcon?: (facetValue: FacetValue) => string;
	    additionalFilter?: string;
	    dependsOn?: string;
	    enableResponsiveMode?: boolean;
	    responsiveBreakpoint?: number;
	    dropdownHeaderLabel?: string;
	}
	/**
	 * The `Facet` component displays a *facet* of the results for the current query. A facet is a list of values for a
	 * certain field occurring in the results, ordered using a configurable criteria (e.g., number of occurrences).
	 *
	 * The list of values is obtained using a [`GroupByRequest`]{@link IGroupByRequest} operation performed at the same time
	 * as the main query.
	 *
	 * The `Facet` component allows the end user to drill down inside a result set by restricting the result to certain
	 * field values. It also allows filtering out values from the facet itself, and can provide a search box to look for
	 * specific values inside larger sets.
	 *
	 * This is probably the most complex component in the Coveo JavaScript Search Framework and as such, it allows for many
	 * configuration options.
	 *
	 * See also the [`FacetRange`]{@link FacetRange} and [`HierarchicalFacet`]{@link HierarchicalFacet} components (which
	 * extend this component), and the [`FacetSlider`]{@link FacetSlider} component (which does not properly extend this
	 * component, but is very similar).
	 */
	class Facet extends Component {
	    element: HTMLElement;
	    options: IFacetOptions;
	    static ID: string;
	    static omniboxIndex: number;
	    static doExport: () => void;
	    /**
	     * The possible options for a facet
	     * @componentOptions
	     */
	    static options: IFacetOptions;
	    facetQueryController: FacetQueryController;
	    keepDisplayedValuesNextTime: boolean;
	    values: FacetValues;
	    currentPage: number;
	    numberOfValues: number;
	    firstQuery: boolean;
	    operatorAttributeId: string;
	    /**
	     * Renders and handles the facet **Search** part of the component.
	     */
	    facetSearch: FacetSearch;
	    /**
	     * Renders and handles the facet **Settings** part of the component
	     */
	    facetSettings: FacetSettings;
	    facetSort: FacetSort;
	    facetValuesList: FacetValuesList;
	    facetHeader: FacetHeader;
	    protected omniboxZIndex: any;
	    protected moreElement: HTMLElement;
	    protected lessElement: HTMLElement;
	    protected headerElement: HTMLElement;
	    protected footerElement: HTMLElement;
	    /**
	     * Creates a new `Facet` component. Binds multiple query events as well.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `Facet` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param facetClassId The ID to use for this facet (as `Facet` inherited from by other component
	     * (e.g., [`FacetRange`]{@link FacetRange}). Default value is `Facet`.
	     */
	    constructor(element: HTMLElement, options: IFacetOptions, bindings?: IComponentBindings, facetClassId?: string);
	    createDom(): void;
	    /**
	     * Selects a single value.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param value Can be a [`FacetValue`]{@link FacetValue} or a string (e.g., `selectValue('foobar')` or
	     * `selectValue(new FacetValue('foobar'))`).
	     */
	    selectValue(value: FacetValue): void;
	    selectValue(value: string): void;
	    /**
	     * Selects multiple values.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param values Can be an array of [`FacetValue`]{@link FacetValue} or an array of strings.
	     */
	    selectMultipleValues(values: FacetValue[]): void;
	    selectMultipleValues(values: string[]): void;
	    /**
	     * Deselects a single value.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param value Can be a [`FacetValue`]{@link FacetValue} or a string (e.g., `deselectValue('foobar')` or
	     * `deselectValue(new FacetValue('foobar'))`).
	     */
	    deselectValue(value: FacetValue): void;
	    deselectValue(value: string): void;
	    /**
	     * Deselects multiple values.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param values Can be an array of [`FacetValue`]{@link FacetValue} or an array of strings.
	     */
	    deselectMultipleValues(values: FacetValue[]): void;
	    deselectMultipleValues(values: string[]): void;
	    /**
	     * Excludes a single value.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param value Can be a [`FacetValue`]{@link FacetValue} or a string (e.g., `excludeValue('foobar')` or
	     * `excludeValue(new FacetValue('foobar'))`).
	     */
	    excludeValue(value: FacetValue): void;
	    excludeValue(value: string): void;
	    /**
	     * Excludes multiple values.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param values Can be an array of [`FacetValue`]{@link FacetValue} or an array of strings.
	     */
	    excludeMultipleValues(values: FacetValue[]): void;
	    excludeMultipleValues(values: string[]): void;
	    /**
	     * Unexcludes a single value.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param value Can be a [`FacetValue`]{@link FacetValue} or a string.
	     */
	    unexcludeValue(value: FacetValue): void;
	    unexcludeValue(value: string): void;
	    /**
	     * Unexcludes multiple values.
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param values Can be an array of [`FacetValue`]{@link FacetValue} or an array of strings.
	     */
	    unexcludeMultipleValues(values: FacetValue[]): void;
	    unexcludeMultipleValues(values: string[]): void;
	    /**
	     * Toggles the selection state of a single value (selects the value if it is not already selected; un-selects the
	     * value if it is already selected).
	     *
	     * Does not trigger a query automatically.
	     * @param value Can be a [`FacetValue`]{@link FacetValue} or a string.
	     */
	    toggleSelectValue(value: FacetValue): void;
	    toggleSelectValue(value: string): void;
	    /**
	     * Toggles the exclusion state of a single value (excludes the value if it is not already excluded; un-excludes the
	     * value if it is already excluded).
	     *
	     * Does not trigger a query automatically.
	     *
	     * @param value Can be a [`FacetValue`]{@link FacetValue} or a string.
	     */
	    toggleExcludeValue(value: FacetValue): void;
	    toggleExcludeValue(value: string): void;
	    /**
	     * Returns the currently displayed values as an array of strings.
	     *
	     * @returns {any[]} The currently displayed values.
	     */
	    getDisplayedValues(): string[];
	    /**
	     * Returns the currently displayed values as an array of [`FacetValue`]{@link FacetValue}.
	     *
	     * @returns {T[]} The currently displayed values.
	     */
	    getDisplayedFacetValues(): FacetValue[];
	    /**
	     * Returns the currently selected values as an array of strings.
	     * @returns {string[]} The currently selected values.
	     */
	    getSelectedValues(): string[];
	    /**
	     * Returns the currently excluded values as an array of strings.
	     * @returns {string[]} The currently excluded values.
	     */
	    getExcludedValues(): string[];
	    /**
	     * Resets the facet by un-selecting all values, un-excluding all values, and redrawing the facet.
	     */
	    reset(): void;
	    /**
	     * Switches the facet to `AND` mode.
	     *
	     * See the [`useAnd`]{@link Facet.options.useAnd}, and
	     * [`enableTogglingOperator`]{@link Facet.options.enableTogglingOperator} options.
	     */
	    switchToAnd(): void;
	    /**
	     * Switches the facet to `OR` mode.
	     *
	     * See the [`useAnd`]{@link Facet.options.useAnd}, and
	     * [`enableTogglingOperator`]{@link Facet.options.enableTogglingOperator} options.
	     */
	    switchToOr(): void;
	    /**
	     * Returns the endpoint for the facet.
	     * @returns {ISearchEndpoint} The endpoint for the Ffcet.
	     */
	    getEndpoint(): ISearchEndpoint;
	    /**
	     * Changes the sort parameter for the facet.
	     *
	     * See {@link Facet.options.availableSorts} for the list of possible values.
	     *
	     * Also triggers a new query.
	     *
	     * @param criteria The new sort parameter for the facet.
	     */
	    updateSort(criteria: string): void;
	    unfadeInactiveValuesInMainList(): void;
	    fadeInactiveValuesInMainList(delay: number): void;
	    /**
	     * Shows a waiting animation in the facet header (a spinner).
	     */
	    showWaitingAnimation(): void;
	    /**
	     * Hides the waiting animation in the facet header.
	     */
	    hideWaitingAnimation(): void;
	    processFacetSearchAllResultsSelected(facetValues: FacetValue[]): void;
	    pinFacetPosition(): void;
	    /**
	     * Returns the configured caption for the given [`FacetValue`]{@link FacetValue}.
	     *
	     * @param facetValue The `FacetValue` whose caption the method should return.
	     */
	    getValueCaption(facetValue: IIndexFieldValue): string;
	    getValueCaption(facetValue: FacetValue): string;
	    /**
	     * Shows the next page of results in the facet.
	     *
	     * See the [`enableMoreLess`]{@link Facet.options.enableMoreLess}, and [`pageSize`]{@link Facet.options.pageSize}
	     * options.
	     *
	     * Triggers a query if needed, or displays the already available values.
	     */
	    showMore(): void;
	    /**
	     * Shows less elements in the Facet (up to the original number of values).
	     *
	     * See the [`enableMoreLess`]{@link Facet.options.enableMoreLess}, and
	     * [`numberOfValues`]{@link Facet.options.numberOfValues} options.
	     */
	    showLess(): void;
	    /**
	     * Collapses the facet.
	     */
	    collapse(): void;
	    /**
	     * Expands the facet.
	     */
	    expand(): void;
	    triggerNewQuery(beforeExecuteQuery?: () => void): void;
	    protected handleDeferredQuerySuccess(data: IQuerySuccessEventArgs): void;
	    protected handlePopulateBreadcrumb(args: IPopulateBreadcrumbEventArgs): void;
	    protected handlePopulateSearchAlerts(args: ISearchAlertsPopulateMessageEventArgs): void;
	    protected initFacetQueryController(): void;
	    protected initFacetValuesList(): void;
	    protected initFacetSearch(): void;
	    protected facetValueHasChanged(): void;
	    protected updateAppearanceDependingOnState(): void;
	    protected initQueryEvents(): void;
	    protected initQueryStateEvents(): void;
	    protected initComponentStateEvents(): void;
	    protected initOmniboxEvents(): void;
	    protected initBreadCrumbEvents(): void;
	    protected initSearchAlertEvents(): void;
	    protected handleOmniboxWithStaticValue(eventArg: IPopulateOmniboxEventArgs): void;
	    protected processNewGroupByResults(groupByResult: IGroupByResult): void;
	    protected updateQueryStateModel(): void;
	    protected rebuildValueElements(): void;
	    protected updateSearchElement(moreValuesAvailable?: boolean): void;
	    protected updateMoreLess(lessElementIsShown?: boolean, moreValuesAvailable?: boolean): void;
	    protected handleClickMore(): void;
	    protected handleClickLess(): void;
	    protected triggerUpdateDeltaQuery(facetValues: FacetValue[]): void;
	    protected updateNumberOfValues(): void;
	    debugInfo(): any;
	}

}
declare module Coveo {
	class ResponsiveFacets extends ResponsiveFacetColumn {
	    static init(root: HTMLElement, component: any, options: IResponsiveComponentOptions): void;
	}

}
declare module Coveo {
	interface IResponsiveComponentOptions {
	    enableResponsiveMode?: boolean;
	    responsiveBreakpoint?: number;
	    dropdownHeaderLabel?: string;
	    initializationEventRoot?: Dom;
	}
	interface IResponsiveComponentConstructor {
	    new (root: Dom, ID: string, options: IResponsiveComponentOptions): IResponsiveComponent;
	}
	interface IResponsiveComponent {
	    ID: string;
	    handleResizeEvent(): void;
	    needDropdownWrapper?(): boolean;
	    registerComponent?(accept: Component): boolean;
	}
	class ResponsiveComponentsManager {
	    static DROPDOWN_HEADER_WRAPPER_CSS_CLASS: string;
	    static RESIZE_DEBOUNCE_DELAY: number;
	    resizeListener: any;
	    static register(responsiveComponentConstructor: IResponsiveComponentConstructor, root: Dom, ID: string, component: Component, options: IResponsiveComponentOptions): void;
	    constructor(root: Dom);
	    register(responsiveComponentConstructor: IResponsiveComponentConstructor, root: Dom, ID: string, component: Component, options: IResponsiveComponentOptions): void;
	    disableComponent(ID: string): void;
	}

}
declare module Coveo {
	class RecommendationDropdownContent implements IResponsiveDropdownContent {
	    element: Dom;
	    static OPENED_DROPDOWN_CSS_CLASS_NAME: string;
	    constructor(componentName: string, element: Dom, coveoRoot: Dom);
	    positionDropdown(): void;
	    hideDropdown(): void;
	    cleanUp(): void;
	}

}
declare module Coveo {
	class ResponsiveRecommendation implements IResponsiveComponent {
	    coveoRoot: Dom;
	    ID: string;
	    responsiveDropdown: ResponsiveDropdown;
	    static DROPDOWN_CONTAINER_CSS_CLASS_NAME: string;
	    static RESPONSIVE_BREAKPOINT: number;
	    recommendationRoot: Dom;
	    static init(root: HTMLElement, component: any, options: IResponsiveComponentOptions): void;
	    constructor(coveoRoot: Dom, ID: string, options: IResponsiveComponentOptions, responsiveDropdown?: ResponsiveDropdown);
	    handleResizeEvent(): void;
	    needDropdownWrapper(): boolean;
	}

}
declare module Coveo {
	class DefaultRecommendationTemplate extends Template {
	    instantiateToString(object?: IQueryResult): string;
	    instantiateToElement(object?: IQueryResult): Promise<HTMLElement>;
	}

}
declare module Coveo {
	interface IRecommendationQueryOptions {
	}
	class RecommendationQuery extends Component {
	    element: HTMLElement;
	    options: IRecommendationQueryOptions;
	    static ID: string;
	    /**
	     * The options for the RecommendationQuery component
	     * @componentOptions
	     */
	    static options: IRecommendationQueryOptions;
	    constructor(element: HTMLElement, options?: IRecommendationQueryOptions, bindings?: IComponentBindings);
	}

}
declare module Coveo {
	class PendingSearchAsYouTypeSearchEvent extends PendingSearchEvent {
	    root: HTMLElement;
	    endpoint: AnalyticsEndpoint;
	    templateSearchEvent: ISearchEvent;
	    sendToCloud: any;
	    delayBeforeSending: number;
	    beforeResolve: Promise<PendingSearchAsYouTypeSearchEvent>;
	    constructor(root: HTMLElement, endpoint: AnalyticsEndpoint, templateSearchEvent: ISearchEvent, sendToCloud: any);
	    protected handleDuringQuery(e: Event, args: IDuringQueryEventArgs): void;
	    sendRightNow(): void;
	    modifyCustomData(key: string, newData: any): void;
	    modifyEventCause(newCause: IAnalyticsActionCause): void;
	    stopRecording(): void;
	}

}
declare module Coveo {
	class LiveAnalyticsClient implements IAnalyticsClient {
	    endpoint: AnalyticsEndpoint;
	    rootElement: HTMLElement;
	    userId: string;
	    userDisplayName: string;
	    anonymous: boolean;
	    splitTestRunName: string;
	    splitTestRunVersion: string;
	    originLevel1: string;
	    sendToCloud: boolean;
	    isContextual: boolean;
	    originContext: string;
	    constructor(endpoint: AnalyticsEndpoint, rootElement: HTMLElement, userId: string, userDisplayName: string, anonymous: boolean, splitTestRunName: string, splitTestRunVersion: string, originLevel1: string, sendToCloud: boolean);
	    isActivated(): boolean;
	    getCurrentVisitId(): string;
	    getCurrentVisitIdPromise(): Promise<string>;
	    getCurrentEventCause(): string;
	    getCurrentEventMeta(): {
	        [key: string]: any;
	    };
	    logSearchEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    logSearchAsYouType<TMeta>(actionCause: IAnalyticsActionCause, meta?: TMeta): void;
	    logClickEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta, result: IQueryResult, element: HTMLElement): Promise<IAPIAnalyticsEventResponse>;
	    logCustomEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta, element: HTMLElement): Promise<IAPIAnalyticsEventResponse>;
	    getTopQueries(params: ITopQueries): Promise<string[]>;
	    sendAllPendingEvents(): void;
	    cancelAllPendingEvents(): void;
	    getPendingSearchEvent(): PendingSearchEvent;
	    warnAboutSearchEvent(): void;
	    setOriginContext(originContext: string): void;
	    protected getOriginLevel2(element: HTMLElement): string;
	}

}
declare module Coveo {
	class RecommendationAnalyticsClient extends LiveAnalyticsClient {
	    endpoint: AnalyticsEndpoint;
	    rootElement: HTMLElement;
	    userId: string;
	    userDisplayName: string;
	    anonymous: boolean;
	    splitTestRunName: string;
	    splitTestRunVersion: string;
	    originLevel1: string;
	    sendToCloud: boolean;
	    bindings: IComponentBindings;
	    constructor(endpoint: AnalyticsEndpoint, rootElement: HTMLElement, userId: string, userDisplayName: string, anonymous: boolean, splitTestRunName: string, splitTestRunVersion: string, originLevel1: string, sendToCloud: boolean, bindings: IComponentBindings);
	    logSearchEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    logClickEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta, result: IQueryResult, element: HTMLElement): Promise<IAPIAnalyticsEventResponse | IAPIAnalyticsEventResponse[]>;
	    protected getOriginLevel2(element: HTMLElement): string;
	}

}
declare module Coveo {
	/// <reference types="coveoanalytics" />
	interface IRecommendationOptions extends ISearchInterfaceOptions {
	    mainSearchInterface?: HTMLElement;
	    userContext?: string;
	    id?: string;
	    optionsToUse?: string[];
	    sendActionsHistory?: boolean;
	    hideIfNoResults?: boolean;
	    enableResponsiveMode?: boolean;
	    responsiveBreakpoint?: number;
	    dropdownHeaderLabel?: string;
	}
	/**
	 * The Recommendation component is a {@link SearchInterface} that displays recommendations typically based on user
	 * history.
	 *
	 * This component usually listens to the main SearchInterface. When the main SearchInterface generates a query, the
	 * Recommendation component generates another query to get the recommendations at the same time.
	 *
	 * To get history-based recommendations, you will likely want to include the `pageview` script in your page (see
	 * [coveo.analytics.js](https://github.com/coveo/coveo.analytics.js)). However, including this script is not mandatory.
	 * For instance, you could use the Recommendation component without the Coveo Machine Learning service to create a
	 * simple "recommended people" interface.
	 *
	 * It is possible to include this component inside another SearchInterface, but it is also possible to instantiate it as
	 * a "standalone" search interface, without even instantiating a main SearchInterface component. In any case, a
	 * Recommendation component always acts as a full-fledged search interface. Therefore, you can include any component
	 * inside the Recommendation component (Searchbox, Facet, Sort, etc.), just as you would inside the main SearchInterface
	 * component.
	 */
	class Recommendation extends SearchInterface implements IComponentBindings {
	    element: HTMLElement;
	    options: IRecommendationOptions;
	    analyticsOptions: {};
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the recommendation component
	     * @componentOptions
	     */
	    static options: IRecommendationOptions;
	    mainQuerySearchUID: string;
	    mainQueryPipeline: string;
	    historyStore: CoveoAnalytics.HistoryStore;
	    /**
	     * Creates a new Recommendation component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Recommendation component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time)
	     * @param _window
	     */
	    constructor(element: HTMLElement, options?: IRecommendationOptions, analyticsOptions?: {}, _window?: Window);
	    getId(): string;
	    enable(): void;
	    disable(): void;
	    hide(): void;
	    show(): void;
	}

}
declare module Coveo {
	class PublicPathUtils {
	    static detectPublicPath(): void;
	    /**
	     * Helper function to resolve the public path used to load the chunks relative to the Coveo script.
	     */
	    static getDynamicPublicPath(): string;
	    static configureRessourceRoot(path: string): void;
	    static reset(): void;
	}

}
declare module Coveo {
	/**
	 * Initialize the framework with a basic search interface. Calls {@link Initialization.initSearchInterface}.
	 *
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('init');</code>.
	 * @param element The root of the interface to initialize.
	 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType : true}}</code>).
	 * @returns {Promise<{elem: HTMLElement}>}
	 */
	function init(element: HTMLElement, options?: any): Promise<{
	    elem: HTMLElement;
	}>;
	/**
	 * Initialize the framework with a standalone search box. Calls {@link Initialize.initStandaloneSearchInterface}.
	 *
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('initSearchbox');</code>.
	 * @param element The root of the interface to initialize.
	 * @param searchPageUri The search page on which to redirect when there is a query.
	 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType : true}}</code>).
	 * @returns {Promise<{elem: HTMLElement}>}
	 */
	function initSearchbox(element: HTMLElement, searchPageUri: string, options?: any): Promise<{
	    elem: HTMLElement;
	}>;
	/**
	 * Initialize the framework with a recommendation interface. Calls {@link Initialization.initRecommendationInterface}.
	 *
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('initRecommendation');</code>.
	 * @param element The root of the interface to initialize.
	 * @param mainSearchInterface The search interface to link with the recommendation interface (see {@link Recommendation}).
	 * @param userContext The user context to pass with the query generated in the recommendation interface (see {@link Recommendation}).
	 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType: true}}</code>).
	 * @returns {Promise<{elem: HTMLElement}>}
	 */
	function initRecommendation(element: HTMLElement, mainSearchInterface?: HTMLElement, userContext?: {
	    [name: string]: any;
	}, options?: any): Promise<{
	    elem: HTMLElement;
	}>;
	/**
	 * Execute a standard query. Active component in the interface will react to events/ push data in the query / handle the query success or failure as needed.
	 *
	 * It triggers a standard query flow for which the standard component will perform their expected behavior.
	 *
	 * If you wish to only perform a query on the index to retrieve results (without the component reacting), look into {@link SearchInterface} instead.
	 *
	 * Calling this method is the same as calling {@link QueryController.executeQuery}.
	 *
	 * @param element The root of the interface to initialize.
	 * @returns {Promise<IQueryResults>}
	 */
	function executeQuery(element: HTMLElement): Promise<IQueryResults>;
	/**
	 * Perform operation on the state ({@link QueryStateModel} of the interface.<br/>
	 * Get the complete {@link QueryStateModel} object: <code>Coveo.state(element)</code><br/>.
	 * Get an attribute from the {@link QueryStateModel}: <code>Coveo.state(element, 'q')</code> Can be any attribute.<br/>
	 * Set an attribute on the {@link QueryStateModel}: <code>Coveo.state(element, 'q', 'foobar')</code>. Can be any attribute.<br/>
	 * Set multiple attribute on the {@link QueryStateModel}: <code>Coveo.state(element, {'q' : 'foobar' , sort : 'relevancy'})</code>. Can be any attribute.<br/>
	 * If using the jQuery extension, this is called using <code>$('#root').coveo('state');</code>.
	 * @param element The root of the interface for which to access the {@link QueryStateModel}.
	 * @param args
	 * @returns {any}
	 */
	function state(element: HTMLElement, ...args: any[]): any;
	/**
	 * Get the component bound on the given `HTMLElement`.
	 * @param element The `HTMLElement` for which to get the component instance.
	 * @param componentClass If multiple components are bound to a single `HTMLElement`, you need to specify which components you wish to get.
	 * @param noThrow By default, the GET method will throw if there is no component bound, or if there are multiple component and no `componentClass` is specified. This deletes the error if set to true.
	 * @returns {Component}
	 */
	function get(element: HTMLElement, componentClass?: any, noThrow?: boolean): BaseComponent;
	function result(element: HTMLElement, noThrow?: boolean): IQueryResult;
	/**
	 * Log a custom event on the Coveo Usage Analytics service.
	 * @param element The root of the interface for which to log analytics events.
	 * @param customEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 */
	function logCustomEvent(element: HTMLElement, customEventCause: IAnalyticsActionCause, metadata: IStringMap<string>): void;
	/**
	 * Log a `SearchEvent` on the Coveo Usage Analytics service.
	 * @param element The root of the interface for which to log analytics events.
	 * @param searchEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 */
	function logSearchEvent(element: HTMLElement, searchEventCause: IAnalyticsActionCause, metadata: IStringMap<string>): void;
	/**
	 * Log a `SearchAsYouTypeEvent` on the Coveo Usage Analytics service.<br/>
	 * It is a bit different from a standard search event, as it will wait 5 seconds before sending the final `SearchAsYouType` event.
	 * @param element The root of the interface for which to log analytics events.
	 * @param searchAsYouTypeEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 */
	function logSearchAsYouTypeEvent(element: HTMLElement, searchAsYouTypeEventCause: IAnalyticsActionCause, metadata: IStringMap<string>): void;
	/**
	 * Log a `ClickEvent` on the Coveo Usage Analytics service.
	 * @param element The root of the interface for which to log analytics events.
	 * @param clickEventCause The cause of the event.
	 * @param metadata The metadata associated with the event (JSON key value).
	 * @param result The result that was clicked.
	 */
	function logClickEvent(element: HTMLElement, clickEventCause: IAnalyticsActionCause, metadata: IStringMap<any>, result: IQueryResult): void;
	/**
	 * Pass options to the framework, before it is initialized ({@link init}).<br/>
	 * All the options passed with this calls will be merged together on initialization.
	 * @param element The root of the interface for which you wish to set options.
	 * @param optionsToSet JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType: true}}</code>).
	 */
	function options(element: HTMLElement, optionsToSet?: any): void;
	/**
	 * Patch the given `methodName` on an instance of a component bound to an `HTMLElement` with a new handler.
	 * @param element
	 * @param methodName
	 * @param handler
	 */
	function patch(element: HTMLElement, methodName: string, handler: (...args: any[]) => any): void;
	function initBox(element: HTMLElement, ...args: any[]): void;
	function nuke(element: HTMLElement): void;
	/**
	 * Sets the path from where the chunks used for lazy loading will be loaded. In some cases, in IE11, we cannot automatically detect it, use this instead.
	 * @param path This should be the path of the Coveo script. It should also have a trailing slash.
	 */
	function configureRessourceRoot(path: string): void;
	/**
	 * Asynchronously loads a module, or chunk.
	 *
	 * This is especially useful when you want to extend a base component, and make sure the lazy component loading process
	 * recognizes it (see [Lazy Versus Eager Component Loading](https://developers.coveo.com/x/YBgvAg)).
	 *
	 * **Example:**
	 *
	 * ```typescript
	 * function lazyCustomFacet() {
	 *   return Coveo.load<Facet>('Facet').then((Facet) => {
	 *     class CustomFacet extends Facet {
	 *       [ ... ]
	 *     };
	 *     Coveo.Initialization.registerAutoCreateComponent(CustomFacet);
	 *     return CustomFacet;
	 *   });
	 * };
	 *
	 * Coveo.LazyInitialization.registerLazyComponent('CustomFacet', lazyCustomFacet);
	 * ```
	 *
	 * You can also use this function to assert a component is fully loaded in your page before executing any code relating
	 * to it.
	 *
	 * **Example:**
	 *
	 * > You could do `Coveo.load('Searchbox').then((Searchbox) => {})` to load the [`Searchbox`]{@link Searchbox}
	 * > component, if it is not already loaded in your search page.
	 *
	 * @param id The identifier of the module you wish to load. In the case of components, this identifier is the component
	 * name (e.g., `Facet`, `Searchbox`).
	 * @returns {Promise} A Promise of the module, or chunk.
	 */
	function load<T>(id: string): Promise<T>;

}
declare module Coveo {
	/**
	 * Represent the initialization parameters required to init a new component.
	 */
	interface IInitializationParameters {
	    options: any;
	    result?: IQueryResult;
	    bindings: IComponentBindings;
	}
	interface IInitResult {
	    initResult: Promise<boolean>;
	    isLazyInit: boolean;
	}
	/**
	 * The main purpose of this class is to initialize the framework (a.k.a the code executed when calling `Coveo.init`).<br/>
	 * It's also in charge or registering the available components, as well as the method that we expost to the global Coveo scope.<br/>
	 * For example, the `Coveo.executeQuery` function will be registed in this class by the {@link QueryController}.
	 */
	class Initialization {
	    static componentsFactory: (elements: HTMLElement[], componentClassId: string, initParameters: IInitializationParameters) => {
	        factory: () => Promise<Component>[] | void;
	        isLazyInit: boolean;
	    };
	    static registeredComponents: String[];
	    /**
	     * Register a new set of options for a given element.<br/>
	     * When the element is eventually initialized as a component, those options will be used / merged to create the final option set to use for this component.<br/>
	     * Note that this function should not normally be called directly, but instead using the global `Coveo.options` function
	     * @param element
	     * @param options
	     */
	    static registerDefaultOptions(element: HTMLElement, options: {}): void;
	    static resolveDefaultOptions(element: HTMLElement, options: {}): {};
	    /**
	     * Register a new Component to be recognized by the framework.
	     * This essentially mean that when we call `Coveo.init`, the Initialization class will scan the DOM for known component (which have registed themselves with this call) and create a new component on each element.
	     *
	     * This is meant to register the component to be loaded "eagerly" (Immediately available when the UI scripts are included)
	     * @param componentClass
	     */
	    static registerAutoCreateComponent(componentClass: IComponentDefinition): void;
	    /**
	     * Set the fields that the component needs to add to the query.
	     *
	     * This is used when the {@link ResultList.options.autoSelectFieldsToInclude } is set to `true` (which is `true` by default).
	     *
	     * The framework tries to only include the needed fields from the index, for performance reasons.
	     *
	     * @param componentId The id for the component (eg: CoveoFacet)
	     * @param fields
	     */
	    static registerComponentFields(componentId: string, fields: string[]): void;
	    /**
	     * Returns all the fields that the framework currently knows should be added to the query.
	     *
	     * This is used when the {@link ResultList.options.autoSelectFieldsToInclude } is set to `true` (which is `true` by default).
	     *
	     * The framework tries to only include the needed fields from the index, for performance reasons.
	     * @returns {string[]}
	     */
	    static getRegisteredFieldsForQuery(): string[];
	    /**
	     * Returns all the fields that the framework currently knows should be added to the query, for a given component.
	     *
	     * This is used when the {@link ResultList.options.autoSelectFieldsToInclude } is set to `true` (which is `true` by default).
	     *
	     * The framework tries to only include the needed fields from the index, for performance reasons.
	     * @param componentId
	     * @returns {string[]|Array}
	     */
	    static getRegisteredFieldsComponentForQuery(componentId: string): string[];
	    /**
	     * Check if a component is already registered, using it's ID (e.g. : 'Facet').
	     * @param componentClassId
	     * @returns {boolean}
	     */
	    static isComponentClassIdRegistered(componentClassId: string): boolean;
	    /**
	     * Return the list of all known components (the list of ID for each component), whether they are actually loaded or not.
	     * @returns {string[]}
	     */
	    static getListOfRegisteredComponents(): String[];
	    /**
	     * Return the list of all components that are currently eagerly loaded.
	     * @returns {string[]}
	     */
	    static getListOfLoadedComponents(): string[];
	    /**
	     * Return the component class definition, using it's ID (e.g. : 'CoveoFacet').
	     *
	     * This means the component needs to be eagerly loaded.
	     *
	     * @param name
	     * @returns {IComponentDefinition}
	     */
	    static getRegisteredComponent(name: string): IComponentDefinition;
	    /**
	     * Initialize the framework. Note that this function should not normally be called directly, but instead using a globally registered function (e.g.: Coveo.init), or {@link Initialization.initSearchInterface} or {@link Initialization.initStandaloneSearchInterface} <br/>
	     * (e.g. : `Coveo.init` or `Coveo.initSearchbox`).
	     * @param element The element on which to initialize the interface.
	     * @param options The options for all components (eg: {Searchbox : {enableSearchAsYouType : true}}).
	     * @param initSearchInterfaceFunction The function to execute to create the {@link SearchInterface} component. Different init call will create different {@link SearchInterface}.
	     */
	    static initializeFramework(element: HTMLElement, options: any, initSearchInterfaceFunction: (...args: any[]) => IInitResult): Promise<{
	        elem: HTMLElement;
	    }>;
	    /**
	     * Create a new standard search interface. This is the function executed when calling `Coveo.init`.
	     * @param element
	     * @param options
	     * @returns {IInitResult}
	     */
	    static initSearchInterface(element: HTMLElement, options?: any): IInitResult;
	    /**
	     * Create a new standalone search interface (standalone search box). This is the function executed when calling `Coveo.initSearchbox`.
	     * @param element
	     * @param options
	     * @returns {IInitResult}
	     */
	    static initStandaloneSearchInterface(element: HTMLElement, options?: any): IInitResult;
	    /**
	     * Create a new recommendation search interface. This is the function executed when calling `Coveo.initRecommendation`.
	     * @param element
	     * @param options
	     * @returns {IInitResult}
	     */
	    static initRecommendationInterface(element: HTMLElement, options?: any): IInitResult;
	    /**
	     * Scan the element and all its children for known components. Initialize every known component found.
	     * @param element
	     * @param initParameters
	     * @param ignore
	     * @returns {IInitResult}
	     */
	    static automaticallyCreateComponentsInside(element: HTMLElement, initParameters: IInitializationParameters, ignore?: string[]): IInitResult;
	    /**
	     * Register a new globally available method in the Coveo namespace (e.g.: `Coveo.init`).
	     * @param methodName The method name to register.
	     * @param handler The function to execute when the method is called.
	     */
	    static registerNamedMethod(methodName: string, handler: (...args: any[]) => any): void;
	    /**
	     * Check if the method is already registed.
	     * @param methodName
	     * @returns {boolean}
	     */
	    static isNamedMethodRegistered(methodName: string): boolean;
	    /**
	     * 'Monkey patch' (replace the function with a new one) a given method on a component instance.
	     * @param methodName
	     * @param element
	     * @param handler
	     */
	    static monkeyPatchComponentMethod(methodName: string, element: HTMLElement, handler: (...args: any[]) => any): void;
	    static initBoxInterface(element: HTMLElement, options?: any, type?: string, injectMarkup?: boolean): IInitResult;
	    static dispatchNamedMethodCall(methodName: string, element: HTMLElement, args: any[]): any;
	    static dispatchNamedMethodCallOrComponentCreation(token: string, element: HTMLElement, args: any[]): any;
	    static isSearchFromLink(searchInterface: SearchInterface): boolean;
	    static isThereASingleComponentBoundToThisElement(element: HTMLElement): boolean;
	    static isThereANonSearchInterfaceComponentBoundToThisElement(element: HTMLElement): boolean;
	}
	class LazyInitialization {
	    static lazyLoadedComponents: IStringMap<() => Promise<IComponentDefinition>>;
	    static lazyLoadedModule: IStringMap<() => Promise<any>>;
	    static getLazyRegisteredComponent(name: string): Promise<IComponentDefinition>;
	    static getLazyRegisteredModule(name: string): Promise<any>;
	    static registerLazyComponent(id: string, load: () => Promise<IComponentDefinition>): void;
	    static buildErrorCallback(chunkName: string, resolve: Function): (error: any) => void;
	    static registerLazyModule(id: string, load: () => Promise<any>): void;
	    static componentsFactory(elements: Element[], componentClassId: string, initParameters: IInitializationParameters): {
	        factory: () => Promise<Component>[];
	        isLazyInit: boolean;
	    };
	}
	class EagerInitialization {
	    static eagerlyLoadedComponents: IStringMap<IComponentDefinition>;
	    static componentsFactory(elements: Element[], componentClassId: string, initParameters: IInitializationParameters): {
	        factory: () => void;
	        isLazyInit: boolean;
	    };
	}

}
declare module Coveo {
	interface IResultLayoutPopulateArgs {
	    layouts: string[];
	}
	class ResultLayoutEvents {
	    static populateResultLayout: string;
	}

}
declare module Coveo {
	class ResponsiveResultLayout implements IResponsiveComponent {
	    coveoRoot: Dom;
	    ID: string;
	    static init(root: HTMLElement, component: ResultLayout, options: IResponsiveComponentOptions): void;
	    constructor(coveoRoot: Dom, ID: string, options: IResponsiveComponentOptions, responsiveDropdown?: ResponsiveDropdown);
	    registerComponent(accept: Component): boolean;
	    handleResizeEvent(): void;
	}

}
declare module Coveo {
	interface IResultLayoutOptions {
	    mobileLayouts: string[];
	    tabletLayouts: string[];
	    desktopLayouts: string[];
	}
	/**
	 * The possible valid and supported layouts.
	 *
	 * See the [Result Layouts](https://developers.coveo.com/x/yQUvAg) documentation.
	 */
	type ValidLayout = 'list' | 'card' | 'table';
	/**
	 * The ResultLayout component allows the end user to switch between multiple {@link ResultList} components that have
	 * different {@link ResultList.options.layout} values.
	 *
	 * This component automatically populates itself with buttons to switch between the ResultList components that have a
	 * valid layout value (see the {@link ValidLayout} type).
	 *
	 * See also the [Result Layouts](https://developers.coveo.com/x/yQUvAg) documentation.
	 */
	class ResultLayout extends Component {
	    element: HTMLElement;
	    options: IResultLayoutOptions;
	    static ID: string;
	    static doExport: () => void;
	    static validLayouts: ValidLayout[];
	    currentLayout: string;
	    static options: IResultLayoutOptions;
	    /**
	     * Creates a new ResultLayout component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the ResultLayout component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IResultLayoutOptions, bindings?: IComponentBindings);
	    /**
	     * Changes the current layout.
	     *
	     * Also logs a `resultLayoutChange` event in the usage analytics with the new layout as metadeta.
	     *
	     * Triggers a new query.
	     *
	     * @param layout The new layout. The page must contain a valid {@link ResultList} component with a matching
	     * {@link ResultList.options.layout} value for this method to work.
	     */
	    changeLayout(layout: ValidLayout): void;
	    /**
	     * Gets the current layout (`list`, `card` or `table`).
	     * @returns {string} The current current layout.
	     */
	    getCurrentLayout(): string;
	    disableLayouts(layouts: ValidLayout[]): void;
	    enableLayouts(layouts: ValidLayout[]): void;
	}

}
declare module Coveo {
	class TemplateConditionEvaluator {
	    static getFieldFromString(text: string): string[];
	    static evaluateCondition(condition: string, result: IQueryResult, responsiveComponents?: ResponsiveComponents): Boolean;
	}

}
declare module Coveo {
	class TemplateFieldsEvaluator {
	    static evaluateFieldsToMatch(toMatches: IFieldsToMatch[], result: IQueryResult): boolean;
	}

}
declare module Coveo {
	type TemplateRole = 'table-header' | 'table-footer';
	interface ITemplateProperties {
	    condition?: Function;
	    conditionToParse?: string;
	    layout?: ValidLayout;
	    mobile?: boolean;
	    tablet?: boolean;
	    desktop?: boolean;
	    fieldsToMatch?: IFieldsToMatch[];
	    role?: TemplateRole;
	}
	interface IFieldsToMatch {
	    values?: string[];
	    field: string;
	}
	interface IInstantiateTemplateOptions {
	    currentLayout?: ValidLayout;
	    checkCondition?: boolean;
	    wrapInDiv?: boolean;
	    responsiveComponents?: ResponsiveComponents;
	}
	class DefaultInstantiateTemplateOptions implements IInstantiateTemplateOptions {
	    currentLayout: ValidLayout;
	    checkCondition: boolean;
	    wrapInDiv: boolean;
	    responsiveComponents: ResponsiveComponents;
	    constructor();
	    get(): IInstantiateTemplateOptions;
	    merge(other: IInstantiateTemplateOptions): IInstantiateTemplateOptions;
	}
	class Template implements ITemplateProperties {
	    dataToString: (object?: any) => string;
	    condition: Function;
	    conditionToParse: string;
	    fieldsToMatch: IFieldsToMatch[];
	    mobile: boolean;
	    tablet: boolean;
	    desktop: boolean;
	    fields: string[];
	    layout: ValidLayout;
	    role: TemplateRole;
	    constructor(dataToString?: (object?: any) => string);
	    instantiateToString(object: IQueryResult, instantiateOptions?: IInstantiateTemplateOptions): string;
	    addField(field: string): void;
	    addFields(fields: string[]): void;
	    getComponentsInside(tmplString: string): string[];
	    instantiateToElement(object: IQueryResult, instantiateTemplateOptions?: IInstantiateTemplateOptions): Promise<HTMLElement>;
	    toHtmlElement(): HTMLElement;
	    getFields(): string[];
	    getType(): string;
	    setConditionWithFallback(condition: string): void;
	}

}
declare module Coveo {
	/**
	 * A function that describe a templates.
	 *
	 * It can take any number of arguments, but needs to return a simple string.
	 */
	interface ITemplateHelperFunction {
	    (...args: any[]): string;
	}
	/**
	 * Allow to register and return template helpers (essentially: Utility functions that can be executed in the context of a template to render complex elements).
	 */
	class TemplateHelpers {
	    static fieldHelpers: string[];
	    static registerFieldHelper<T1>(name: string, helper: (value: string, options?: any) => string): void;
	    static registerTemplateHelper<T1>(name: string, helper: (arg1: T1) => string): any;
	    static registerTemplateHelper<T1, T2>(name: string, helper: (arg1: T1, arg2: T2) => string): any;
	    static registerTemplateHelper<T1, T2, T3>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3) => string): any;
	    static registerTemplateHelper<T1, T2, T3, T4>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => string): any;
	    static registerTemplateHelper<T1, T2, T3, T4, T5>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => string): any;
	    /**
	     * Return a template helper function
	     * @param name
	     * @returns {any}
	     */
	    static getHelper(name: string): ITemplateHelperFunction;
	    /**
	     * Get all available helpers
	     * @returns {{}}
	     */
	    static getHelpers(): {
	        [templateName: string]: ITemplateHelperFunction;
	    };
	}

}
declare module Coveo {
	interface ITemplateFromStringProperties {
	    condition?: string;
	    layout?: ValidLayout;
	    mobile?: boolean;
	    tablet?: boolean;
	    desktop?: boolean;
	    fieldsToMatch?: IFieldsToMatch[];
	    role?: TemplateRole;
	}
	class TemplateFromAScriptTag {
	    template: Template;
	    scriptTag: HTMLElement;
	    constructor(template: Template, scriptTag: HTMLElement);
	    toHtmlElement(container?: Dom): HTMLElement;
	    parseFieldsAttributes(): IFieldsToMatch[];
	    parseScreenSize(attribute: string): boolean;
	    parseLayout(): ValidLayout;
	    static fromString(template: string, properties?: ITemplateFromStringProperties, container?: HTMLElement): HTMLElement;
	}

}
declare module Coveo {
	class DefaultResultTemplate extends Template {
	    constructor();
	    instantiateToString(object: IQueryResult, instantiateOptions?: IInstantiateTemplateOptions): string;
	    getFields(): any[];
	    getType(): string;
	    getFallbackTemplate(): string;
	}

}
declare module Coveo {
	class UnderscoreTemplate extends Template {
	    element: HTMLElement;
	    static templateHelpers: {
	        [templateName: string]: ITemplateHelperFunction;
	    };
	    static mimeTypes: string[];
	    constructor(element: HTMLElement);
	    toHtmlElement(): HTMLElement;
	    getType(): string;
	    static registerTemplateHelper(helperName: string, helper: ITemplateHelperFunction): void;
	    static isLibraryAvailable(): boolean;
	    static fromString(template: string, properties: ITemplateFromStringProperties): UnderscoreTemplate;
	    static create(element: HTMLElement): UnderscoreTemplate;
	}

}
declare module Coveo {
	class HtmlTemplate extends Template {
	    element: HTMLElement;
	    static mimeTypes: string[];
	    constructor(element: HTMLElement);
	    toHtmlElement(): HTMLElement;
	    getType(): string;
	    static create(element: HTMLElement): HtmlTemplate;
	    static fromString(template: string, properties: ITemplateFromStringProperties): HtmlTemplate;
	}

}
declare module Coveo {
	/**
	 * Holds a reference to all template available in the framework
	 */
	class TemplateCache {
	    static registerTemplate(name: string, template: Template, publicTemplate?: boolean, defaultTemplate?: boolean, pageTemplate?: boolean): any;
	    static registerTemplate(name: string, template: (data: {}) => string, publicTemplate?: boolean, defaultTemplate?: boolean, pageTemplate?: boolean): any;
	    /**
	     * Remove the given template from the cache.
	     * @param name
	     * @param string
	     */
	    static unregisterTemplate(name: any): void;
	    /**
	     * Return a template by its name/FacID.
	     * @param name
	     * @returns {Template}
	     */
	    static getTemplate(name: string): Template;
	    /**
	     * Get all templates currently registered in the framework.
	     * @returns {{}}
	     */
	    static getTemplates(): {
	        [templateName: string]: Template;
	    };
	    /**
	     * Get all templates name currently registered in the framework.
	     * @returns {string[]}
	     */
	    static getTemplateNames(): string[];
	    /**
	     * Get all page templates name currently registered in the framework.
	     * @returns {string[]}
	     */
	    static getResultListTemplateNames(): string[];
	    /**
	     * Get all the "default" templates in the framework.
	     * @returns {string[]}
	     */
	    static getDefaultTemplates(): string[];
	    /**
	     * Get a default template by name.
	     * @param name The name of the queried template
	     */
	    static getDefaultTemplate(name: string): Template;
	    static scanAndRegisterTemplates(): void;
	}

}
declare module Coveo {
	class TemplateList extends Template {
	    templates: Template[];
	    constructor(templates: Template[]);
	    instantiateToString(object: IQueryResult, instantiateOptions?: IInstantiateTemplateOptions): string;
	    instantiateToElement(object: IQueryResult, instantiateOptions?: IInstantiateTemplateOptions): Promise<HTMLElement>;
	    getFields(): string[];
	    getType(): string;
	    protected getFallbackTemplate(): Template;
	}

}
declare module Coveo {
	/**
	 * Declare a type for options that should contain a field to be used in a query.
	 *
	 * The only constraint this type has over a basic string is that it should start with "@".
	 */
	interface IFieldOption extends String {
	}
	interface IComponentOptionsLoadOption<T> {
	    (element: HTMLElement, name: string, option: IComponentOptionsOption<T>): T;
	}
	/**
	 * Specify a postProcess function that allows an option to further modify itself once all other options have loaded.
	 */
	interface IComponentOptionsPostProcessing<T> {
	    /**
	     * Specify a postProcess function that allows an option to further modify itself once all other options have loaded.
	     * @param value
	     * @param options
	     */
	    (value: T, options: any): T;
	}
	interface IComponentOptionsOption<T> extends IComponentOptions<T> {
	    type?: ComponentOptionsType;
	    load?: IComponentOptionsLoadOption<T>;
	}
	/**
	 * This represent the possible parameters that can be used to configure an option
	 */
	interface IComponentOptions<T> {
	    /**
	     * Specify the default value that should be given to the option if it is not specified.
	     */
	    defaultValue?: T;
	    /**
	     * Specify a function which should return the default value that should be given to the option if it is not specified.
	     *
	     * @param element The HTMLElement on which the current option is being parsed.
	     */
	    defaultFunction?: (element: HTMLElement) => T;
	    /**
	     * Specify if the option is "required" so that the component can do it's job properly.
	     *
	     * For example, the {@link Facet.options.field} is required, as a facet with no field cannot function.
	     */
	    required?: boolean;
	    /**
	     * Specify a function which can be used to further modify the value for a given option after all other options have been loaded.
	     *
	     * For example, the {@link Facet.options.id} will use this to set the default ID with the same value as the {@link Facet.options.field}.
	     */
	    postProcessing?: IComponentOptionsPostProcessing<T>;
	    /**
	     * Allow to specify a different markup name for an option than the default value.
	     *
	     * Using this is extremely rare, and should be used only for legacy reasons.
	     */
	    attrName?: string;
	    /**
	     * Allow to specify an alias for an option name.
	     *
	     * This can be useful to modify the name of an option without introducing a breaking change.
	     */
	    alias?: string | string[];
	    /**
	     * Specify a section name inside which the option should appear in the interface editor.
	     */
	    section?: string;
	    /**
	     * Specify that an option depend on another option being enabled.
	     *
	     * Mostly useful for the interface editor.
	     */
	    depend?: string;
	    priority?: number;
	    /**
	     * Specify that an option is deprecated.
	     *
	     * This string will be displayed in the console on initialization.
	     *
	     * The message should be as clear as possible as to why this option is deprecated, and how it can be replaced.
	     *
	     * This also mean that the option will not appear in the interface editor.
	     */
	    deprecated?: string;
	    /**
	     * Specify a function which can be used to verify the validity of the option.
	     *
	     * The function should return true if the option is valid, false otherwise.
	     * @param value
	     */
	    validator?: (value: T) => boolean;
	}
	interface IComponentOptionsNumberOption extends IComponentOptionsOption<number>, IComponentOptionsNumberOptionArgs {
	}
	/**
	 * This represent the possible parameters that can be used to configure a number option.
	 */
	interface IComponentOptionsNumberOptionArgs extends IComponentOptions<number> {
	    /**
	     * The minimum value that can be set for this number.
	     */
	    min?: number;
	    /**
	     * The maximum value that can be set for this number.
	     */
	    max?: number;
	    /**
	     * Specify if the value is a floating point number.
	     */
	    float?: boolean;
	}
	interface IComponentOptionsListOption extends IComponentOptionsOption<string[]>, IComponentOptionsListOptionArgs {
	}
	/**
	 * The represent the possible parameters that can be used to configure a list option.
	 */
	interface IComponentOptionsListOptionArgs extends IComponentOptions<string[]> {
	    /**
	     * The separator that should be used for this list. By default, it will be `,`.
	     */
	    separator?: RegExp;
	    /**
	     * The possible list of values for this option.
	     */
	    values?: any;
	}
	interface IComponentOptionsCustomListOptionArgs<T> extends IComponentOptions<T> {
	    separator?: RegExp;
	    values?: any;
	}
	interface IComponentOptionsChildHtmlElementOption extends IComponentOptionsOption<HTMLElement>, IComponentOptionsChildHtmlElementOptionArgs {
	}
	interface IComponentOptionsChildHtmlElementOptionArgs extends IComponentOptions<HTMLElement> {
	    selectorAttr?: string;
	    childSelector?: string;
	}
	interface IComponentOptionsTemplateOption extends IComponentOptionsOption<Template>, IComponentOptionsTemplateOptionArgs {
	}
	interface IComponentOptionsTemplateOptionArgs extends IComponentOptions<Template> {
	    selectorAttr?: string;
	    childSelector?: string;
	    idAttr?: string;
	}
	interface IComponentOptionsFieldOption extends IComponentOptionsOption<string>, IComponentOptionsFieldOptionArgs {
	}
	/**
	 * This represent the possible parameters that can be used to configure a field option.
	 */
	interface IComponentOptionsFieldOptionArgs extends IComponentOptions<string> {
	    groupByField?: boolean;
	    includeInResults?: boolean;
	    sortByField?: boolean;
	    splitGroupByField?: boolean;
	    match?: (field: IFieldDescription) => boolean;
	}
	interface IComponentOptionsFieldsOption extends IComponentOptionsOption<string[]>, IComponentOptionsFieldsOptionArgs {
	}
	/**
	 * This represent the possible parameters that can be used to configure a list of fields option.
	 */
	interface IComponentOptionsFieldsOptionArgs extends IComponentOptions<string[]> {
	    groupByField?: boolean;
	    includeInResults?: boolean;
	    sortByField?: boolean;
	    splitGroupByField?: boolean;
	    match?: (field: IFieldDescription) => boolean;
	}
	interface IComponentOptionsObjectOption extends IComponentOptionsOption<{
	    [key: string]: any;
	}>, IComponentOptionsObjectOptionArgs {
	}
	interface IComponentOptionsObjectOptionArgs extends IComponentOptions<{
	    [key: string]: any;
	}> {
	    subOptions: {
	        [key: string]: IComponentOptionsOption<any>;
	    };
	}
	interface IComponentJsonObjectOption<T> extends IComponentOptions<T> {
	}
	enum ComponentOptionsType {
	    BOOLEAN = 0,
	    NUMBER = 1,
	    STRING = 2,
	    LOCALIZED_STRING = 3,
	    LIST = 4,
	    SELECTOR = 5,
	    CHILD_HTML_ELEMENT = 6,
	    TEMPLATE = 7,
	    FIELD = 8,
	    FIELDS = 9,
	    ICON = 10,
	    COLOR = 11,
	    OBJECT = 12,
	    QUERY = 13,
	    HELPER = 14,
	    LONG_STRING = 15,
	    JSON = 16,
	    JAVASCRIPT = 17,
	    NONE = 18,
	}
	/**
	 * This static class is used to initialize component options.
	 *
	 * Typically, each {@link Component} that exposes a set of options will contains a static `options` property,
	 *
	 * This property will "build" the options based on their type.
	 */
	class ComponentOptions {
	    /**
	     * Build a boolean option.
	     *
	     * A boolean option can be "true" or "false" in the markup.
	     *
	     * `data-foo="true"` or `data-foo="false"`.
	     * @param optionArgs
	     * @returns {boolean}
	     */
	    static buildBooleanOption(optionArgs?: IComponentOptions<boolean>): boolean;
	    /**
	     * Build a number option.
	     *
	     * A number option can be an integer or a float in the markup.
	     *
	     * `data-foo="1"` or `data-foo="1.5"`.
	     */
	    static buildNumberOption(optionArgs?: IComponentOptionsNumberOptionArgs): number;
	    /**
	     * Build a string option.
	     *
	     * A string option can be any arbitrary string in the markup.
	     *
	     * `data-foo="bar"`.
	     */
	    static buildStringOption(optionArgs?: IComponentOptions<string>): string;
	    /**
	     * Build an icon option.
	     *
	     * This takes an SVG icon name, validates it and returns the name of the icon.
	     * > `data-foo="search"`
	     *
	     * > `data-foo="facet-expand"`
	     *
	     * `data-foo="coveo-sprites-user"` or `data-foo="coveo-sprites-database"`.
	     */
	    static buildIconOption(optionArgs?: IComponentOptions<string>): string;
	    /**
	     * Build a color option.
	     *
	     * Normally, this only means that it will build a string that matches a CSS color.
	     *
	     * In the markup, this has no advantage over a plain string. This is mostly useful for the interface editor.
	     *
	     * `data-foo="coveo-sprites-user"` or `data-foo="coveo-sprites-database"`.
	     */
	    static buildColorOption(optionArgs?: IComponentOptions<string>): string;
	    /**
	     * Build a helper option.
	     *
	     * Normally, this only means that it will build a string that matches the name of a template helper.
	     *
	     * In the markup, this has no advantage over a plain string. This is mostly useful for the interface editor.
	     *
	     * `data-foo="date"` or `data-foo="dateTime"`.
	     */
	    static buildHelperOption(optionArgs?: IComponentOptions<string>): string;
	    /**
	     * Build a JSON option.
	     *
	     * Normally, this only means that it will build a stringified JSON.
	     *
	     * In the markup, this has no advantage over a plain string. This is mostly useful for the interface editor.
	     *
	     * `data-foo='{"bar" : "baz"}'`.
	     */
	    static buildJsonOption(optionArgs?: IComponentOptions<string>): string;
	    /**
	     * Build a localized string option.
	     *
	     * A localized string option can be any arbitrary string.
	     *
	     * The framework, when parsing the value, will try to load the localization for that word if it is available.
	     *
	     * If it is not available, it will return the non-localized option.
	     *
	     * This should be used for options that will be rendered directly to the end users.
	     *
	     * `data-foo="bar"`.
	     */
	    static buildLocalizedStringOption(optionArgs?: IComponentOptions<string>): string;
	    /**
	     * Build a field option.
	     *
	     * A field option will validate that the field has a valid name. This means that the string has to start with @.
	     *
	     * `data-foo="@bar"`.
	     */
	    static buildFieldOption(optionArgs?: IComponentOptionsFieldOptionArgs): IFieldOption;
	    /**
	     * Build an array of field option.
	     *
	     * As with all options that expect an array, you should use commas to delimit the different values.
	     *
	     * `data-foo="@bar,@baz"`.
	     */
	    static buildFieldsOption(optionArgs?: IComponentOptionsFieldsOptionArgs): IFieldOption[];
	    /**
	     * Build an array of string option.
	     *
	     * As with all options that expect an array, you should use commas to delimit the different values.
	     *
	     * `data-foo="bar,baz"`.
	     */
	    static buildListOption<T>(optionArgs?: IComponentOptionsListOptionArgs): T[] | string[];
	    /**
	     * Build an option that allow to select an HTMLElement.
	     *
	     * The option accept a CSS selector that will allow to find the required HTMLElement.
	     *
	     * It can be a class selector or an ID selector.
	     *
	     * `data-foo-selector=".bar" or data-foo-selector="#bar"`.
	     */
	    static buildSelectorOption(optionArgs?: IComponentOptions<HTMLElement>): HTMLElement;
	    static buildChildHtmlElementOption(optionArgs?: IComponentOptionsChildHtmlElementOptionArgs): HTMLElement;
	    static buildTemplateOption(optionArgs?: IComponentOptionsTemplateOptionArgs): Template;
	    static buildCustomOption<T>(converter: (value: string) => T, optionArgs?: IComponentOptions<T>): T;
	    static buildJsonObjectOption<T>(optionArgs?: IComponentJsonObjectOption<T>): T;
	    static buildCustomListOption<T>(converter: (value: string[]) => T, optionArgs?: IComponentOptionsCustomListOptionArgs<T>): T;
	    static buildObjectOption(optionArgs?: IComponentOptionsObjectOptionArgs): any;
	    static buildOption<T>(type: ComponentOptionsType, load: IComponentOptionsLoadOption<T>, optionArg?: IComponentOptions<T>): T;
	    static attrNameFromName(name: string, optionArgs?: IComponentOptions<any>): string;
	    static camelCaseToHyphen(name: string): string;
	    static mergeCamelCase(parent: string, name: string): string;
	    /**
	     * The main function that will load and parse the options for the current given element.
	     *
	     * Every component will call this function in their constructor.
	     * @param element The element on which the options should be parsed
	     * @param component The component class for which the options should be parsed. For example : Searchbox, Facet, etc.
	     * @param values The optional options which should be merged with the options set in the markup.
	     */
	    static initComponentOptions(element: HTMLElement, component: any, values?: any): any;
	    static initOptions(element: HTMLElement, options: {
	        [name: string]: IComponentOptionsOption<any>;
	    }, values?: any, componentID?: any): any;
	    static loadStringOption(element: HTMLElement, name: string, option: IComponentOptions<any>): string;
	    static loadIconOption(element: HTMLElement, name: string, option: IComponentOptions<any>): string;
	    static loadFieldOption(element: HTMLElement, name: string, option: IComponentOptionsOption<any>): string;
	    static loadFieldsOption(element: HTMLElement, name: string, option: IComponentOptionsOption<any>): string[];
	    static loadLocalizedStringOption(element: HTMLElement, name: string, option: IComponentOptionsOption<any>): string;
	    static loadNumberOption(element: HTMLElement, name: string, option: IComponentOptionsNumberOption): number;
	    static loadBooleanOption(element: HTMLElement, name: string, option: IComponentOptionsOption<any>): boolean;
	    static loadListOption(element: HTMLElement, name: string, option: IComponentOptionsListOption): string[];
	    static loadEnumOption(element: HTMLElement, name: string, option: IComponentOptionsOption<any>, _enum: any): number;
	    static loadJsonObjectOption<T>(element: HTMLElement, name: string, option: IComponentOptions<any>): T;
	    static loadSelectorOption(element: HTMLElement, name: string, option: IComponentOptionsOption<any>, doc?: Document): HTMLElement;
	    static loadChildHtmlElementOption(element: HTMLElement, name: string, option: IComponentOptionsChildHtmlElementOption, doc?: Document): HTMLElement;
	    static loadChildHtmlElementFromSelector(element: HTMLElement, selector: string): HTMLElement;
	    static loadChildrenHtmlElementFromSelector(element: HTMLElement, selector: string): HTMLElement[];
	    static loadTemplateOption(element: HTMLElement, name: string, option: IComponentOptionsTemplateOption, doc?: Document): Template;
	    static loadResultTemplateFromId(templateId: string): Template;
	    static loadChildrenResultTemplateFromSelector(element: HTMLElement, selector: string): Template;
	    static findParentScrolling(element: HTMLElement, doc?: Document): HTMLElement;
	    static isElementScrollable(element: HTMLElement): boolean;
	    static getAttributeFromAlias(element: HTMLElement, option: IComponentOptions<any>): any;
	    static createResultTemplateFromElement(element: HTMLElement): Template;
	}

}
declare module Coveo {
	interface IBeforeRedirectEventArgs {
	    searchPageUri: string;
	    cancel: boolean;
	}
	class StandaloneSearchInterfaceEvents {
	    static beforeRedirect: string;
	}

}
declare module Coveo {
	/**
	 * This component is instantiated automatically by the framework on the root if the {@link SearchInterface}.<br/>
	 * When the {@link SearchInterface.options.enableHistory} option is set to true, this component is instantiated.<br/>
	 * It's only job is to apply changes in the {@link QueryStateModel} to the hash in the URL, and vice versa.<br/>
	 * This component does *not* hold the state of the interface, it only represent it in the URL.
	 */
	class HistoryController extends RootComponent {
	    windoh: Window;
	    model: Model;
	    queryController: QueryController;
	    static ID: string;
	    static attributesThatDoNotTriggerQuery: string[];
	    /**
	     * Create a new history controller
	     * @param element
	     * @param windoh For mock / test purposes.
	     * @param model
	     * @param queryController
	     * @param hashUtilsModule For mock / test purposes.
	     */
	    constructor(element: HTMLElement, windoh: Window, model: Model, queryController: QueryController, hashUtils?: typeof HashUtils);
	    /**
	     * Set the given map of key value in the hash of the URL
	     * @param values
	     */
	    setHashValues(values: {}): void;
	    debugInfo(): {
	        'state': {
	            [key: string]: any;
	        };
	    };
	}

}
declare module Coveo {
	/**
	 * This component acts like the {@link HistoryController} excepts that is saves the {@link QueryStateModel} in the local storage.<br/>
	 * This will not allow 'back' and 'forward' navigation in the history, like the standard {@link HistoryController} allows. Instead, it load the query state only on page load.<br/>
	 * To enable this component, you should set the {@link SearchInterface.options.useLocalStorageForHistory} as well as the {@link SearchInterface.options.enableHistory} options to true.
	 */
	class LocalStorageHistoryController extends RootComponent {
	    windoh: Window;
	    model: Model;
	    queryController: QueryController;
	    static ID: string;
	    storage: LocalStorageUtils<{
	        [key: string]: any;
	    }>;
	    /**
	     * Create a new LocalStorageHistoryController instance
	     * @param element
	     * @param windoh For mock purpose
	     * @param model
	     * @param queryController
	     */
	    constructor(element: HTMLElement, windoh: Window, model: Model, queryController: QueryController);
	    /**
	     * Specifies an array of attributes from the query state model that should not be persisted in the local storage
	     * @param attributes
	     */
	    withoutThoseAttribute(attributes: string[]): void;
	    setStorageValues(values: {
	        [key: string]: any;
	    }): void;
	}

}
declare module Coveo {
	/**
	 * Describe an interface for a simple form widget.
	 *
	 * {@link Checkbox}, {@link DatePicker}, {@link Dropdown} are all examples of `IFormWidgets`.
	 */
	interface IFormWidget {
	    reset: () => void;
	    getValue: () => string | number | string[];
	    build: () => HTMLElement;
	    getElement: () => HTMLElement;
	}
	interface IFormWidgetWithLabel extends IFormWidget {
	    label: string;
	    getLabel: () => HTMLElement;
	}
	interface IFormWidgetSelectable extends IFormWidget {
	    isSelected: () => boolean;
	    select: () => void;
	}
	interface IFormWidgetSettable extends IFormWidget {
	    setValue: (value: any) => void;
	}

}
declare module Coveo {
	/**
	 * A checkbox widget with standard styling.
	 */
	class Checkbox implements IFormWidgetWithLabel, IFormWidgetSelectable {
	    onChange: (checkbox: Checkbox) => void;
	    label: string;
	    protected element: HTMLElement;
	    protected checkbox: HTMLInputElement;
	    static doExport: () => void;
	    /**
	     * Creates a new `Checkbox`.
	     * @param onChange The function to call when the checkbox state changes. This function takes the current `Checkbox`
	     * instance as an argument.
	     * @param label The label to display next to the checkbox.
	     */
	    constructor(onChange: (checkbox: Checkbox) => void, label: string);
	    /**
	     * Toggles the checkbox state.
	     */
	    toggle(): void;
	    /**
	     * Gets the element on which the checkbox is bound.
	     * @returns {HTMLElement} The checkbox element.
	     */
	    getElement(): HTMLElement;
	    /**
	     * Gets the element on which the checkbox is bound.
	     * @returns {HTMLElement} The checkbox element.
	     */
	    build(): HTMLElement;
	    /**
	     * Gets the checkbox [`label`]{@link Checkbox.label} value.
	     * @returns {string} The checkbox label value.
	     */
	    getValue(): string;
	    /**
	     * Resets the checkbox.
	     */
	    reset(): void;
	    /**
	     * Select the checkbox
	     * @param triggerChange will trigger change even if specified and not already selected
	     */
	    select(triggerChange?: boolean): void;
	    /**
	     * Indicates whether the checkbox is checked.
	     * @returns {boolean} `true` if the checkbox is checked, `false` otherwise.
	     */
	    isSelected(): boolean;
	    /**
	     * Gets the element on which the checkbox [`label`]{@link Checkbox.label} is bound.
	     * @returns {HTMLElement} The `label` element.
	     */
	    getLabel(): HTMLElement;
	}

}
declare module Coveo {
	/**
	 * A text input widget with standard styling.
	 */
	class TextInput implements IFormWidget, IFormWidgetSettable {
	    onChange: (textInput: TextInput) => void;
	    name: string;
	    static doExport(): void;
	    /**
	     * Creates a new `TextInput`.
	     * @param onChange The function to call when the value entered in the text input changes. This function takes the
	     * current `TextInput` instance as an argument.
	     * @param name The text to display in the text input label.
	     */
	    constructor(onChange?: (textInput: TextInput) => void, name?: string);
	    /**
	     * Gets the element on which the text input is bound.
	     * @returns {HTMLElement} The text input element.
	     */
	    getElement(): HTMLElement;
	    /**
	     * Gets the value currently entered in the text input.
	     * @returns {string} The text input current value.
	     */
	    getValue(): string;
	    /**
	     * Sets the value in the text input.
	     * @param value The value to set the text input to.
	     */
	    setValue(value: string): void;
	    /**
	     * Resets the text input.
	     */
	    reset(): void;
	    /**
	     * Gets the element on which the text input is bound.
	     * @returns {HTMLElement} The text input element.
	     */
	    build(): HTMLElement;
	    /**
	     * Gets the `input` element (the text input itself).
	     * @returns {HTMLElement} The `input` element.
	     */
	    getInput(): HTMLInputElement;
	}

}
declare module Coveo {
	class DebugHeader {
	    root: HTMLElement;
	    element: HTMLElement;
	    bindings: IComponentBindings;
	    onSearch: (value: string) => void;
	    infoToDebug: any;
	    constructor(root: HTMLElement, element: HTMLElement, bindings: IComponentBindings, onSearch: (value: string) => void, infoToDebug: any);
	    moveTo(newElement: HTMLElement): void;
	    setSearch(onSearch: (value: string) => void): void;
	    setNewInfoToDebug(newInfoToDebug: any): void;
	}

}
declare module Coveo {
	class DebugForResult {
	    bindings: IComponentBindings;
	    constructor(bindings: IComponentBindings);
	    generateDebugInfoForResult(result: IQueryResult): {
	        result: IQueryResult;
	        fields: () => Promise<{}>;
	        rankingInfo: () => {};
	    };
	}

}
declare module Coveo {
	interface IDebugOptions {
	    enableDebug?: boolean;
	}
	class Debug extends RootComponent {
	    element: HTMLElement;
	    bindings: IComponentBindings;
	    options: IDebugOptions;
	    ModalBox: any;
	    static ID: string;
	    static options: IDebugOptions;
	    static customOrder: string[];
	    static durationKeys: string[];
	    static maxDepth: number;
	    localStorageDebug: LocalStorageUtils<string[]>;
	    collapsedSections: string[];
	    showDebugPanel: () => void;
	    constructor(element: HTMLElement, bindings: IComponentBindings, options?: IDebugOptions, ModalBox?: any);
	    debugInfo(): any;
	    addInfoToDebugPanel(info: any): void;
	}

}
declare module Coveo {
	class SentryLogger {
	    constructor(queryController: QueryController, windoh?: Window);
	}

}
declare module Coveo {
	interface ISearchInterfaceOptions {
	    enableHistory?: boolean;
	    enableAutomaticResponsiveMode?: boolean;
	    useLocalStorageForHistory?: boolean;
	    resultsPerPage?: number;
	    excerptLength?: number;
	    expression?: string;
	    filterField?: IFieldOption;
	    autoTriggerQuery?: boolean;
	    timezone?: string;
	    enableDebugInfo?: boolean;
	    enableCollaborativeRating?: boolean;
	    enableDuplicateFiltering?: boolean;
	    hideUntilFirstQuery?: boolean;
	    firstLoadingAnimation?: any;
	    pipeline?: string;
	    maximumAge?: number;
	    searchPageUri?: string;
	    initOptions?: any;
	    endpoint?: SearchEndpoint;
	    originalOptionsObject?: any;
	}
	/**
	 * The SearchInterface component is the root and main component of your Coveo search interface. You should place all
	 * other Coveo components inside the SearchInterface component.
	 *
	 * It is also on the HTMLElement of the SearchInterface component that you call the {@link init} function.
	 *
	 * It is advisable to specify a unique HTML `id` attribute for the SearchInterface component in order to be able to
	 * reference it easily.
	 *
	 * **Example:**
	 *
	 * ```html
	 * <head>
	 *
	 * [ ... ]
	 *
	 * <script>
	 *   document.addEventListener('DOMContentLoaded', function() {
	 *
	 *     [ ... ]
	 *     // The init function is called on the SearchInterface element, in this case, the body of the page.
	 *     Coveo.init(document.body);
	 *
	 *     [ ... ]
	 *
	 *     });
	 * </script>
	 *
	 * [ ... ]
	 * </head>
	 *
	 * <!-- Specifying a unique HTML id attribute for the SearchInterface component is good practice. -->
	 * <body id='search' class='CoveoSearchInterface' [ ... other options ... ]>
	 *
	 *   [ ... ]
	 *
	 *   <!-- You should place all other Coveo components here, inside the SearchInterface component. -->
	 *
	 *   [ ... ]
	 *
	 * </body>
	 * ```
	 */
	class SearchInterface extends RootComponent implements IComponentBindings {
	    element: HTMLElement;
	    options: ISearchInterfaceOptions;
	    analyticsOptions: any;
	    static ID: string;
	    /**
	     * The options for the search interface
	     * @componentOptions
	     */
	    static options: ISearchInterfaceOptions;
	    static SMALL_INTERFACE_CLASS_NAME: string;
	    root: HTMLElement;
	    queryStateModel: QueryStateModel;
	    componentStateModel: ComponentStateModel;
	    queryController: QueryController;
	    componentOptionsModel: ComponentOptionsModel;
	    usageAnalytics: IAnalyticsClient;
	    /**
	     * Allows to get and set the different breakpoints for mobile and tablet devices.
	     *
	     * This is useful, amongst other, for {@link Facet}, {@link Tab} and {@link ResultList}
	     */
	    responsiveComponents: ResponsiveComponents;
	    /**
	     * Creates a new SearchInterface. Initialize various singletons for the interface (e.g., usage analytics, query
	     * controller, state model, etc.). Binds events related to the query.
	     * @param element The HTMLElement on which to instantiate the component. This cannot be an `HTMLInputElement` for
	     * technical reasons.
	     * @param options The options for the SearchInterface.
	     * @param analyticsOptions The options for the {@link Analytics} component. Since the Analytics component is normally
	     * global, it needs to be passed at initialization of the whole interface.
	     * @param _window The window object for the search interface. Used for unit tests, which can pass a mock. Default is
	     * the global window object.
	     */
	    constructor(element: HTMLElement, options?: ISearchInterfaceOptions, analyticsOptions?: any, _window?: Window);
	    /**
	     * Attaches a component to the search interface. This allows the search interface to easily list and iterate over its
	     * components.
	     * @param type Normally, the component type is a unique identifier without the `Coveo` prefix (e.g., `CoveoFacet` ->
	     * `Facet`, `CoveoPager` -> `Pager`, `CoveoQuerybox` -> `Querybox`, etc.).
	     * @param component The component instance to attach.
	     */
	    attachComponent(type: string, component: BaseComponent): void;
	    /**
	     * Detaches a component from the search interface.
	     * @param type Normally, the component type is a unique identifier without the `Coveo` prefix (e.g., `CoveoFacet` ->
	     * `Facet`, `CoveoPager` -> `Pager`, `CoveoQuerybox` -> `Querybox`, etc.).
	     * @param component The component instance to detach.
	     */
	    detachComponent(type: string, component: BaseComponent): void;
	    /**
	     * Returns the bindings, or environment, for the current component.
	     * @returns {IComponentBindings}
	     */
	    getBindings(): {
	        root: HTMLElement;
	        queryStateModel: QueryStateModel;
	        queryController: QueryController;
	        searchInterface: SearchInterface;
	        componentStateModel: ComponentStateModel;
	        componentOptionsModel: ComponentOptionsModel;
	        usageAnalytics: IAnalyticsClient;
	    };
	    /**
	     * Gets all the components of a given type.
	     * @param type Normally, the component type is a unique identifier without the `Coveo` prefix (e.g., `CoveoFacet` ->
	     * `Facet`, `CoveoPager` -> `Pager`, `CoveoQuerybox` -> `Querybox`, etc.).
	     */
	    getComponents<T>(type: string): T[];
	    /**
	     * Indicates whether the search interface is using the new design.
	     * This changes the rendering of multiple components.
	     *
	     * @deprecated Old styling of the interface is no longer supported
	     */
	    protected initializeAnalytics(): IAnalyticsClient;
	}
	interface IStandaloneSearchInterfaceOptions extends ISearchInterfaceOptions {
	    redirectIfEmpty?: boolean;
	}
	class StandaloneSearchInterface extends SearchInterface {
	    element: HTMLElement;
	    options: IStandaloneSearchInterfaceOptions;
	    analyticsOptions: any;
	    _window: Window;
	    static ID: string;
	    static options: IStandaloneSearchInterfaceOptions;
	    constructor(element: HTMLElement, options?: IStandaloneSearchInterfaceOptions, analyticsOptions?: any, _window?: Window);
	    handleRedirect(e: Event, data: INewQueryEventArgs): void;
	    redirectToSearchPage(searchPage: string): void;
	}

}
declare module Coveo {
	/**
	 * The `IQueryResult` interface describes a single result returned by the Coveo REST Search API.
	 */
	interface IQueryResult {
	    /**
	     * Contains the title of the item.
	     */
	    title: string;
	    titleHighlights: IHighlight[];
	    /**
	     * Contains the URI of the item.
	     */
	    uri: string;
	    /**
	     * Contains a printable URI (or path) to the item.
	     */
	    printableUri: string;
	    printableUriHighlights: IHighlight[];
	    /**
	     * Contains the clickable URI of the item, which you can set on an `href` in your search interface.
	     *
	     * See the [`ResultLink`]{@link ResultLink} component.
	     */
	    clickUri: string;
	    /**
	     * Contains the unique ID of the item.
	     *
	     * This parameter is useful when making certain calls to a [`SearchEndpoint`]{@link SearchEndpoint}.
	     */
	    uniqueId: string;
	    /**
	     * Contains an excerpt of the item. Can be empty for certain types of items (e.g., images, videos, etc.).
	     *
	     * See the [`Excerpt`]{@link Excerpt} component.
	     */
	    excerpt: string;
	    excerptHighlights: IHighlight[];
	    firstSentences: string;
	    firstSentencesHighlights: IHighlight[];
	    /**
	     * Contains a value specifying whether the item has an HTML version.
	     *
	     * See the [`Quickview`]{@link Quickview} component.
	     */
	    hasHtmlVersion: boolean;
	    hasMobileHtmlVersion: boolean;
	    /**
	     * Contains the list of flags for the item. Values are separated by a semicolon characters (`;`).
	     */
	    flags: string;
	    summary: string;
	    summaryHighlights: IHighlight[];
	    /**
	     * Contains ranking information, which the Coveo REST Search API returns along with the item when the query
	     * [`debug`]{@link IQuery.debug} property is `true`.
	     */
	    rankingInfo: string;
	    /**
	     * Contains the collaborative rating value for the item.
	     *
	     * See the [`ResultRating`]{@link ResultRating} component.
	     */
	    rating?: number;
	    /**
	     * Contains the raw field values of the item, expressed as key-value pairs.
	     */
	    raw: any;
	    /**
	     * Contains the parent result of the item, if parent-child loading was performed.
	     *
	     * See the [`Folding`]{@link Folding} component.
	     */
	    parentResult?: IQueryResult;
	    /**
	     * Contains the child results of the item, if parent-child loading was performed.
	     *
	     * See the [`Folding`]{@link Folding} component.
	     */
	    childResults: IQueryResult[];
	    /**
	     * Contains a value that specifies whether the result was recommended by the Coveo Machine Learning service.
	     *
	     * See the [`Recommendation`]{@link Recommendation} component.
	     *
	     * See also [Coveo Machine Learning](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=177).
	     */
	    isRecommendation: boolean;
	    termsToHighlight?: IHighlightTerm;
	    phrasesToHighlight: IHighlightPhrase;
	    rankingModifier?: string;
	    /**
	     * Contains the 0-based index value of the result, as returned by the Coveo REST Search API.
	     */
	    index?: number;
	    /**
	     * Contains the query UID, as returned by the Coveo REST Search API.
	     *
	     * This value is used mainly for usage analytics.
	     *
	     * The Coveo JavaScript Search Framework adds this property client-side to each result.
	     */
	    queryUid?: string;
	    pipeline?: string;
	    splitTestRun?: string;
	    moreResults?: () => Promise<IQueryResult[]>;
	    totalNumberOfChildResults?: number;
	    attachments?: IQueryResult[];
	    /**
	     * Contains the query state of the [`SearchInterface`]{@link SearchInterface} inside which this result is rendered.
	     *
	     * This value is used mainly to allow for conditional rendering of results templates.
	     *
	     * The Coveo JavaScript Search Framework adds this property client-side to each result.
	     */
	    state: {
	        [attribute: string]: any;
	    };
	    /**
	     * The [`SearchInterface`]{@link SearchInterface} inside which this result is rendered.
	     *
	     * This value is used mainly to allow for conditional rendering of results templates.
	     *
	     * The Coveo JavaScript Search Framework adds this property client-side to each result.
	     */
	    searchInterface: SearchInterface;
	    orphan?: boolean;
	    fields?: {
	        [name: string]: any;
	    };
	}

}
declare module Coveo {
	class Utils {
	    static isUndefined(obj: any): boolean;
	    static isNull(obj: any): boolean;
	    static isNullOrUndefined(obj: any): boolean;
	    static exists(obj: any): boolean;
	    static toNotNullString(str: string): string;
	    static anyTypeToString(value: any): string;
	    static isNullOrEmptyString(str: string): boolean;
	    static isNonEmptyString(str: string): boolean;
	    static isEmptyString(str: string): boolean;
	    static stringStartsWith(str: string, startWith: string): boolean;
	    static isNonEmptyArray(obj: any): boolean;
	    static isEmptyArray(obj: any): boolean;
	    static isHtmlElement(obj: any): boolean;
	    static parseIntIfNotUndefined(str: string): number;
	    static parseFloatIfNotUndefined(str: string): number;
	    static round(num: number, decimals: number): number;
	    static parseBooleanIfNotUndefined(str: string): boolean;
	    static trim(value: string): string;
	    static encodeHTMLEntities(rawStr: string): string;
	    static decodeHTMLEntities(rawString: string): string;
	    static arrayEqual(array1: any[], array2: any[], sameOrder?: boolean): boolean;
	    static objectEqual(obj1: Object, obj2: Object): boolean;
	    static isCoveoField(field: string): boolean;
	    static escapeRegexCharacter(str: string): string;
	    static getCaseInsensitiveProperty(object: {}, name: string): any;
	    static getFieldValue(result: IQueryResult, name: string): any;
	    static throttle(func: any, wait: any, options?: {
	        leading?: boolean;
	        trailing?: boolean;
	    }, context?: any, args?: any): () => any;
	    static extendDeep(target: any, src: any): {};
	    static getQueryStringValue(key: any, queryString?: string): string;
	    static isValidUrl(str: string): boolean;
	    static debounce(func: Function, wait: number): (...args: any[]) => void;
	    static readCookie(name: string): string;
	    static toDashCase(camelCased: string): string;
	    static toCamelCase(dashCased: string): string;
	    static parseXml(xml: string): XMLDocument;
	    static copyObject<T>(target: T, src: T): void;
	    static copyObjectAttributes<T>(target: T, src: T, attributes: string[]): void;
	    static concatWithoutDuplicate(firstArray: any[], secondArray: any[]): any[];
	}

}
declare module Coveo {
	class Assert {
	    static failureHandler: (message?: string) => void;
	    static fail(message?: string): void;
	    static check(condition: boolean, message?: string): void;
	    static isUndefined(obj: any): void;
	    static isNotUndefined(obj: any): void;
	    static isNull(obj: any): void;
	    static isNotNull(obj: any): void;
	    static exists(obj: any): void;
	    static doesNotExists(obj: any): void;
	    static isString(obj: any): void;
	    static stringStartsWith(str: string, start: string): void;
	    static isNonEmptyString(str: string): void;
	    static isNumber(obj: any): void;
	    static isLargerThan(expected: number, actual: number): void;
	    static isLargerOrEqualsThan(expected: number, actual: number): void;
	    static isSmallerThan(expected: number, actual: number): void;
	    static isSmallerOrEqualsThan(expected: number, actual: number): void;
	}
	class PreconditionFailedException extends Error {
	    message: string;
	    constructor(message: string);
	    toString(): string;
	}

}
declare module Coveo {
	/**
	 * The possible options to use when calculating a timespan
	 */
	interface ITimeSpanUtilsOptions {
	    /**
	     * Specify if the given timespan is in seconds or milliseconds
	     */
	    isMilliseconds: boolean;
	}
	class TimeSpan {
	    constructor(time: number, isMilliseconds?: boolean);
	    getMilliseconds(): number;
	    getSeconds(): number;
	    getMinutes(): number;
	    getHours(): number;
	    getDays(): number;
	    getWeeks(): number;
	    getHHMMSS(): string;
	    static fromDates(from: Date, to: Date): TimeSpan;
	}

}
declare module Coveo {
	/**
	 * Parameters that can be used when calling an {@link EndpointCaller}
	 */
	interface IEndpointCallParameters {
	    /**
	     * Url to target
	     */
	    url: string;
	    /**
	     * Array of query string params.<br/>
	     * eg: ['foo=1','bar=2']
	     */
	    queryString: string[];
	    /**
	     * Body of the request.<br/>
	     * key -> value map (JSON)
	     */
	    requestData: IStringMap<any>;
	    /**
	     * Request data type.<br/>
	     * eg: "application/json", "application/x-www-form-urlencoded; charset=\"UTF-8\""
	     */
	    requestDataType?: string;
	    /**
	     * Or HTTP verb : GET, POST, PUT, etc.
	     */
	    method: string;
	    /**
	     * responseType of the request.</br>
	     * eg: "text", "arraybuffer" etc.
	     */
	    responseType: string;
	    /**
	     * Flag to specify if the endpoint should return different type of error as actual 200 success for the browser, but with the error code/message contained in the response.
	     */
	    errorsAsSuccess: boolean;
	}
	/**
	 * Information about a request
	 */
	interface IRequestInfo<T> {
	    /**
	     * Url that was requested
	     */
	    url: string;
	    /**
	     * The query string parameters that were used for this request
	     */
	    queryString: string[];
	    /**
	     * The data that was sent for this request
	     */
	    requestData: IStringMap<any>;
	    /**
	     * The requestDataType that was used for this request
	     */
	    requestDataType: string;
	    /**
	     * The timestamp at which the request started
	     */
	    begun: Date;
	    /**
	     * The method that was used for this request
	     */
	    method: string;
	    /**
	     * The headers for the request.
	     */
	    headers?: IStringMap<string>;
	}
	/**
	 * A generic response
	 */
	interface IResponse<T> {
	    /**
	     * Data of the response
	     */
	    data?: T;
	}
	/**
	 * A generic success response
	 */
	interface ISuccessResponse<T> extends IResponse<T> {
	    /**
	     * The time that the successfull response took to complete
	     */
	    duration: number;
	    /**
	     * Data of the response
	     */
	    data: T;
	}
	/**
	 * An error response
	 */
	interface IErrorResponse extends IResponse<IStringMap<any>> {
	    /**
	     * Status code for the error
	     */
	    statusCode: number;
	    /**
	     * Data about the error
	     */
	    data?: {
	        /**
	         * Message for the error
	         */
	        message?: string;
	        /**
	         * Type of the error
	         */
	        type?: string;
	        /**
	         * A report provided by the search api
	         */
	        executionReport?: string;
	        [key: string]: any;
	    };
	}
	/**
	 * Possible options when creating a {@link EndpointCaller}
	 */
	interface IEndpointCallerOptions {
	    /**
	     * The access token to use for this endpoint.
	     */
	    accessToken?: string;
	    /**
	     * The username to use to log into this endpoint. Used for basic auth.<br/>
	     * Not used if accessToken is provided.
	     */
	    username?: string;
	    /**
	     * The password to use to log into this endpoint. Used for basic auth.<br/>
	     * Not used if accessToken is provided.
	     */
	    password?: string;
	    /**
	     * A function which will allow external code to modify all endpoint call parameters before they are sent by the browser.
	     *
	     * Used in very specific scenario where the network infrastructure require special request headers to be added or removed, for example.
	     */
	    requestModifier?: (params: IRequestInfo<any>) => IRequestInfo<any>;
	    /**
	     * The XmlHttpRequest implementation to use instead of the native one.
	     * If not specified, the native one is used.
	     */
	    xmlHttpRequest?: new () => XMLHttpRequest;
	}
	/**
	 * This class is in charge of calling an endpoint (eg: a {@link SearchEndpoint}).
	 *
	 * This means it's only uses to execute an XMLHttpRequest (for example), massage the response and check if there are errors.
	 *
	 * Will execute the call and return a Promise.
	 *
	 * Call using one of those options :
	 *
	 * * XMLHttpRequest for recent browser that support CORS, or if the endpoint is on the same origin.
	 * * XDomainRequest for older IE browser that do not support CORS.
	 * * Jsonp if all else fails, or is explicitly enabled.
	 */
	class EndpointCaller {
	    options: IEndpointCallerOptions;
	    logger: Logger;
	    /**
	     * Set this property to true to enable Jsonp call to the endpoint.<br/>
	     * Be aware that jsonp is "easier" to setup endpoint wise, but has a lot of drawback and limitation for the client code.<br/>
	     * Default to false.
	     * @type {boolean}
	     */
	    useJsonp: boolean;
	    /**
	     * Create a new EndpointCaller.
	     * @param options Specify the authentication that will be used for this endpoint. Not needed if the endpoint is public and has no authentication
	     */
	    constructor(options?: IEndpointCallerOptions);
	    /**
	     * Generic call to the endpoint using the provided {@link IEndpointCallParameters}.<br/>
	     * Internally, will decide which method to use to call the endpoint :<br/>
	     * -- XMLHttpRequest for recent browser that support CORS, or if the endpoint is on the same origin.<br/>
	     * -- XDomainRequest for older IE browser that do not support CORS.<br/>
	     * -- Jsonp if all else fails, or is explicitly enabled.
	     * @param params The parameters to use for the call
	     * @returns {any} A promise of the given type
	     */
	    call<T>(params: IEndpointCallParameters): Promise<ISuccessResponse<T>>;
	    /**
	     * Call the endpoint using XMLHttpRequest. Used internally by {@link EndpointCaller.call}.<br/>
	     * Will try internally to handle error if it can.<br/>
	     * Promise will otherwise fail with the error type.
	     * @param requestInfo The info about the request
	     * @param responseType The responseType. Default to text. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
	     * @returns {Promise<T>|Promise}
	     */
	    callUsingXMLHttpRequest<T>(requestInfo: IRequestInfo<T>, responseType?: string): Promise<ISuccessResponse<T>>;
	    /**
	     * Call the endpoint using XDomainRequest https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx<br/>
	     * Used for IE8/9
	     * @param requestInfo The info about the request
	     * @returns {Promise<T>|Promise}
	     */
	    callUsingXDomainRequest<T>(requestInfo: IRequestInfo<T>): Promise<IResponse<T>>;
	    /**
	     * Call the endpoint using Jsonp https://en.wikipedia.org/wiki/JSONP<br/>
	     * Should be used for dev only, or for very special setup as using jsonp has a lot of drawbacks.
	     * @param requestInfo The info about the request
	     * @returns {Promise<T>|Promise}
	     */
	    callUsingAjaxJsonP<T>(requestInfo: IRequestInfo<T>): Promise<IResponse<T>>;
	}

}
declare module Coveo {
	/**
	 * The possible options when creating a {@link SearchEndpoint}
	 */
	interface ISearchEndpointOptions extends IEndpointCallerOptions {
	    /**
	     * The uri for the search endpoint. eg: cloudplatform.coveo.com/rest/search
	     */
	    restUri?: string;
	    version?: string;
	    /**
	     * Query string arguments to add to every request to the search endpoint.<br/>
	     * eg : {'foo':'bar', 'a':'b'}
	     */
	    queryStringArguments?: IStringMap<any>;
	    /**
	     * Specifies that the request (and the Coveo Search API) does not need any kind of authentication.<br/>
	     * This flag is only needed for specific setups when your requests are being blocked by your browser. If your queries are executing correctly, you do not need to bother.<br/>
	     * Setting this flag will prevent the withCredentials option to be set on the XMLHttpRequest, allowing performing cross-domain requests on a server that returns * in the Access-Control-Allow-Origin HTTP header.
	     */
	    anonymous?: boolean;
	    /**
	     * This allows using an OAuth2 or a search token to authenticate against the Search API.
	     */
	    accessToken?: string;
	    /**
	     * Specifies a function that, when called, will arrange for a new search token to be generated.<br/>
	     * It is expected to return a Promise that should be resolved with the new token once it's available.
	     */
	    renewAccessToken?: () => Promise<string>;
	    /**
	     * This is the username part of the credentials used to authenticate with the Search API using Basic Authentication.<br/>
	     * This option should only be used for development purposes. Including secret credentials in an HTML page that is sent to a client browser is not secure.
	     */
	    username?: string;
	    /**
	     * This is the password part of the credentials used to authenticate with the REST API.<br/>
	     * This option should only be used for development purposes. Including secret credentials in an HTML page that is sent to a client browser is not secure.
	     */
	    password?: string;
	    /**
	     * The uri for the Coveo search alerts service. If not specified, will automatically resolve using the restUri otherwise
	     */
	    searchAlertsUri?: string;
	    isGuestUser?: boolean;
	}
	/**
	 * Available options when calling against the {@link SearchEndpoint}
	 */
	interface IEndpointCallOptions {
	    authentication?: string[];
	}
	/**
	 * The `IGetDocumentOptions` interface describes the available options when calling against a
	 * [`SearchEndpoint`]{@link SearchEndpoint} to get an item.
	 */
	interface IGetDocumentOptions extends IEndpointCallOptions {
	}
	/**
	 * The `IViewAsHtmlOptions` interface describes the available options when calling against a
	 * [`SearchEndpoint`]{@link SearchEndpoint} to view an item as an HTMLElement (think: quickview).
	 */
	interface IViewAsHtmlOptions extends IEndpointCallOptions {
	    query?: string;
	    queryObject?: IQuery;
	    requestedOutputSize?: number;
	    contentType?: string;
	}
	interface ISearchEndpoint {
	    options?: ISearchEndpointOptions;
	    getBaseUri(): string;
	    getBaseAlertsUri(): string;
	    getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
	    isJsonp(): boolean;
	    search(query: IQuery, callOptions?: IEndpointCallOptions): Promise<IQueryResults>;
	    getExportToExcelLink(query: IQuery, numberOfResults: number, callOptions?: IEndpointCallOptions): string;
	    getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: IViewAsHtmlOptions): Promise<ArrayBuffer>;
	    getDocument(documentUniqueID: string, callOptions?: IGetDocumentOptions): Promise<IQueryResult>;
	    getDocumentText(documentUniqueID: string, callOptions?: IEndpointCallOptions): Promise<string>;
	    getDocumentHtml(documentUniqueID: string, callOptions?: IViewAsHtmlOptions): Promise<HTMLDocument>;
	    getViewAsHtmlUri(documentUniqueID: string, callOptions?: IViewAsHtmlOptions): string;
	    getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: IViewAsHtmlOptions): string;
	    listFieldValues(request: IListFieldValuesRequest, callOptions?: IEndpointCallOptions): Promise<IIndexFieldValue[]>;
	    listFields(callOptions?: IEndpointCallOptions): Promise<IFieldDescription[]>;
	    extensions(callOptions?: IEndpointCallOptions): Promise<IExtension[]> | Promise<IEndpointError>;
	    tagDocument(taggingRequest: ITaggingRequest, callOptions?: IEndpointCallOptions): Promise<boolean>;
	    getQuerySuggest(request: IQuerySuggestRequest, callOptions?: IEndpointCallOptions): Promise<IQuerySuggestResponse>;
	    rateDocument(ratingRequest: IRatingRequest, callOptions?: IEndpointCallOptions): Promise<boolean>;
	    follow(request: ISubscriptionRequest): Promise<ISubscription>;
	    listSubscriptions(page?: number): Promise<ISubscription[]>;
	    updateSubscription(subscription: ISubscription): Promise<ISubscription>;
	    deleteSubscription(subscription: ISubscription): Promise<ISubscription>;
	    logError(sentryLog: ISentryLog): Promise<boolean>;
	}

}
declare module Coveo {
	interface IListFieldsResult {
	    fields: IFieldDescription[];
	}

}
declare module Coveo {
	class AjaxError implements IEndpointError {
	    message: string;
	    status: number;
	    type: any;
	    name: any;
	    constructor(message: string, status: number);
	}

}
declare module Coveo {
	class MissingAuthenticationError implements IEndpointError {
	    provider: string;
	    type: string;
	    message: string;
	    isMissingAuthentication: boolean;
	    name: string;
	    constructor(provider: string);
	}

}
declare module Coveo {
	class QueryError implements IEndpointError {
	    status: number;
	    message: string;
	    type: string;
	    queryExecutionReport: any;
	    name: string;
	    constructor(errorResponse: IErrorResponse);
	}

}
declare module Coveo {
	class DefaultSearchEndpointOptions implements ISearchEndpointOptions {
	    restUri: string;
	    version: string;
	    queryStringArguments: IStringMap<string>;
	    anonymous: boolean;
	    accessToken: string;
	    renewAccessToken: () => Promise<string>;
	    username: string;
	    password: string;
	    searchAlertsUri: string;
	    isGuestUser: boolean;
	}
	/**
	 * The `SearchEndpoint` class allows you to execute various actions against the Coveo Search API and a Coveo index
	 * (e.g., searching, listing field values, getting the quickview content of an item, etc.).
	 *
	 * This class does trigger any query events directly. Consequently, executing an action with this class does not trigger
	 * a full query cycle for the Coveo components.
	 *
	 * If you wish to have all Coveo components "react" to a query, (and trigger the corresponding query events), use the
	 * [`QueryController`]{@link QueryController} class instead.
	 */
	class SearchEndpoint implements ISearchEndpoint {
	    options: ISearchEndpointOptions;
	    /**
	     * Contains a map of all initialized `SearchEndpoint` instances.
	     *
	     * **Example:**
	     * > `Coveo.SearchEndpoint.endpoints['default']` returns the default endpoint that was created at initialization.
	     * @type {{}}
	     */
	    static endpoints: {
	        [endpoint: string]: SearchEndpoint;
	    };
	    /**
	     * Configures a sample search endpoint on a Coveo Cloud index containing a set of public sources with no secured
	     * content.
	     *
	     * **Note:**
	     * > This method mainly exists for demo purposes and ease of setup.
	     *
	     * @param otherOptions A set of additional options to use when configuring this endpoint.
	     */
	    static configureSampleEndpoint(otherOptions?: ISearchEndpointOptions): void;
	    /**
	     * Configures a sample search endpoint on a Coveo Cloud V2 index containing a set of public sources with no secured
	     * content.
	     *
	     * **Note:**
	     * > This method mainly exists for demo purposes and ease of setup.
	     *
	     * @param otherOptions A set of additional options to use when configuring this endpoint.
	     */
	    static configureSampleEndpointV2(optionsOPtions?: ISearchEndpointOptions): void;
	    /**
	     * Configures a search endpoint on a Coveo Cloud index.
	     * @param organization The organization ID of your Coveo Cloud index.
	     * @param token The token to use to execute query. If not specified, you will likely need to login when querying.
	     * @param uri The URI of the Coveo Cloud REST Search API. By default, this points to the production environment.
	     * @param otherOptions A set of additional options to use when configuring this endpoint.
	     */
	    static configureCloudEndpoint(organization?: string, token?: string, uri?: string, otherOptions?: ISearchEndpointOptions): void;
	    /**
	     * Configures a search endpoint on a Coveo Cloud V2 index.
	     * @param organization The organization ID of your Coveo Cloud V2 index.
	     * @param token The token to use to execute query. If not specified, you will likely need to login when querying.
	     * @param uri The URI of the Coveo Cloud REST Search API. By default, this points to the production environment.
	     * @param otherOptions A set of additional options to use when configuring this endpoint.
	     */
	    static configureCloudV2Endpoint(organization?: string, token?: string, uri?: string, otherOptions?: ISearchEndpointOptions): void;
	    /**
	     * Configures a search endpoint on a Coveo on-premise index.
	     * @param uri The URI of your Coveo Search API endpoint (e.g., `http://myserver:8080/rest/search`)
	     * @param token The token to use to execute query. If not specified, you will likely need to login when querying
	     * (unless your Coveo Search API endpoint is configured using advanced auth options, such as Windows auth or claims).
	     * @param otherOptions A set of additional options to use when configuring this endpoint.
	     */
	    static configureOnPremiseEndpoint(uri: string, token?: string, otherOptions?: ISearchEndpointOptions): void;
	    static removeUndefinedConfigOption(config: ISearchEndpointOptions): ISearchEndpointOptions;
	    static mergeConfigOptions(first: ISearchEndpointOptions, second: ISearchEndpointOptions): ISearchEndpointOptions;
	    logger: Logger;
	    isRedirecting: boolean;
	    protected caller: EndpointCaller;
	    /**
	     * Creates a new `SearchEndpoint` instance.
	     * Uses a set of adequate default options, and merges these with the `options` parameter.
	     * Also creates an [`EndpointCaller`]{@link EndpointCaller} instance and uses it to communicate with the endpoint
	     * internally.
	     * @param options The custom options to apply to the new `SearchEndpoint`.
	     */
	    constructor(options?: ISearchEndpointOptions);
	    reset(): void;
	    /**
	     * Sets a function which allows external code to modify all endpoint call parameters before the browser sends them.
	     *
	     * **Note:**
	     * > This is useful in very specific scenarios where the network infrastructure requires special request headers to be
	     * > added or removed, for example.
	     * @param requestModifier The function.
	     */
	    setRequestModifier(requestModifier: (params: IRequestInfo<any>) => IRequestInfo<any>): void;
	    /**
	     * Gets the base URI of the Search API endpoint.
	     * @returns {string} The base URI of the Search API endpoint.
	     */
	    getBaseUri(): string;
	    /**
	     * Gets the base URI of the search alerts endpoint.
	     * @returns {string} The base URI of the search alerts endpoint.
	     */
	    getBaseAlertsUri(): string;
	    /**
	     * Gets the URI that can be used to authenticate against the given provider.
	     * @param provider The provider name.
	     * @param returnUri The URI to return to after the authentication is completed.
	     * @param message The authentication message.
	     * @param callOptions Additional set of options to use for this call.
	     * @param callParams Options injected by the applied decorators.
	     * @returns {string} The authentication provider URI.
	     */
	    getAuthenticationProviderUri(provider: string, returnUri?: string, message?: string, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): string;
	    /**
	     * Indicates whether the search endpoint is using JSONP internally to communicate with the Search API.
	     * @returns {boolean} `true` in the search enpoint is using JSONP; `false` otherwise.
	     */
	    isJsonp(): boolean;
	    /**
	     * Performs a search on the index and returns a Promise of [`IQueryResults`]{@link IQueryResults}.
	     *
	     * This method slightly modifies the query results by adding additional information to each result (id, state object,
	     * etc.).
	     * @param query The query to execute. Typically, the query object is built using a
	     * [`QueryBuilder`]{@link QueryBuilder}.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<IQueryResults>} A Promise of query results.
	     */
	    search(query: IQuery, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IQueryResults>;
	    /**
	     * Gets a link / URI to download a query result set to the XLSX format.
	     *
	     * **Note:**
	     * > This method does not automatically download the query result set, but rather provides an URI from which to
	     * > download it.
	     * @param query The query for which to get the XLSX result set.
	     * @param numberOfResults The number of results to download.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {string} The download URI.
	     */
	    getExportToExcelLink(query: IQuery, numberOfResults: number, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): string;
	    /**
	     * Gets the raw datastream for an item. This is typically used to get a thumbnail for an item.
	     *
	     * Returns an array buffer.
	     *
	     * **Example:**
	     * ```
	     * let rawBinary = String.fromCharCode.apply(null, new Uint8Array(response));
	     * img.setAttribute('src', 'data:image/png;base64,' + btoa(rawBinary));
	     * ```
	     * @param documentUniqueId Typically, the {@link IQueryResult.uniqueId} on each result.
	     * @param dataStreamType Normally, `$Thumbnail`.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<TResult>|Promise<U>}
	     */
	    getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: IViewAsHtmlOptions, callParams?: IEndpointCallParameters): Promise<ArrayBuffer>;
	    /**
	     * Gets an URL from which it is possible to see the datastream for an item. This is typically used to get a
	     * thumbnail for an item.
	     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
	     * @param dataStreamType Normally, `$Thumbnail`.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {string} The datastream URL.
	     */
	    getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: IViewAsHtmlOptions, callParams?: IEndpointCallParameters): string;
	    /**
	     * Gets a single item, using its `uniqueId`.
	     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<IQueryResult>} A Promise of the item.
	     */
	    getDocument(documentUniqueID: string, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IQueryResult>;
	    /**
	     * Gets the content of a single item, as text (think: quickview).
	     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<string>} A Promise of the item content.
	     */
	    getDocumentText(documentUniqueID: string, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<string>;
	    /**
	     * Gets the content for a single item, as an HTMLDocument (think: quickview).
	     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<HTMLDocument>} A Promise of the item content.
	     */
	    getDocumentHtml(documentUniqueID: string, callOptions?: IViewAsHtmlOptions, callParams?: IEndpointCallParameters): Promise<HTMLDocument>;
	    /**
	     * Gets an URL from which it is possible to see a single item content, as HTML (think: quickview).
	     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {string} The URL.
	     */
	    getViewAsHtmlUri(documentUniqueID: string, callOptions?: IViewAsHtmlOptions, callParams?: IEndpointCallParameters): string;
	    batchFieldValues(request: IListFieldValuesRequest, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IIndexFieldValue[]>;
	    /**
	     * Lists the possible field values for a request.
	     * @param request The request for which to list the possible field values.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<TResult>|Promise<U>} A Promise of the field values.
	     */
	    listFieldValues(request: IListFieldValuesRequest, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IIndexFieldValue[]>;
	    /**
	     * Lists all fields for the index, and returns an array of their descriptions.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<TResult>|Promise<U>} A Promise of the index fields and descriptions.
	     */
	    listFields(callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IFieldDescription[]>;
	    /**
	     * Lists all available query extensions for the search endpoint.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<IExtension[]>} A Promise of the extensions.
	     */
	    extensions(callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IExtension[]>;
	    /**
	     * Rates a single item in the index (granted that collaborative rating is enabled on your index)
	     * @param ratingRequest The item id, and the rating to add.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<boolean>|Promise<T>}
	     */
	    rateDocument(ratingRequest: IRatingRequest, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<boolean>;
	    /**
	     * Tags a single item.
	     * @param taggingRequest The item id, and the tag action to perform.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<boolean>|Promise<T>}
	     */
	    tagDocument(taggingRequest: ITaggingRequest, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<boolean>;
	    /**
	     * Gets a list of query suggestions for a request.
	     * @param request The query, and the number of suggestions to return.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<IQuerySuggestResponse>} A Promise of query suggestions.
	     */
	    getQuerySuggest(request: IQuerySuggestRequest, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IQuerySuggestResponse>;
	    getRevealQuerySuggest(request: IQuerySuggestRequest, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<IQuerySuggestResponse>;
	    /**
	     * Follows an item, or a query result, using the search alerts service.
	     * @param request The subscription details.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<ISubscription>}
	     */
	    follow(request: ISubscriptionRequest, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<ISubscription>;
	    /**
	     * Gets a Promise of an array of the current subscriptions.
	     * @param page The page of the subscriptions.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {any}
	     */
	    listSubscriptions(page: number, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<ISubscription[]>;
	    /**
	     * Updates a subscription with new parameters.
	     * @param subscription The subscription to update with new parameters.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<ISubscription>}
	     */
	    updateSubscription(subscription: ISubscription, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<ISubscription>;
	    /**
	     * Deletes a subscription.
	     * @param subscription The subscription to delete.
	     * @param callOptions An additional set of options to use for this call.
	     * @param callParams The options injected by the applied decorators.
	     * @returns {Promise<ISubscription>}
	     */
	    deleteSubscription(subscription: ISubscription, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<ISubscription>;
	    logError(sentryLog: ISentryLog, callOptions?: IEndpointCallOptions, callParams?: IEndpointCallParameters): Promise<boolean>;
	    nuke(): void;
	    protected createEndpointCaller(): void;
	    buildSearchAlertsUri(path: string): string;
	}

}
declare module Coveo {
	function defaultLanguage(): void;
	function setLanguageAfterPageLoaded(): void;

}
declare module Coveo {

}
declare module Coveo {
	/**
	 * A numeric spinner widget with standard styling.
	 */
	class NumericSpinner implements IFormWidget, IFormWidgetSettable {
	    onChange: (numericSpinner: NumericSpinner) => void;
	    min: number;
	    max: number;
	    name: string;
	    static doExport(): void;
	    /**
	     * Creates a new `NumericSpinner`.
	     * @param onChange The function to call when the numeric spinner value changes. This function takes the current
	     * `NumericSpinner` instance as an argument.
	     * @param min The minimum possible value of the numeric spinner.
	     * @param max The maximum possible value of the numeric spinner.
	     */
	    constructor(onChange?: (numericSpinner: NumericSpinner) => void, min?: number, max?: number);
	    /**
	     * Resets the numeric spinner.
	     */
	    reset(): void;
	    /**
	     * Gets the element on which the numeric spinner is bound.
	     * @returns {HTMLInputElement} The numeric spinner element.
	     */
	    getElement(): HTMLElement;
	    /**
	     * Gets the numeric spinner currently selected value (as a string).
	     * @returns {string} The numeric spinner value.
	     */
	    getValue(): string;
	    /**
	     * Gets the numeric spinner currently selected value (as an integer).
	     * @returns {number} The numeric spinner value.
	     */
	    getIntValue(): number;
	    /**
	     * Gets the numeric spinner currently selected value (as a float).
	     * @returns {number} The numeric spinner value.
	     */
	    getFloatValue(): number;
	    /**
	     * Sets the numeric spinner value.
	     *
	     * @param value The value to set the numeric spinner to. If `value` is greater than [`max`]{@link NumericSpinner.max},
	     * this method sets the numeric spinner to its maximum value instead. Likewise, if value is lesser than
	     * [`min`]{@link NumericSpinner.min}, the method sets the numeric spinner to its minimum value.
	     */
	    setValue(value: number): void;
	    /**
	     * Gets the element on which the numeric spinner is bound.
	     * @returns {HTMLInputElement} The numeric spinner element.
	     */
	    build(): HTMLElement;
	}

}
declare module Coveo {
	/**
	 * A date picker widget with standard styling.
	 */
	class DatePicker implements IFormWidget, IFormWidgetSettable {
	    onChange: (datePicker: DatePicker) => void;
	    name: string;
	    static doExport: () => void;
	    /**
	     * Creates a new `DatePicker`.
	     * @param onChange The function to call when a new value is selected in the date picker. This function takes the
	     * current `DatePicker` instance as an argument.
	     */
	    constructor(onChange?: (datePicker: DatePicker) => void);
	    /**
	     * Resets the date picker.
	     */
	    reset(): void;
	    /**
	     * Gets the element on which the date picker is bound.
	     * @returns {HTMLInputElement} The date picker element.
	     */
	    getElement(): HTMLInputElement;
	    /**
	     * Gets the currently selected value in the date picker.
	     * @returns {string} A textual representation of the currently selected value (`YYYY-MM-DD` format).
	     */
	    getValue(): string;
	    /**
	     * Get the currently selected value in the date picker, as a Date object
	     * @returns {Date} A Date object for the current value, or null if the date picker was reset or a date has not been selected initially.
	     */
	    getDateValue(): Date;
	    /**
	     * Sets the date picker value.
	     * @param date The value to set the date picker to. Must be a
	     * [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) object.
	     */
	    setValue(date: Date): void;
	    /**
	     * Gets the element on which the date picker is bound.
	     * @returns {HTMLInputElement} The date picker element.
	     */
	    build(): HTMLInputElement;
	}

}
declare module Coveo {
	/**
	 * A dropdown widget with standard styling.
	 */
	class Dropdown implements IFormWidget, IFormWidgetSettable {
	    onChange: (dropdown: Dropdown) => void;
	    protected listOfValues: string[];
	    static doExport(): void;
	    /**
	     * Creates a new `Dropdown`.
	     * @param onChange The function to call when the dropdown selected value changes. This function takes the current
	     * `Dropdown` instance as an argument.
	     * @param listOfValues The selectable values to display in the dropdown.
	     * @param getDisplayValue An optional function to modify the display values, rather than using the values as they
	     * appear in the `listOfValues`.
	     * @param label The label to display for the dropdown.
	     */
	    constructor(onChange: (dropdown: Dropdown) => void, listOfValues: string[], getDisplayValue?: (string) => string, label?: string);
	    /**
	     * Resets the dropdown.
	     */
	    reset(): void;
	    setId(id: string): void;
	    /**
	     * Gets the element on which the dropdown is bound.
	     * @returns {HTMLElement} The dropdown element.
	     */
	    getElement(): HTMLElement;
	    /**
	     * Gets the currently selected dropdown value.
	     * @returns {string} The currently selected dropdown value.
	     */
	    getValue(): string;
	    /**
	     * Selects a value from the dropdown [`listofValues`]{@link Dropdown.listOfValues}.
	     * @param index The 0-based index position of the value to select in the `listOfValues`.
	     * @param executeOnChange Indicates whether to execute the [`onChange`]{@link Dropdown.onChange} function when this
	     * method changes the dropdown selection.
	     */
	    select(index: number, executeOnChange?: boolean): void;
	    /**
	     * Gets the element on which the dropdown is bound.
	     * @returns {HTMLElement} The dropdown element.
	     */
	    build(): HTMLElement;
	    /**
	     * Sets the dropdown value.
	     * @param value The value to set the dropdown to.
	     */
	    setValue(value: string): void;
	}

}
declare module Coveo {
	/**
	 * A radio button widget with standard styling.
	 */
	class RadioButton implements IFormWidgetWithLabel, IFormWidgetSelectable {
	    onChange: (radioButton: RadioButton) => void;
	    label: string;
	    name: any;
	    protected element: HTMLElement;
	    static doExport(): void;
	    /**
	     * Creates a new `RadioButton`.
	     * @param onChange The function to call when the radio button value changes. This function takes the current
	     * `RadioButton` instance as an argument.
	     * @param label The label to display next to the radio button.
	     * @param name The value to set the `input` HTMLElement `name` attribute to.
	     */
	    constructor(onChange: (radioButton: RadioButton) => void, label: string, name: any);
	    /**
	     * Resets the radio button.
	     */
	    reset(): void;
	    /**
	     * Select the radio button
	     * @param triggerChange will trigger change event if specified and the radio button is not already selected
	     */
	    select(triggerChange?: boolean): void;
	    /**
	     * Gets the element on which the radio button is bound.
	     * @returns {HTMLElement} The radio button element.
	     */
	    build(): HTMLElement;
	    /**
	     * Gets the element on which the radio button is bound.
	     * @returns {HTMLElement} The radio button element.
	     */
	    getElement(): HTMLElement;
	    getValue(): string;
	    /**
	     * Indicates whether the radio button is selected.
	     * @returns {boolean} `true` if the radio button is selected, `false` otherwise.
	     */
	    isSelected(): boolean;
	    /**
	     * Gets the `input` element (the radio button itself).
	     * @returns {HTMLInputElement} The `input` element.
	     */
	    getRadio(): HTMLInputElement;
	    /**
	     * Gets the radio button [`label`]{@link RadioButton.label} element.
	     * @returns {HTMLLabelElement} The `label` element.
	     */
	    getLabel(): HTMLLabelElement;
	}

}
declare module Coveo {
	/**
	 * The basic types of form available to build an advanced search section.
	 */
	type BaseFormTypes = NumericSpinner | DatePicker | Dropdown | TextInput | RadioButton;
	interface IAdvancedSearchInput {
	    build: () => HTMLElement;
	    updateQuery: (queryBuilder: QueryBuilder) => void;
	    reset: () => void;
	}
	interface IAdvancedSearchPrebuiltInput {
	    name: string;
	    parameters?: IFieldInputParameters;
	}
	interface IFieldInputParameters {
	    name: string;
	    field: string;
	}
	/**
	 * Describe a section in the {@link AdvancedSearch} component
	 */
	interface IAdvancedSearchSection {
	    /**
	     * The name of the section.
	     */
	    name: string;
	    /**
	     * The array of inputs to populate.
	     *
	     * External code should only push inputs that match the type {@link BaseFormTypes}.
	     */
	    inputs: (IAdvancedSearchInput | IAdvancedSearchPrebuiltInput)[];
	}
	/**
	 * Describe a section populated by external code, using the {@link AdvancedSearchEvents.buildingAdvancedSearch}
	 */
	interface IExternalAdvancedSearchSection extends IAdvancedSearchSection {
	    /**
	     * An handler to execute every time a new query is launched.
	     *
	     * The handler will receive the inputs used to build the external section, as well as the queryBuilder object to allow to modify the query.
	     * @param inputs
	     * @param queryBuilder
	     */
	    updateQuery: (inputs: BaseFormTypes[], queryBuilder: QueryBuilder) => void;
	    /**
	     * The content to add to the external section, as an HTMLElement.
	     */
	    content: HTMLElement;
	}

}
declare module Coveo {
	/**
	 * Argument sent to all handlers bound on {@link AdvancedSearchEvents.buildingAdvancedSearch}
	 */
	interface IBuildingAdvancedSearchEventArgs {
	    /**
	     * Sections which external code can populate by pushing into this array.
	     */
	    sections: IExternalAdvancedSearchSection[];
	    /**
	     * An easy way to execute a new query.
	     * @param options
	     */
	    executeQuery: (options: IQueryOptions) => Promise<IQueryResults>;
	}
	/**
	 * This static class is there to contains the different string definition for all the events related to the {@link AdvancedSearch} component.
	 */
	class AdvancedSearchEvents {
	    /**
	     * Triggered when the {@link AdvancedSearch} component is being built.
	     *
	     * Allows external code to add new sections in the **Advanced Search** panel.
	     *
	     * All bound handlers receive {@link IBuildingAdvancedSearchEventArgs} as an argument
	     *
	     * @type {string}
	     */
	    static buildingAdvancedSearch: string;
	    static executeAdvancedSearch: string;
	}

}
declare module Coveo {
	class ColorUtils {
	    static hsvToRgb(h: any, s: any, v: any): number[];
	    static rgbToHsv(r: any, g: any, b: any): any[];
	}

}
declare module Coveo {
	interface ICurrencyToStringOptions {
	    decimals?: number;
	    symbol?: string;
	}
	class CurrencyUtils {
	    static currencyToString(value: number, options?: ICurrencyToStringOptions): string;
	}

}
declare module Coveo {
	class EmailUtils {
	    static splitSemicolonSeparatedListOfEmailAddresses(addresses: string): string[];
	    static emailAddressesToHyperlinks(addresses: string[], companyDomain?: string, me?: string, lengthLimit?: number, truncateName?: boolean): string;
	    static buildEmailAddressesAndOthers(excessHyperLinks: string[]): string;
	    static parseEmail(email: string): string[];
	}

}
declare module Coveo {
	interface IStringHole {
	    begin: number;
	    size: number;
	    replacementSize: number;
	}
	class StringAndHoles {
	    value: string;
	    holes: IStringHole[];
	    static SHORTEN_END: string;
	    static WORD_SHORTER: number;
	    static replace(str: string, find: string, replace: string): StringAndHoles;
	    /**
	     * Shorten the passed path intelligently (path-aware).
	     * Works with *local paths* and *network paths*
	     * @param uriOrig The path to shorten
	     * @param length The length to which the path will be shortened.
	     */
	    static shortenPath(uriOrig: string, length: number): StringAndHoles;
	    /**
	     * Shorten the passed string.
	     * @param toShortenOrig The string to shorten
	     * @param length The length to which the string will be shortened.
	     * @param toAppend The string to append at the end (usually, it is set to '...')
	     */
	    static shortenString(toShortenOrig: string, length?: number, toAppend?: string): StringAndHoles;
	    /**
	     * Shorten the passed URI intelligently (path-aware).
	     * @param toShortenOrig The URI to shorten
	     * @param length The length to which the URI will be shortened.
	     */
	    static shortenUri(uri: string, length: number): StringAndHoles;
	}
	class HighlightUtils {
	    /**
	     * Highlight the passed string using specified highlights and holes.
	     * @param content The string to highlight items in.
	     * @param highlights The highlighted positions to highlight in the string.
	     * @param holes Possible holes which are used to skip highlighting.
	     * @param cssClass The css class to use on the highlighting `span`.
	     */
	    static highlightString(content: string, highlights: IHighlight[], holes: IStringHole[], cssClass: string): string;
	}

}
declare module Coveo {
	/**
	 * Options for building an `<a>` tag.
	 */
	interface IAnchorUtilsOptions {
	    /**
	     * The tag's text content.
	     */
	    text?: string;
	    /**
	     * The target (`href` attribute).
	     */
	    target?: string;
	    /**
	     * The CSS class(es) of the tag.
	     */
	    class?: string;
	}
	/**
	 * Options for building an `<img>` tag.
	 */
	interface IImageUtilsOptions {
	    /**
	     * The alternative text for the image (`alt` attribute).
	     */
	    alt?: string;
	    /**
	     * The height of the image
	     */
	    height?: string;
	    /**
	     * The width of the image
	     */
	    width?: string;
	}
	class HTMLUtils {
	    static buildAttributeString(options: any): string;
	}
	class AnchorUtils {
	    static buildAnchor(href: string, options?: IAnchorUtilsOptions): string;
	}
	class ImageUtils {
	    static buildImage(src?: string, options?: IImageUtilsOptions): string;
	    static selectImageFromResult(result: IQueryResult): HTMLElement;
	    static buildImageWithDirectSrcAttribute(endpoint: SearchEndpoint, result: IQueryResult): void;
	    static buildImageWithBase64SrcAttribute(endpoint: SearchEndpoint, result: IQueryResult): void;
	    static buildImageFromResult(result: IQueryResult, endpoint: SearchEndpoint, options?: IImageUtilsOptions): string;
	}

}
declare module Coveo {
	enum OS_NAME {
	    WINDOWS = 0,
	    MACOSX = 1,
	    UNIX = 2,
	    LINUX = 3,
	    UNKNOWN = 4,
	}
	class OSUtils {
	    static get(nav?: Navigator): any;
	}

}
declare module Coveo {
	/**
	 * The possible options when highlighting a stream.
	 */
	interface IStreamHighlightOptions {
	    /**
	     * The css class that the highlight will generate.
	     * Defaults to `coveo-highlight`.
	     */
	    cssClass?: string;
	    /**
	     * The regex flags that should be applied to generate the highlighting.
	     * Defaults to `gi`.
	     */
	    regexFlags?: string;
	}
	class StreamHighlightUtils {
	    static highlightStreamHTML(stream: string, termsToHighlight: {
	        [originalTerm: string]: string[];
	    }, phrasesToHighlight: {
	        [phrase: string]: {
	            [originalTerm: string]: string[];
	        };
	    }, options?: IStreamHighlightOptions): string;
	    static highlightStreamText(stream: string, termsToHighlight: {
	        [originalTerm: string]: string[];
	    }, phrasesToHighlight: {
	        [phrase: string]: {
	            [originalTerm: string]: string[];
	        };
	    }, options?: IStreamHighlightOptions): string;
	}

}
declare module Coveo {
	class TableTemplate extends TemplateList {
	    instantiateRoleToString(role: TemplateRole): string;
	    instantiateRoleToElement(role: TemplateRole): Promise<HTMLElement>;
	    protected getFallbackTemplate(): Template;
	    hasTemplateWithRole(role: TemplateRole): Template;
	}

}
declare module Coveo {
	class ResponsiveDefaultResultTemplate implements IResponsiveComponent {
	    coveoRoot: Dom;
	    ID: string;
	    static init(root: HTMLElement, component: ResultList, options: IResponsiveComponentOptions): void;
	    constructor(coveoRoot: Dom, ID: string, options: IResponsiveComponentOptions, responsiveDropdown?: ResponsiveDropdown);
	    registerComponent(accept: ResultList): boolean;
	    handleResizeEvent(): void;
	}

}
declare module Coveo {
	class ResultListRenderer {
	    protected resultListOptions: IResultListOptions;
	    protected autoCreateComponentsFn: Function;
	    constructor(resultListOptions: IResultListOptions, autoCreateComponentsFn: Function);
	    renderResults(resultElements: HTMLElement[], append: boolean, resultDisplayedCallback: (result: IQueryResult, resultElem: HTMLElement) => any): Promise<void>;
	    protected getStartFragment(resultElements: HTMLElement[], append: boolean): Promise<DocumentFragment>;
	    protected getEndFragment(resultElements: HTMLElement[], append: boolean): Promise<DocumentFragment>;
	}

}
declare module Coveo {
	class ResultListTableRenderer extends ResultListRenderer {
	    protected resultListOptions: IResultListOptions;
	    protected autoCreateComponentsFn: Function;
	    constructor(resultListOptions: IResultListOptions, autoCreateComponentsFn: Function);
	    getStartFragment(resultElements: HTMLElement[], append: boolean): Promise<DocumentFragment>;
	    getEndFragment(resultElements: HTMLElement[], append: boolean): Promise<DocumentFragment>;
	}

}
declare module Coveo {
	class ResultListCardRenderer extends ResultListRenderer {
	    getEndFragment(resultElements: HTMLElement[]): Promise<DocumentFragment>;
	}

}
declare module Coveo {
	interface IResultListOptions {
	    resultContainer?: HTMLElement;
	    resultTemplate?: Template;
	    resultOptions?: {};
	    waitAnimationContainer?: HTMLElement;
	    enableInfiniteScroll?: boolean;
	    infiniteScrollPageSize?: number;
	    infiniteScrollContainer?: HTMLElement | Window;
	    waitAnimation?: string;
	    mobileScrollContainer?: HTMLElement;
	    enableInfiniteScrollWaitingAnimation?: boolean;
	    fieldsToInclude?: IFieldOption[];
	    autoSelectFieldsToInclude?: boolean;
	    layout?: string;
	}
	/**
	 * The ResultList component is responsible for displaying the results of the current query using one or more result
	 * templates (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 *
	 * This component supports many additional features, such as infinite scrolling.
	 */
	class ResultList extends Component {
	    element: HTMLElement;
	    options: IResultListOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the ResultList
	     * @componentOptions
	     */
	    static options: IResultListOptions;
	    static resultCurrentlyBeingRendered: IQueryResult;
	    currentlyDisplayedResults: IQueryResult[];
	    /**
	     * Creates a new ResultList component. Binds various event related to queries (e.g., on querySuccess ->
	     * renderResults). Binds scroll event if {@link ResultList.options.enableInfiniteScroll} is `true`.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the ResultList component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param elementClassId The class that this component should instantiate. Components that extend the base ResultList
	     * use this. Default value is `CoveoResultList`.
	     */
	    constructor(element: HTMLElement, options?: IResultListOptions, bindings?: IComponentBindings, elementClassId?: string);
	    /**
	     * Get the fields needed to be automatically included in the query for this result list.
	     * @returns {string[]}
	     */
	    getAutoSelectedFieldsToInclude(): string[];
	    /**
	     * Empties the current result list content and appends the given array of HTMLElement.
	     *
	     * Can append to existing elements in the result list, or replace them.
	     *
	     * Triggers the `newResultsDisplayed` and `newResultDisplayed` events.
	     * @param resultsElement
	     * @param append
	     */
	    renderResults(resultElements: HTMLElement[], append?: boolean): Promise<void>;
	    /**
	     * Builds and returns an array of HTMLElement with the given result set.
	     * @param results the result set to build an array of HTMLElement from.
	     */
	    buildResults(results: IQueryResults): Promise<HTMLElement[]>;
	    /**
	     * Builds and returns an HTMLElement for the given result.
	     * @param result the result to build an HTMLElement from.
	     * @returns {HTMLElement}
	     */
	    buildResult(result: IQueryResult): Promise<HTMLElement>;
	    /**
	     * Executes a query to fetch new results. After the query returns, renders the new results.
	     *
	     * Asserts that there are more results to display by verifying whether the last query has returned as many results as
	     * requested.
	     *
	     * Asserts that the ResultList is not currently fetching results.
	     * @param count The number of results to fetch and display.
	     */
	    displayMoreResults(count: number): Promise<IQueryResults>;
	    /**
	     * Gets the list of currently displayed result.
	     * @returns {IQueryResult[]}
	     */
	    getDisplayedResults(): IQueryResult[];
	    /**
	     * Gets the list of currently displayed result HTMLElement.
	     * @returns {HTMLElement[]}
	     */
	    getDisplayedResultsElements(): HTMLElement[];
	    enable(): void;
	    disable(): void;
	    protected autoCreateComponentsInsideResult(element: HTMLElement, result: IQueryResult): IInitResult;
	    protected triggerNewResultDisplayed(result: IQueryResult, resultElement: HTMLElement): void;
	    protected triggerNewResultsDisplayed(): void;
	    hasPotentiallyMoreResultsToDisplay(): boolean;
	}

}
declare module Coveo {
	/**
	 * The core template helpers provided by default.
	 *
	 * Example usage:
	 *
	 * ### HTML
	 * ```
	 * <div class="CoveoFieldValue" data-helper="helperName" data-helper-options-optionName="option-value"></div>
	 * ```
	 *
	 * ### Underscore
	 * ```
	 * <%= helperName(argument1, argument2) %>
	 * ```
	 */
	interface ICoreHelpers {
	    /**
	     * Shortens a string so that its length does not exceed a specific number of
	     * characters. An ellipsis is appended to the string if it exceeds the
	     * maximum length.
	     *
	     * - `value`: The string to shorten.
	     * - `length`: The maximum length of the resulting string.
	     * - `highlights`: Optional. If provided, the string will be highlighted
	     *   using this highlight information.
	     * - `cssClass`: Optional. When highlighting, the name of the CSS class to use.
	     */
	    shorten: (content: string, length: number, highlights?: IHighlight[], cssClass?: string) => string;
	    /**
	     * Shortens a string using an algorithm suitable for file paths. The helper
	     * will insert an ellipsis in the string where text has been removed when
	     * the path exceeds the maximum length.
	     *
	     * - `value`: The path to shorten.
	     * - `length`: The maximum length of the resulting string.
	     * - `highlights`: Optional. If provided, the string will be highlighted using
	     *   this highlight information.
	     * - `cssClass`: Optional. When highlighting, the name of the CSS class to use.
	     */
	    shortenPath: (content: string, length: number, highlights?: IHighlight[], cssClass?: string) => string;
	    /**
	     * Shortens a string using an algorithm suitable for URIs. The helper will
	     * insert an ellipsis in the string where text has been removed when the URI
	     * exceeds the maximum length.
	     *
	     * - `value`: The URI to shorten.
	     * - `length`: The maximum length of the resulting string.
	     * - `highlights`: Optional. If provided, the string will be highlighted
	     *   using this highlight information.
	     * - `cssClass`: Optional. When highlighting, the name of the CSS class to use.
	     */
	    shortenUri: (content: string, length: number, highlights?: IHighlight[], cssClass?: string) => string;
	    /**
	     * Highlights a string using the provided highlight information.
	     *
	     * - `highlights`: The highlight information to use.
	     * - `cssClass`: Optional. The name of the CSS class to use for highlighting.
	     */
	    highlight: (content: string, highlights?: IHighlight[], cssClass?: string) => string;
	    /**
	     * This helper highlights the provided terms in a given string.<br/>
	     * By default, the terms to highlight are the current query and the
	     * associated stemming words from the index.
	     * The only required parameter is the content, which specify the string that needs to be highlighted.
	     * The other parameters will normally be automatically resolved for you from the current result object.
	     *
	     * - `content`: The string content to highlight
	     * - `termsToHighlight`: Optional. The terms to highlight (see {@link IHighlightTerm})
	     * - `phraseToHighlight`: Optional. The phrases to highlight (see {@link IHighlightPhrase})
	     * - `options`: Optional. The options defined below as {@link IStreamHighlightOptions}
	     */
	    highlightStreamText: (content: string, termsToHighlight: IHighlightTerm, phrasesToHighlight: IHighlightPhrase, options?: IStreamHighlightOptions) => string;
	    /**
	     * This helper operates exactly like the {@link highlightStreamText} helper, except
	     * that it should be used to highlight HTML content. The helper takes care
	     * of not highlighting the HTML markup.
	     *
	     * - `content`: The string content to highlight
	     * - `termsToHighlight`: Optional. The terms to highlight (see {@link IHighlightTerm})
	     * - `phraseToHighlight`: Optional. The phrases to highlight (see {@link IHighlightPhrase})
	     * - `options`: Optional. The options defined below as {@link IStreamHighlightOptions}
	     */
	    highlightStreamHTML: (content: string, termsToHighlight: IHighlightTerm, phrasesToHighlight: IHighlightPhrase, options?: IStreamHighlightOptions) => string;
	    /**
	     * Formats a numeric value using the format string.
	     *
	     * - `value`: The numeric value to format.
	     * - `format`: The format string to use. The options available are defined by
	     *   the [Globalize](https://github.com/klaaspieter/jquery-global#numbers) library.
	     */
	    number: (content: string, format: string) => string;
	    /**
	     * Formats a date value to a date-only string using the specified options.
	     *
	     * - `value`: The Date value to format.
	     * - `options`: The options to use (see IDateToStringOptions).
	     */
	    date: (content: any, options?: IDateToStringOptions) => string;
	    /**
	     * Formats a date value to a time-only string using the sepcified options.
	     *
	     * - `value`: The Date value to format.
	     * - `options`: The options to use (see IDateToStringOptions).
	     */
	    time: (content: any, options?: IDateToStringOptions) => string;
	    /**
	     * Formats a date value to a date and time string using the specified
	     * options.
	     *
	     * - `value`: The Date value to format.
	     * - `options`: The options to use (see IDateToStringOptions).
	     */
	    dateTime: (content: any, options?: IDateToStringOptions) => string;
	    /**
	     * Formats a currency value to a string using the specified options.
	     *
	     * - `value`: The number value to format.
	     * - `options`: The options to use (see ICurrencyToStringOptions).
	     */
	    currency: (content: any, options?: ICurrencyToStringOptions) => string;
	    /**
	     * Formats a date value to a date and time string using options suitable for
	     * email dates
	     *
	     * - `value`: The Date value to format.
	     * - `options`: The options to use (see IDateToStringOptions).
	     */
	    emailDateTime: (content: any, options?: IDateToStringOptions) => string;
	    /**
	     * Renders one or several email values in `mailto:` hyperlinks.
	     *
	     * - `value`: The string or array of string that contains a list of semicolon-separated email
	     *   values. When multiple values are passed, each value is displayed in a
	     *   separate hyperlink.
	     * - `companyDomain`: The string that contains your own domain (e.g.:
	     *   coveo.com). When specified, this parameter allows email addresses
	     *   coming from your own domain to be displayed in a shortened format
	     *   (e.g.: Full Name), whereas email addresses coming from an external
	     *   domain will be displayed in an extended format (e.g.: Full Name
	     *   (domain.com)). If this parameter is not specified, then the shortened
	     *   format will automatically be used.
	     * - `me`: The string that contains the current username. If it is
	     *   specified, then the email address containing the current username will
	     *   be replaced by the localized string 'Me'.
	     * - `lengthLimit`: The number of email addresses that you want to display
	     *   before an ellipse is added (e.g.: 'From Joe, John and 5 others').<br/>
	     *   The default value is 2.
	     * - `truncateName`: When the username is available from the email address,
	     *   then you can specify if you want to truncate the full name. (e.g.:
	     *   'John S.' instead of 'John Smith').<br/>
	     *   The default value is `false`.
	     */
	    email: (value: string | string[], companyDomain?: string, me?: string, lengthLimit?: number, truncateName?: boolean) => string;
	    /**
	     * Formats a clickable HTML link (`<a>`).
	     *
	     * - `href`: The link URI
	     * - `options`: The options to use (see {@link IAnchorUtilsOptions})
	     */
	    anchor: (href: string, options?: IAnchorUtilsOptions) => string;
	    /**
	     * Formats an HTML image tag (`<img>`).
	     *
	     * - `src`: The image source URI
	     * - `options`: The options to use (see {@link IImageUtilsOptions})
	     */
	    image: (src: string, options?: IImageUtilsOptions) => string;
	    /**
	     * Formats an HTML image tag (`<img>`), and automatically uses the result
	     * object to query the REST API to get the thumbnail for this result. For
	     * example, this can be used to great effect when designing a template
	     * showing users or preview of files.
	     * - `result`: The current result object inside your template. In
	     *   underscore, it is referenced as `obj`. Optional, by default the result
	     *   will be resolved automatically from your current template function (
	     *   Meaning the nearest result in the current call stack execution inside
	     *   your template)
	     * - `endpoint`: Optional. The name of the endpoint to use for your
	     *   thumbnail. Default is default.
	     * - `options`: The options to use (see {@link IImageUtilsOptions}).
	     */
	    thumbnail: (result?: IQueryResult, endpoint?: string, options?: IImageUtilsOptions) => string;
	    /**
	     * Generates an icon based on the file type of the current result. The icon
	     * will be contained inside a `<span>` element with the appropriate CSS
	     * class.
	     *
	     * - `result`: The current result object inside your template. In
	     *   underscore, it is referenced as `obj`. *Optional*, by default the result
	     *   will be resolved automatically from your current template function (
	     *   Meaning the nearest result in the current call stack execution inside
	     *   your template)
	     * - `options`: The options to use (see {@link IIconOptions}).
	     */
	    fromFileTypeToIcon: (result?: IQueryResult, options?: any) => string;
	    /**
	     * Loads a partial template in the current template, by passing the ID of
	     * the template to load, the condition for which this template should be
	     * loaded, and the context object (the object that the loaded template will
	     * use as its data). By default, the context object will be the same as the
	     * template that called this helper function. So, for example, in a
	     * ResultList Component, the contextObject would, by default, be the Query
	     * Results.
	     *
	     * - `templateId`: the ID of the template to load.
	     * - `condition`: The boolean condition to determine if this template should
	     *   load for this result set. Most of the time this would be a condition of
	     *   the type if raw.somefield == 'something'.
	     * - `contextObject`: The object that should be used by the loaded template
	     *   as its contextObject.
	     */
	    loadTemplate: (templateId: string, condition?: boolean, contextObject?: any) => string;
	    /**
	     * Given a number, either in millisecond or second, convert to a HH:MM:SS format.
	     *
	     * eg:
	     *
	     * `timeSpan(1, {isMilliseconds: false}) => '00:01'`
	     *
	     * `timeSpan(1000, {isMilliseconds: true}) => '00:01'`
	     *
	     * - `value`: The number to convert to a timespan
	     * - `options` : The options to use (see {@link ITimeSpanUtilsOptions})
	     */
	    timeSpan: (value: number, options: ITimeSpanUtilsOptions) => string;
	    /**
	     * Given a number, which represent a file size in bytes, format the value into a logical unit size.
	     *
	     * eg:
	     *
	     * `size(1024) => 1024 B`
	     *
	     * `size(1025) => 1 KB`
	     *
	     * `size(10240) => 10 KB`
	     */
	    size: (value: number, options?: ISizeOptions) => string;
	    /**
	     * Given a filetype value, try to return a translated and human readable version.
	     *
	     * If the filetype is known and recognized by the framework, a translated value will be returned.
	     *
	     * eg:
	     *
	     * `translatedCaption('doc') => Document`
	     *
	     * `translatedCaption('xls') => Spreadsheet Document`
	     */
	    translatedCaption: (value: string) => string;
	    /**
	     * Replace all carriage return in a string by a &lt;br /&gt; tag
	     */
	    encodeCarriageReturn: (value: string) => string;
	    /**
	     * Detect if the results is being rendered in a mobile device.
	     *
	     * If it's not a mobile device, the helper return null ;
	     *
	     * If it's a mobile device, return the type of device (Android, iPhone, iPad) etc.
	     */
	    isMobileDevice: () => string;
	}
	/**
	 * Available options for the size templateHelpers.
	 */
	interface ISizeOptions {
	    /**
	     * The base into which to format the value.
	     */
	    base?: number;
	    /**
	     * The precision to use to format the size.
	     */
	    precision?: number;
	}
	class CoreHelpers {
	    constructor();
	    /**
	     * For backward compatibility reason, the "global" template helper should be available under the
	     * coveo namespace.
	     * @param scope
	     */
	    static exportAllHelpersGlobally(scope: IStringMap<any>): void;
	}

}
declare module Coveo {
	interface IMenuItem {
	    text: string;
	    className: string;
	    tooltip?: string;
	    index?: number;
	    onOpen: () => void;
	    onClose?: () => void;
	    svgIcon?: string;
	    svgIconClassName?: string;
	}

}
declare module Coveo {
	interface ISettingsPopulateMenuArgs {
	    settings: Settings;
	    menuData: IMenuItem[];
	}
	interface ISettingsOptions {
	    menuDelay: number;
	}
	/**
	 * The Settings component renders a **Settings** button that the end user can click to access a popup menu from which
	 * it is possible to perform several contextual actions. The usual location of the **Settings** button in the page is to
	 * the right of the {@link Searchbox}.
	 *
	 * This component can reference several components to populate its popup menu:
	 * - {@link AdvancedSearch}
	 * - {@link ExportToExcel}
	 * - {@link PreferencesPanel} (see also {@link ResultsFiltersPreferences} and {@link ResultsPreferences})
	 * - {@link SearchAlerts} (see also {@link SearchAlertsMessage})
	 * - {@link ShareQuery}
	 */
	class Settings extends Component {
	    element: HTMLElement;
	    options: ISettingsOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for Settings
	     * @componentOptions
	     */
	    static options: ISettingsOptions;
	    /**
	     * Creates a new Settings component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Settings component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: ISettingsOptions, bindings?: IComponentBindings);
	    /**
	     * Opens the **Settings** popup menu.
	     */
	    open(): void;
	    /**
	     * Closes the **Settings** popup menu.
	     */
	    close(): void;
	}

}
declare module Coveo {
	class KeywordsInput implements IAdvancedSearchInput {
	    inputName: string;
	    root: HTMLElement;
	    protected input: TextInput;
	    constructor(inputName: string, root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    setValue(value: string): void;
	    getValue(): string;
	    clear(): void;
	    updateQuery(queryBuilder: QueryBuilder): void;
	    protected onChange(): void;
	}

}
declare module Coveo {
	class AllKeywordsInput extends KeywordsInput {
	    root: HTMLElement;
	    constructor(root: HTMLElement);
	}

}
declare module Coveo {
	class ExactKeywordsInput extends KeywordsInput {
	    root: HTMLElement;
	    constructor(root: HTMLElement);
	    getValue(): string;
	}

}
declare module Coveo {
	class AnyKeywordsInput extends KeywordsInput {
	    root: HTMLElement;
	    constructor(root: HTMLElement);
	    getValue(): string;
	}

}
declare module Coveo {
	class NoneKeywordsInput extends KeywordsInput {
	    root: HTMLElement;
	    constructor(root: HTMLElement);
	    getValue(): string;
	}

}
declare module Coveo {
	abstract class DateInput implements IAdvancedSearchInput {
	    inputName: string;
	    root: HTMLElement;
	    protected element: HTMLElement;
	    constructor(inputName: string, root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    getElement(): HTMLElement;
	    abstract getValue(): string;
	    isSelected(): boolean;
	    updateQuery(queryBuilder: QueryBuilder): void;
	    protected getRadio(): HTMLInputElement;
	    protected onChange(): void;
	}

}
declare module Coveo {
	class AnytimeDateInput extends DateInput {
	    root: HTMLElement;
	    constructor(root: HTMLElement);
	    getValue(): any;
	    build(): HTMLElement;
	}

}
declare module Coveo {
	class InTheLastDateInput extends DateInput {
	    root: HTMLElement;
	    dropdown: Dropdown;
	    spinner: NumericSpinner;
	    constructor(root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    getValue(): string;
	}

}
declare module Coveo {
	class BetweenDateInput extends DateInput {
	    root: HTMLElement;
	    firstDatePicker: DatePicker;
	    secondDatePicker: DatePicker;
	    constructor(root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    getValue(): string;
	}

}
declare module Coveo {
	class DocumentInput implements IAdvancedSearchInput {
	    inputName: string;
	    root: HTMLElement;
	    protected element: HTMLElement;
	    constructor(inputName: string, root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    getValue(): string;
	    updateQuery(queryBuilder: QueryBuilder): void;
	    protected onChange(): void;
	}

}
declare module Coveo {
	class SimpleFieldInput extends DocumentInput {
	    inputName: string;
	    fieldName: string;
	    root: HTMLElement;
	    protected element: HTMLElement;
	    dropDown: Dropdown;
	    constructor(inputName: string, fieldName: string, endpoint: ISearchEndpoint, root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    getValue(): string;
	}

}
declare module Coveo {
	class AdvancedFieldInput extends DocumentInput {
	    inputName: string;
	    fieldName: string;
	    root: HTMLElement;
	    protected element: HTMLElement;
	    mode: Dropdown;
	    input: TextInput;
	    constructor(inputName: string, fieldName: string, root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    getValue(): string;
	}

}
declare module Coveo {
	class SizeInput extends DocumentInput {
	    root: HTMLElement;
	    static modes: string[];
	    static sizes: string[];
	    protected element: HTMLElement;
	    modeSelect: Dropdown;
	    sizeInput: NumericSpinner;
	    sizeSelect: Dropdown;
	    constructor(root: HTMLElement);
	    reset(): void;
	    build(): HTMLElement;
	    getValue(): string;
	}

}
declare module Coveo {
	class AdvancedSearchInputFactory {
	    constructor(endpoint: ISearchEndpoint, root: HTMLElement);
	    create(name: string, options?: IFieldInputParameters): IAdvancedSearchInput;
	    createAllKeywordsInput(): AllKeywordsInput;
	    createExactKeywordsInput(): ExactKeywordsInput;
	    createAnyKeywordsInput(): AnyKeywordsInput;
	    createNoneKeywordsInput(): NoneKeywordsInput;
	    createAnytimeDateInput(): AnytimeDateInput;
	    createInTheLastDateInput(): InTheLastDateInput;
	    createBetweenDateInput(): BetweenDateInput;
	    createSimpleFieldInput(name: string, field: string): SimpleFieldInput;
	    createAdvancedFieldInput(name: string, field: string): AdvancedFieldInput;
	    createSizeInput(): SizeInput;
	}

}
declare module Coveo {
	/**
	 * Argument sent to all handlers bound on {@link QuerySummaryEvents.cancelLastAction}
	 */
	interface IQuerySummaryCancelLastActionArgs {
	}
	/**
	 * This static class is there to contains the different string definition for all the events related to the {@link AdvancedSearch} component.
	 */
	class QuerySummaryEvents {
	    /**
	     * Triggered when the last action is being cancelled by the query summary component
	     *
	     * Allows external code to revert their last action.
	     * @type {string}
	     */
	    static cancelLastAction: string;
	}

}
declare module Coveo {
	interface IAdvancedSearchOptions {
	    includeKeywords?: boolean;
	    includeDate?: boolean;
	    includeDocument?: boolean;
	}
	/**
	 * The `AdvancedSearch` component is meant to render a section in the [`Settings`]{@link Settings} menu to allow the end
	 * user to easily create complex queries to send to the index.
	 *
	 * **Note:**
	 * > You can write custom code to add new sections in the **Advanced Search** modal box generated by this component by
	 * > attaching a handler to the [`buildingAdvancedSearch`]{@link AdvancedSearchEvents.buildingAdvancedSearch} event.
	 */
	class AdvancedSearch extends Component {
	    element: HTMLElement;
	    options: IAdvancedSearchOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: IAdvancedSearchOptions;
	    inputs: IAdvancedSearchInput[];
	    content: Dom;
	    /**
	     * Creates a new `AdvancedSearch` component.
	     *
	     * Triggers the [`buildingAdvancedSearch`]{@link AdvancedSearchEvents.buildingAdvancedSearch} event.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `AdvancedSearch` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IAdvancedSearchOptions, bindings?: IComponentBindings, ModalBox?: any);
	    /**
	     * Launches the advanced search query.
	     * If query returns successfully, also logs an `advancedSearch` event in the usage analytics (see
	     * {@link Analytics.logSearchEvent}).
	     */
	    executeAdvancedSearch(): void;
	    /**
	     * Resets the state of all form inputs inside the `AdvancedSearch` component.
	     */
	    reset(): void;
	    /**
	     * Opens the `AdvancedSearch` modal box.
	     */
	    open(): void;
	    /**
	     * Closes the `AdvancedSearch` modal box.
	     */
	    close(): void;
	}

}
declare module Coveo {
	interface IAggregateOptions {
	    field: IFieldOption;
	    operation?: string;
	    format?: string;
	}
	/**
	 * The Aggregate component allows to display the result on an aggregate operation on the index.
	 *
	 * It hooks itself to the query to add a new {@link IGroupByRequest}, then displays the result.
	 */
	class Aggregate extends Component {
	    element: HTMLElement;
	    options: IAggregateOptions;
	    static ID: string;
	    static doExport(): void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IAggregateOptions;
	    /**
	     * Creates a new Aggregate component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Aggregate component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IAggregateOptions, bindings?: IComponentBindings);
	}

}
declare module Coveo {
	class MultiAnalyticsClient implements IAnalyticsClient {
	    isContextual: boolean;
	    constructor(analyticsClients?: IAnalyticsClient[]);
	    isActivated(): boolean;
	    getCurrentEventCause(): string;
	    getCurrentEventMeta(): {
	        [key: string]: any;
	    };
	    logSearchEvent<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    logSearchAsYouType<TMeta>(actionCause: IAnalyticsActionCause, meta: TMeta): void;
	    logClickEvent(actionCause: IAnalyticsActionCause, meta?: IAnalyticsDocumentViewMeta, result?: IQueryResult, element?: HTMLElement): Promise<IAPIAnalyticsEventResponse[]>;
	    logCustomEvent<TMeta>(actionCause: IAnalyticsActionCause, meta?: TMeta, element?: HTMLElement): Promise<IAPIAnalyticsEventResponse[]>;
	    getTopQueries(params: ITopQueries): Promise<string[]>;
	    getCurrentVisitIdPromise(): Promise<string>;
	    getCurrentVisitId(): string;
	    sendAllPendingEvents(): void;
	    warnAboutSearchEvent(): void;
	    cancelAllPendingEvents(): void;
	    getPendingSearchEvent(): PendingSearchEvent;
	    setOriginContext(originContext: string): void;
	}

}
declare module Coveo {
	interface IAnalyticsOptions {
	    user?: string;
	    userDisplayName?: string;
	    token?: string;
	    endpoint?: string;
	    anonymous?: boolean;
	    searchHub?: string;
	    splitTestRunName?: string;
	    splitTestRunVersion?: string;
	    sendToCloud?: boolean;
	    organization?: string;
	}
	/**
	 * The Analytics component logs user actions performed in the search interface and sends them to a REST web service
	 * exposed through the Coveo Cloud Platform.
	 *
	 * You can use analytics data to evaluate how users are interacting with your search interface, improve relevance and
	 * produce analytics dashboards within the Coveo Cloud Platform.
	 *
	 * See [Step 7 - Usage Analytics](https://developers.coveo.com/x/EYskAg) of the Getting Started with the JavaScript
	 * Search Framework V1 tutorial for an introduction to usage analytics.
	 *
	 * See also [Sending Custom Analytics Events](https://developers.coveo.com/x/KoGfAQ) for more advanced use cases.
	 */
	class Analytics extends Component {
	    element: HTMLElement;
	    options: IAnalyticsOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport(): void;
	    /**
	     * Options for the component
	     * @componentOptions
	     */
	    static options: IAnalyticsOptions;
	    /**
	     * A reference to the `analyticsClient`, which performs the heavy duty part of logging the actual events on the
	     * service.
	     */
	    client: IAnalyticsClient;
	    /**
	     * Creates a new Analytics component. Creates the {@link IAnalyticsClient}.
	     * @param element The HTMLElement on which the component will be instantiated.
	     * @param options The options for the Analytics component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IAnalyticsOptions, bindings?: IComponentBindings);
	    /**
	     * Logs a Search event on the service, using an [AnalyticsActionCause]({@link IAnalyticsActionCause}) and a meta
	     * object.
	     *
	     * Note that the search event is only sent to the service when the query successfully returns, not immediately after
	     * calling this method. Therefore, it is 
	     * service will log no Search event and you will get a warning message in the console.
	     *
	     * See [Sending Custom Analytics Events](https://developers.coveo.com/x/KoGfAQ).
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts white spaces to underscores and uppercase characters to lowercase characters in key
	     * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
	     * ( `{}` ).
	     */
	    logSearchEvent<T>(actionCause: IAnalyticsActionCause, meta: T): void;
	    /**
	     * Logs a SearchAsYouType event on the service, using an {@link IAnalyticsActionCause} and a meta object.
	     *
	     * This method is very similar to the {@link logSearchEvent} method, except that logSearchAsYouType is, by definition,
	     * more frequently called.
	     *
	     * The `PendingSearchAsYouTypeEvent` takes care of logging only the "relevant" last event: an event that occurs after
	     * 5 seconds elapse without any event being logged, or an event that occurs after another part of the interface
	     * triggers a search event. This avoids logging every single partial query, which would make the reporting very
	     * confusing.
	     *
	     * It is 
	     * event and you will get a warning message in the console.
	     *
	     * See [Sending Custom Analytics Events](https://developers.coveo.com/x/KoGfAQ).
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts white spaces to underscores and uppercase characters to lowercase characters in key
	     * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
	     * ( `{}` ).
	     */
	    logSearchAsYouType<T>(actionCause: IAnalyticsActionCause, meta: T): void;
	    /**
	     * Logs a Custom event on the service. You can use custom events to create custom reports, or to track events
	     * that are not queries or item views.
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts white spaces to underscores and uppercase characters to lowercase characters in key
	     * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
	     * ( `{}` ).
	     * @param element The HTMLElement that the user has interacted with for this custom event.
	     */
	    logCustomEvent<T>(actionCause: IAnalyticsActionCause, meta: T, element?: HTMLElement): void;
	    /**
	     * Logs a Click event. You can understand click events as item views (e.g., clicking on a {@link ResultLink} or
	     * opening a {@link Quickview}).
	     *
	     * This event is logged immediately on the service.
	     *
	     * @param actionCause Describes the cause of the event.
	     * @param meta The metadata which you want to use to create custom dimensions. Metadata can contain as many key-value
	     * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
	     * API automatically converts uppercase characters to lowercase characters in key names. Each value must be a simple
	     * string. You do not have to pass an {@link IAnalyticsDocumentViewMeta} as meta when logging a custom Click event.
	     * You can actually send any arbitrary meta. If you do not need to log metadata, you can simply pass an empty JSON
	     * ( `{}` ).
	     * @param result The result that the user has clicked.
	     * @param element The HTMLElement that the user has clicked in the interface.
	     */
	    logClickEvent(actionCause: IAnalyticsActionCause, meta: IAnalyticsDocumentViewMeta, result: IQueryResult, element?: HTMLElement): void;
	    /**
	     * Sets the Origin Context dimension on the analytic events.
	     *
	     * You can use this dimension to specify the context of your application.
	     * Suggested values are "Search", "InternalSearch" and "CommunitySearch"
	     *
	     * Default value is `Search`.
	     *
	     * @param originContext The origin context value
	     */
	    setOriginContext(originContext: string): void;
	    protected initializeAnalyticsEndpoint(): AnalyticsEndpoint;
	    static create(element: HTMLElement, options: IAnalyticsOptions, bindings: IComponentBindings): IAnalyticsClient;
	}

}
declare module Coveo {
	interface ISuggestionForOmniboxOptionsOnSelect {
	    (value: string, args: IPopulateOmniboxEventArgs): void;
	}
	interface ISuggestionForOmniboxOptions {
	    omniboxZIndex?: number;
	    headerTitle?: string;
	    onSelect?: ISuggestionForOmniboxOptionsOnSelect;
	    numberOfSuggestions?: number;
	}
	interface ISuggestionForOmniboxTemplate {
	    header?: {
	        template: (...args: any[]) => string;
	        title: string;
	    };
	    row: (...args: any[]) => string;
	}
	interface ISuggestionForOmniboxResult {
	    value: string;
	}
	class SuggestionForOmnibox {
	    structure: ISuggestionForOmniboxTemplate;
	    onSelect: (value: string, args: IPopulateOmniboxEventArgs) => void;
	    onTabPress: (value: string, args: IPopulateOmniboxEventArgs) => void;
	    constructor(structure: ISuggestionForOmniboxTemplate, onSelect: (value: string, args: IPopulateOmniboxEventArgs) => void, onTabPress: (value: string, args: IPopulateOmniboxEventArgs) => void);
	    buildOmniboxElement(results: ISuggestionForOmniboxResult[], args: IPopulateOmniboxEventArgs): HTMLElement;
	}

}
declare module Coveo {
	interface IAnalyticsSuggestionsOptions extends ISuggestionForOmniboxOptions {
	}
	/**
	 * The AnalyticsSuggestion component provides query suggestions based on the queries that a Coveo Analytics service most
	 * commonly logs.
	 *
	 * This component orders possible query suggestions by their respective number of successful item views, thus
	 * prioritizing the most relevant query suggestions. Consequently, when better options are available, this component
	 * does not suggest queries resulting in no clicks from users or requiring refinements.
	 *
	 * The query suggestions appear in the {@link Omnibox} Component. The AnalyticsSuggestion component strongly
	 * relates to the {@link Analytics} component. While a user is typing in a query box, the AnalyticsSuggestion component
	 * allows them to see and select the most commonly used and relevant queries.
	 *
	 * @deprecated This component is exposed for legacy reasons. If possible, you should avoid using this component.
	 * Instead, you should use the [`Omnibox`]{@link Omnibox}
	 * [`enableQuerySuggesAddon`]{@link Omnibox.options.enableQuerySuggestAddon} option.
	 */
	class AnalyticsSuggestions extends Component {
	    options: IAnalyticsSuggestionsOptions;
	    static ID: string;
	    static doExport(): void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IAnalyticsSuggestionsOptions;
	    /**
	     * Creates a new AnalyticsSuggestions component.
	     *
	     * Also binds event handlers so that when a user selects a suggestion, an `omniboxFromLink` usage analytics event is
	     * logged if the suggestion comes from a standalone search box, or an `omniboxAnalytics` usage analytics
	     * event is logged otherwise.
	     *
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the AnalyticsSuggestions component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IAnalyticsSuggestionsOptions, bindings?: IComponentBindings);
	    /**
	     * Selects a currently displayed query suggestion. This implies that at least one suggestion must have been returned
	     * at least once. The suggestion parameter can either be a number (0-based index position of the query suggestion to
	     * select) or a string that matches the suggestion.
	     *
	     * @param suggestion
	     */
	    selectSuggestion(suggestion: number): any;
	    selectSuggestion(suggestion: string): any;
	}

}
declare module Coveo {
	interface IAuthenticationProviderOptions {
	    name?: string;
	    caption?: string;
	    useIFrame?: boolean;
	    showIFrame?: boolean;
	}
	/**
	 * The `AuthenticationProvider` component makes it possible to execute queries with an identity that the end user
	 * can obtain using an authentication provider configured on the Coveo REST Search API
	 * (see [Claims Authentication](https://developers.coveo.com/x/pQ8vAg)).
	 *
	 * When necessary, this component handles redirecting the browser to the address that starts the authentication process.
	 *
	 * You can use the `data-tab` attribute to enable the `AuthenticationProvider` component only for the tabs of your
	 * search interface that require authentication (see the [`Tab`]{@link Tab} component).
	 */
	class AuthenticationProvider extends Component {
	    element: HTMLElement;
	    options: IAuthenticationProviderOptions;
	    _window: Window;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component.
	     * @componentOptions
	     */
	    static options: IAuthenticationProviderOptions;
	    /**
	     * Creates a new `AuthenticationProvider` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `AuthenticationProvider` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IAuthenticationProviderOptions, bindings?: IComponentBindings, _window?: Window);
	}

}
declare module Coveo {
	interface IResultLinkOptions {
	    onClick?: (e: Event, result: IQueryResult) => any;
	    field?: IFieldOption;
	    openInOutlook?: boolean;
	    openQuickview?: boolean;
	    alwaysOpenInNewWindow?: boolean;
	    hrefTemplate?: string;
	    titleTemplate?: string;
	}

}
declare module Coveo {
	/**
	 * The `ResultLink` component automatically transform a search result title into a clickable link pointing to the
	 * original item.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class ResultLink extends Component {
	    element: HTMLElement;
	    options: IResultLinkOptions;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    os: OS_NAME;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the ResultLink
	     * @componentOptions
	     */
	    static options: IResultLinkOptions;
	    /**
	     * Creates a new `ResultLink` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `ResultLink` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     * @param os
	     */
	    constructor(element: HTMLElement, options: IResultLinkOptions, bindings?: IResultsComponentBindings, result?: IQueryResult, os?: OS_NAME);
	    renderUri(element: HTMLElement, result?: IQueryResult): void;
	    /**
	     * Opens the result in the same window, no matter how the actual component is configured for the end user.
	     * @param logAnalytics Specifies whether the method should log an analytics event.
	     */
	    openLink(logAnalytics?: boolean): void;
	    /**
	     * Opens the result in a new window, no matter how the actual component is configured for the end user.
	     * @param logAnalytics Specifies whether the method should log an analytics event.
	     */
	    openLinkInNewWindow(logAnalytics?: boolean): void;
	    /**
	     * Tries to open the result in Microsoft Outlook if the result has an `outlookformacuri` or `outlookuri` field.
	     *
	     * Normally, this implies the result should be a link to an email.
	     *
	     * If the needed fields are not present, this method does nothing.
	     * @param logAnalytics Specifies whether the method should log an analytics event.
	     */
	    openLinkInOutlook(logAnalytics?: boolean): void;
	    /**
	     * Opens the link in the same manner the end user would.
	     *
	     * This essentially simulates a click on the result link.
	     *
	     * @param logAnalytics Specifies whether the method should log an analytics event.
	     */
	    openLinkAsConfigured(logAnalytics?: boolean): void;
	    protected bindEventToOpen(): boolean;
	    protected parseStringTemplate(template: string): string;
	}

}
declare module Coveo {
	interface IYouTubeThumbnailOptions {
	    width: string;
	    height: string;
	    embed: boolean;
	}
	/**
	 * The YouTubeThumbnail component automatically fetches the thumbnail of a YouTube video.
	 *
	 * This component differs from the standard {@link Thumbnail} component because the thumbnail it outputs is always
	 * clickable.
	 *
	 * Depending on the component configuration, clicking a YouTube thumbnail can either automatically open a modal box
	 * containing the `iframe` from YouTube, or open the target URL in the current window (see
	 * {@link YouTubeThumbnail.options.embed}).
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class YouTubeThumbnail extends Component {
	    element: HTMLElement;
	    options: IYouTubeThumbnailOptions;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    ModalBox: any;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: IYouTubeThumbnailOptions;
	    resultLink: Dom;
	    constructor(element: HTMLElement, options?: IYouTubeThumbnailOptions, bindings?: IResultsComponentBindings, result?: IQueryResult, ModalBox?: any);
	    /**
	     * Open the result link embedded in this component.
	     *
	     * With a standard configuration of this component, this will open an iframe that automatically plays the video.
	     */
	    openResultLink(): void;
	}

}
declare module Coveo {
	interface IBackdropOptions {
	    imageUrl?: string;
	    imageField?: IFieldOption;
	    overlayColor?: string;
	    overlayGradient?: boolean;
	}
	/**
	 * The Backdrop component renders an image URL (either passed as a direct URL or contained in a result field) as a
	 * background image. It is useful for displaying information in front of a dynamic background image.
	 *
	 * The Backdrop component will automatically initialize components embedded within itself:
	 *
	 * ```html
	 *   <div class="CoveoBackdrop" data-image-field="ytthumbnailurl">
	 *     <div class="CoveoFieldValue" data-field="somefield"></div>
	 *   </div>
	 * ```
	 */
	class Backdrop extends Component {
	    element: HTMLElement;
	    options: IBackdropOptions;
	    result: IQueryResult;
	    _window: Window;
	    ModalBox: any;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: IBackdropOptions;
	    /**
	     * Creates a new Backdrop component.
	     * @param element The HTMLElement on which the component will be instantiated.
	     * @param options The options for the Backdrop component.
	     * @param bindings The bindings that the component requires to function normally. If not set, it will be automatically
	     * resolved (with a slower execution time).
	     * @param result The {@link IQueryResult}.
	     */
	    constructor(element: HTMLElement, options?: IBackdropOptions, bindings?: IComponentBindings, result?: IQueryResult, _window?: Window, ModalBox?: any);
	}

}
declare module Coveo {
	interface IFieldValueOptions {
	    field?: IFieldOption;
	    facet?: string;
	    htmlValue?: boolean;
	    helper?: string;
	    helperOptions?: {
	        [key: string]: any;
	    };
	    splitValues?: boolean;
	    separator?: string;
	    displaySeparator?: string;
	    textCaption?: string;
	}
	interface IAnalyticsFieldValueMeta {
	    facetId: string;
	    facetValue?: string;
	    facetTitle?: string;
	}
	/**
	 * The FieldValue component displays the value of a field associated to its parent search result. It is normally usable
	 * within a {@link FieldTable}.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 *
	 * A common use of this component is to display a specific field value which also happens to be an existing
	 * {@link Facet.options.field}. When the user clicks on the FieldValue component, it activates the corresponding Facet.
	 */
	class FieldValue extends Component {
	    element: HTMLElement;
	    options: IFieldValueOptions;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IFieldValueOptions;
	    static simpleOptions: any;
	    static helperOptions: any;
	    /**
	     * Creates a new FieldValue.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the FieldValue component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options: IFieldValueOptions, bindings?: IComponentBindings, result?: IQueryResult, fieldValueClassId?: string);
	    /**
	     * Gets the current FieldValue from the current {@link IQueryResult}.
	     *
	     * @returns {any} The current FieldValue or `null` if value is and `Object`.
	     */
	    getValue(): any;
	    /**
	     * Renders a value to HTML using all of the current FieldValue component options.
	     * @param value The value to render.
	     * @returns {HTMLElement} The element containing the rendered value.
	     */
	    renderOneValue(value: string): HTMLElement;
	    protected getValueContainer(): HTMLElement;
	    protected prependTextCaptionToDom(): void;
	}

}
declare module Coveo {
	interface IBadgeOptions extends IFieldValueOptions {
	    colors: IBadgeColors;
	}
	/**
	 * Badge Colors
	 */
	interface IBadgeColors extends IBadgeColor {
	    values?: {
	        [value: string]: IBadgeColors;
	    };
	}
	interface IBadgeColor {
	    icon?: string;
	    text?: string;
	}
	/**
	 * The Badge component outputs a field value with customizable colors and an icon preceding it.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)). It
	 * extends the {@link FieldValue} component. Therefore all FieldValue options are also available for a Badge component.
	 */
	class Badge extends FieldValue implements IComponentBindings {
	    options: IBadgeOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IBadgeOptions;
	    static parent: typeof FieldValue;
	    /**
	     * Creates a new Badge component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Badge component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options: IBadgeOptions, bindings?: IComponentBindings, result?: IQueryResult);
	    /**
	     * Parses a {@link Badge.options.colors} option string into a workable JSON format.
	     *
	     * @param colorsOption The colors option string to parse. See {@link Badge.options.colors}.
	     */
	    static parseColors(colorsOption: string): IBadgeColors;
	    /**
	     * Gets the icon and text color of a field value.
	     *
	     * @param value The field value whose colors to return.
	     * @returns {{icon: string, text: string}} An object with the `icon` and `text` keys.
	     */
	    getColor(value?: string): IBadgeColor;
	    /**
	     * Renders one string value with the appropriate colors and icon.
	     *
	     * @param value The field value to render.
	     * @returns {HTMLElement} An HTML `<span>` tag containing the rendered value.
	     */
	    renderOneValue(value: string): HTMLElement;
	    protected prependTextCaptionToDom(): void;
	}

}
declare module Coveo {
	interface IBreadcrumbOptions {
	}
	/**
	 * The Breadcrumb component displays a summary of the currently active query filters.
	 *
	 * For example, when the user selects a {@link Facet} value, the breadcrumbs display this value.
	 *
	 * The active filters are obtained by the component by firing an event in the Breadcrumb component.
	 *
	 * All other components having an active state can react to this event by providing custom bits of HTML to display
	 * inside the breadcrumbs.
	 *
	 * Thus, it is possible to easily extend the Breadcrumb component using custom code to display information about custom
	 * states and filters.
	 *
	 * See {@link BreadcrumbEvents} for the list of events and parameters sent when a Breadcrumb component is populated.
	 */
	class Breadcrumb extends Component {
	    element: HTMLElement;
	    options: IBreadcrumbOptions;
	    static ID: string;
	    static options: IBreadcrumbOptions;
	    static doExport: () => void;
	    /**
	     * Creates a new Breadcrumb component. Binds event on {@link QueryEvents.deferredQuerySuccess} to draw the
	     * breadcrumbs.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Breadcrumb component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IBreadcrumbOptions, bindings?: IComponentBindings);
	    /**
	     * Triggers the event to populate the breadcrumbs. Components such as {@link Facet} can populate the breadcrumbs.
	     *
	     * This method triggers a {@link BreadcrumbEvents.populateBreadcrumb} event with an
	     * {@link IPopulateBreadcrumbEventArgs} object (an array) that other components or code can populate.
	     * @returns {IBreadcrumbItem[]} A populated breadcrumb item list.
	     */
	    getBreadcrumbs(): IBreadcrumbItem[];
	    /**
	     * Triggers the event to clear the current breadcrumbs that components such as {@link Facet} can populate.
	     *
	     * Also triggers a new query and logs the `breadcrumbResetAll` event in the usage analytics.
	     */
	    clearBreadcrumbs(): void;
	    /**
	     * Draws the specified breadcrumb items.
	     * @param breadcrumbs The breadcrumb items to draw.
	     */
	    drawBreadcrumb(breadcrumbs: IBreadcrumbItem[]): void;
	}

}
declare module Coveo {
	interface ICardActionBarOptions {
	    hidden?: boolean;
	    openOnMouseOver?: boolean;
	}
	/**
	 * The CardActionBar component displays an action bar at the bottom of a card result (see
	 * [Result Layouts](https://developers.coveo.com/x/yQUvAg)). It is a simple container for buttons or complementary
	 * information.
	 *
	 * You should place this component at the bottom of a card result (i.e., as the last child of the surrounding
	 * `coveo-result-frame`.
	 *
	 * ### Example
	 * ```html
	 * <div class="coveo-result-frame">
	 *   [ ... content ... ]
	 *   <div class="CoveoCardActionBar">
	 *     <some-button></some-button>
	 *     <some-additional-info></some-additional-info>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * A CardActionBar component is a two-state widget: it can either be shown or hidden. It is hidden by default.
	 */
	class CardActionBar extends Component {
	    element: HTMLElement;
	    options: ICardActionBarOptions;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    parentResult: HTMLElement;
	    arrowContainer: HTMLElement;
	    removedTabIndexElements: HTMLElement[];
	    /**
	     * @componentOptions
	     */
	    static options: ICardActionBarOptions;
	    /**
	     * Creates a new CardActionBar component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the CardActionBar component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The parent result.
	     */
	    constructor(element: HTMLElement, options?: ICardActionBarOptions, bindings?: IComponentBindings, result?: IQueryResult);
	    /**
	     * Shows the CardActionBar.
	     */
	    show(): void;
	    /**
	     * Hides the CardActionBar.
	     */
	    hide(): void;
	}

}
declare module Coveo {
	/**
	 * The CardOverlayEvents class contains string definitions for all events related to the {@link CardOverlay} component.
	 */
	class CardOverlayEvents {
	    /**
	     * Opening a {@link CardOverlay} component triggers this event (see {@link CardOverlay.openOverlay}).
	     *
	     * @type {string}
	     */
	    static openCardOverlay: string;
	    /**
	     * Closing a {@link CardOverlay} component triggers this event (see {@link CardOverlay.closeOverlay}).
	     *
	     * @type {string}
	     */
	    static closeCardOverlay: string;
	}

}
declare module Coveo {
	interface ICardOverlayOptions {
	    title: string;
	    icon?: string;
	}
	/**
	 * The CardOverlay component displays a button that the user can click to toggle the visibility of an overlay on top of
	 * an {@link IQueryResult}. While this component typically populates a {@link CardActionBar} component, it is actually
	 * possible to place a CardOverlay component anywhere in any result.
	 *
	 * The primary purpose of the CardOverlay component is to display additional information about a result in a format that
	 * fits well within a card result layout (see [Result Layouts](https://developers.coveo.com/x/yQUvAg)).
	 *
	 * When initialized, this component creates a `<div class="coveo-card-overlay">` element as the last child of its parent
	 * IQueryResult, and displays a button which toggles the visibility of the overlay.
	 */
	class CardOverlay extends Component {
	    element: HTMLElement;
	    options: ICardOverlayOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: ICardOverlayOptions;
	    /**
	     * Creates a new CardOverlay component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the CardOverlay component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: ICardOverlayOptions, bindings?: IComponentBindings);
	    /**
	     * Toggles the CardOverlay visibility.
	     *
	     * @param swtch Specifying a value for this parameter forces the component visibility to take the corresponding value
	     * (`true` for visible; `false` for hidden).
	     */
	    toggleOverlay(swtch?: boolean): void;
	    /**
	     * Opens the CardOverlay.
	     *
	     * Also triggers the {@link CardOverlayEvents.openCardOverlay} event.
	     */
	    openOverlay(): void;
	    /**
	     * Closes the CardOverlay.
	     *
	     * Also triggers the {@link CardOverlayEvents.closeCardOverlay} event.
	     */
	    closeOverlay(): void;
	}

}
declare module Coveo {
	class ChatterUtils {
	    static buildURI(objectURI: string, objectId: string, newObjectId: string): string;
	    static bindClickEventToElement(element: HTMLElement, openInPrimaryTab: boolean, openInSubTab: boolean): HTMLElement;
	}

}
declare module Coveo {
	interface IChatterLikedByOptions {
	    nbLikesToRender: number;
	    openInPrimaryTab: boolean;
	    openInSubTab: boolean;
	}
	class ChatterLikedBy extends Component {
	    element: HTMLElement;
	    options: IChatterLikedByOptions;
	    bindings: IComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    static options: IChatterLikedByOptions;
	    constructor(element: HTMLElement, options?: IChatterLikedByOptions, bindings?: IComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface IChatterPostAttachmentOption {
	}
	class ChatterPostAttachment extends Component {
	    element: HTMLElement;
	    options: IChatterPostAttachmentOption;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    constructor(element: HTMLElement, options?: IChatterPostAttachmentOption, bindings?: IResultsComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface IChatterPostedByOption {
	    enablePostedOn: boolean;
	    useFromInstead: boolean;
	    openInPrimaryTab: boolean;
	    openInSubTab: boolean;
	}
	class ChatterPostedBy extends Component {
	    element: HTMLElement;
	    options: IChatterPostedByOption;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    static options: IChatterPostedByOption;
	    constructor(element: HTMLElement, options?: IChatterPostedByOption, bindings?: IResultsComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface IChatterTopicOption {
	}
	class ChatterTopic extends Component {
	    element: HTMLElement;
	    options: IChatterTopicOption;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    constructor(element: HTMLElement, options?: IChatterTopicOption, bindings?: IResultsComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface IDidYouMeanOptions {
	    enableAutoCorrection?: boolean;
	}
	/**
	 * The DidYouMean component is responsible for displaying query corrections. If this component is in the page and the
	 * query returns no result but finds a possible query correction, the component either suggests the correction or
	 * automatically triggers a new query with the suggested term.
	 */
	class DidYouMean extends Component {
	    element: HTMLElement;
	    options: IDidYouMeanOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IDidYouMeanOptions;
	    correctedTerm: string;
	    /**
	     * Creates a new DidYouMean component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the DidYouMean component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IDidYouMeanOptions, bindings?: IComponentBindings);
	    /**
	     * Executes a query with the corrected term.
	     * Throws an exception if the corrected term has not been initialized.
	     * If successful, logs a `didyoumeanClick` event in the usage analytics.
	     */
	    doQueryWithCorrectedTerm(): void;
	}

}
declare module Coveo {
	interface IErrorReportOptions {
	    showDetailedError: boolean;
	}
	/**
	 * The ErrorReport component takes care of handling fatal error when doing a query on the index / Search API.
	 *
	 * For example, the ErrorReport component displays a message when the service responds with a 401 or 503 error. This
	 * component also renders a small text area with the JSON content of the error response, for debugging purposes.
	 */
	class ErrorReport extends Component {
	    element: HTMLElement;
	    options: IErrorReportOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IErrorReportOptions;
	    /**
	     * Creates a new ErrorReport component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the ErrorReport component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IErrorReportOptions, bindings?: IComponentBindings);
	    /**
	     * Performs the "back" action in the browser.
	     * Also logs an `errorBack` event in the usage analytics.
	     */
	    back(): void;
	    /**
	     * Resets the current state of the query and triggers a new query.
	     * Also logs an `errorClearQuery` event in the usage analytics.
	     */
	    reset(): void;
	    /**
	     * Retries the same query, in case of a temporary service error.
	     * Also logs an `errorRetry` event in the usage analytics.
	     */
	    retry(): void;
	}

}
declare module Coveo {
	/**
	 * The Excerpt component renders an excerpt of its associated result and highlights the keywords from the query using
	 * the appropriate template helpers.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class Excerpt extends Component {
	    element: HTMLElement;
	    options: any;
	    bindings: IComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * Creates a new Excerpt component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Excerpt component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: any, bindings?: IComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	interface IExportToExcelOptions {
	    numberOfResults?: number;
	    fieldsToInclude?: IFieldOption[];
	}
	/**
	 * The ExportToExcel component renders an item in the {@link Settings} menu to allow the end user to the current
	 * search results to the Microsoft Excel format (.xlsx).
	 */
	class ExportToExcel extends Component {
	    element: HTMLElement;
	    options: IExportToExcelOptions;
	    bindings: IComponentBindings;
	    _window: Window;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the ExportToExcel
	     * @componentOptions
	     */
	    static options: IExportToExcelOptions;
	    /**
	     * Creates a new ExportToExcel component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the ExportToExcel component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param _window The global Window object (used to download the Excel link).
	     */
	    constructor(element: HTMLElement, options: IExportToExcelOptions, bindings?: IComponentBindings, _window?: Window);
	    /**
	     * Downloads the Excel representation of the current query.
	     *
	     * Also logs an `exportToExcel` event in the usage analytics.
	     */
	    download(): void;
	    static create(element: HTMLElement, options?: IExportToExcelOptions, root?: HTMLElement): ExportToExcel;
	}

}
declare module Coveo {
	/// <reference path="../ui/FacetRange/FacetRange.d.ts" />
	class FacetRangeQueryController extends FacetQueryController {
	    facet: FacetRange;
	    graphGroupByQueriesIndex: number;
	    constructor(facet: FacetRange);
	    protected createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): IGroupByRequest;
	    protected createGroupByAllowedValues(): string[];
	}

}
declare module Coveo {
	/// <reference path="../Facet/Facet.d.ts" />
	interface IFacetRangeOptions extends IFacetOptions {
	    ranges?: IRangeValue[];
	    dateField?: boolean;
	}
	/**
	 * The FacetRange component displays a {@link Facet} whose values are expressed as ranges. These ranges are computed
	 * from the results of the current query.
	 *
	 * This component inherits from the Facet component. This implies that you must specify a valid
	 * [field]{@link Facet.options.field} value for this component to work.
	 *
	 * Most of the options available for a Facet component are also available for a FacetRange component. There are some
	 * exceptions, however.
	 *
	 * Here is the list of Facet options which the FacetRange component does not support.
	 * - The **Settings** menu options:
	 *   - [enableSettings]{@link Facet.options.enableSettings}
	 *   - [enableSettingsFacetState]{@link Facet.options.enableSettingsFacetState}
	 *   - [enableCollapse]{@link Facet.options.enableCollapse}
	 *   - [availableSorts]{@link Facet.options.availableSorts}
	 *   - [customSort]{@link Facet.options.customSort}
	 *   - [computedFieldCaption]{@link Facet.options.computedFieldCaption}
	 * - The **Facet Search** options:
	 *   - [enableFacetSearch]{@link Facet.options.enableFacetSearch}
	 *   - [facetSearchDelay]{@link Facet.options.facetSearchDelay}
	 *   - [facetSearchIgnoreAccents]{@link Facet.options.facetSearchIgnoreAccents}
	 *   - [numberOfValuesInFacetSearch]{@link Facet.options.numberOfValuesInFacetSearch}
	 * - The **More and Less** options:
	 *   - [enableMoreLess]{@link Facet.options.enableMoreLess}
	 *   - [pageSize]{@link Facet.options.pageSize}
	 *
	 *
	 *  Moreover, while the [numberOfValues]{@link Facet.options.numberOfValues} option still allows you to specify the
	 *  maximum number of values to display in a FacetRange component, it is not possible for the end to display additional
	 *  values, since the component does not support the **More** button.
	 */
	class FacetRange extends Facet implements IComponentBindings {
	    element: HTMLElement;
	    static ID: string;
	    static parent: typeof Facet;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IFacetRangeOptions;
	    options: IFacetRangeOptions;
	    /**
	     * Creates a new FacetRange component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the FacetRange component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IFacetRangeOptions, bindings?: IComponentBindings);
	    getValueCaption(facetValue: any): string;
	    protected initFacetQueryController(): void;
	    protected processNewGroupByResults(groupByResult: IGroupByResult): void;
	}

}
declare module Coveo {
	interface IFieldSuggestionsOptions extends ISuggestionForOmniboxOptions {
	    field?: IFieldOption;
	    queryOverride?: string;
	}
	/**
	 * The `FieldSuggestions` component provides query suggestions based on a particular facet field. For example, you could
	 * use this component to provide auto-complete suggestions while the end user is typing the title of an item.
	 *
	 * The query suggestions provided by this component appear in the [`Omnibox`]{@link Omnibox} component.
	 */
	class FieldSuggestions extends Component {
	    options: IFieldSuggestionsOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: IFieldSuggestionsOptions;
	    /**
	     * Creates a new `FieldSuggestions` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `FieldSuggestions` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IFieldSuggestionsOptions, bindings?: IComponentBindings);
	    selectSuggestion(suggestion: number): any;
	    selectSuggestion(suggestion: string): any;
	}

}
declare module Coveo {
	interface IFieldTableOptions {
	    allowMinimization: boolean;
	    expandedTitle: string;
	    minimizedTitle: string;
	    minimizedByDefault: boolean;
	}
	/**
	 * The FieldTable component displays a set of {@link FieldValue} components in a table that can optionally be
	 * expandable and minimizable. This component automatically takes care of not displaying empty field values.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 *
	 * **Example:**
	 *
	 * ```
	 * // This is the FieldTable component itself, which holds a list of table rows.
	 * // Each row is a FieldValue component.
	 * <table class='CoveoFieldTable'>
	 *    // Items
	 *    <tr data-field='@sysdate' data-caption='Date' data-helper='dateTime' />
	 *    <tr data-field='@sysauthor' data-caption='Author' />
	 *    <tr data-field='@clickuri' data-html-value='true' data-caption='URL' data-helper='anchor' data-helper-options='{text: \"<%= raw.syssource %>\" , target:\"_blank\"}'>
	 * </table>
	 * ```
	 */
	class FieldTable extends Component {
	    element: HTMLElement;
	    options: IFieldTableOptions;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IFieldTableOptions;
	    isExpanded: boolean;
	    /**
	     * Creates a new FieldTable.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the FieldTable component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: IFieldTableOptions, bindings?: IComponentBindings, result?: IQueryResult);
	    /**
	     * Toggles between expanding (showing) and minimizing (collapsing) the FieldTable.
	     *
	     * @param anim Specifies whether to show a sliding animation when toggling the display of the FieldTable.
	     */
	    toggle(anim?: boolean): void;
	    /**
	     * Expands (shows) the FieldTable,
	     * @param anim Specifies whether to show a sliding animation when expanding the FieldTable.
	     */
	    expand(anim?: boolean): void;
	    /**
	     * Minimizes (collapses) the FieldTable.
	     * @param anim Specifies whether to show a sliding animation when minimizing the FieldTable.
	     */
	    minimize(anim?: boolean): void;
	    /**
	     * Updates the toggle height if the content was dynamically resized, so that the expanding and minimizing animation
	     * can match the new content size.
	     */
	    updateToggleHeight(): void;
	    protected isTogglable(): boolean;
	}
	interface IValueRowOptions extends IFieldValueOptions {
	    caption?: string;
	}

}
declare module Coveo {
	class SortCriteria {
	    sort: string;
	    direction: string;
	    /**
	     * Create a new SortCriteria
	     * @param sort The sort criteria (e.g.: relevancy, date)
	     * @param direction The direction by which to sort (e.g.: ascending, descending)
	     */
	    constructor(sort: string, direction?: string);
	    /**
	     * Return a new SortCriteria from a string
	     * @param criteria The string from which to create the SortCriteria
	     */
	    static parse(criteria: string): SortCriteria;
	    /**
	     * Put the sort criteria in the passed queryBuilder
	     * @param queryBuilder The queryBuilder in which to put the sort criteria.
	     */
	    putInQueryBuilder(queryBuilder: QueryBuilder): void;
	    /**
	     * Gets the value of the sort criteria from a single {@link IQueryResult}.<br/>
	     * For example, if the sort criteria is 'relevancy', it will return the value of the 'relevancy' field from result.
	     * @param result The {@link IQueryResult} from which to get the value.
	     */
	    getValueFromResult(result: IQueryResult): any;
	    /**
	     * Returns a string representation of the sort criteria (e.g.: 'date ascending').
	     */
	    toString(): string;
	    /**
	     * Checks if the SortCriteria is equal to another.
	     * @param criteria The SortCriteria to compare with
	     */
	    equals(criteria: SortCriteria): boolean;
	}

}
declare module Coveo {
	interface IFoldingOptions {
	    field?: IFieldOption;
	    childField?: IFieldOption;
	    parentField?: IFieldOption;
	    range?: number;
	    rearrange?: SortCriteria;
	    enableExpand?: boolean;
	    expandExpression?: string;
	    maximumExpandedResults?: number;
	    /**
	     * Manage folding for each results individually
	     */
	    getResult?: (result: IQueryResult) => IQueryResult;
	    /**
	     * Manage folding of all more results
	     */
	    getMoreResults?: (results: IQueryResult[]) => IQueryResult[];
	}
	/**
	 * The `Folding` component makes it possible to render hierarchic representations of search results sharing a common
	 * [`field`]{@link Folding.options.field}.
	 *
	 * This component has no visual impact on its own. It simply folds certain search results so that the
	 * [`ResultFolding`]{@link ResultFolding} and [`ResultAttachments`]{@link ResultAttachments} components can then nicely
	 * render them within result templates (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 *
	 * A typical use case of the `Folding` component is to fold email conversations and message board threads results in a
	 * result set in order to display them in a convenient format. Messages belonging to a single conversation typically
	 * have a unique conversation ID. By indexing this ID on a field, you can use it to fold search results (see
	 * [Folding Results](https://developers.coveo.com/x/7hUvAg)).
	 *
	 * **Note:**
	 * > There can only be one `Folding` component per [`Tab`]{@link Tab} component.
	 */
	class Folding extends Component {
	    element: HTMLElement;
	    options: IFoldingOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IFoldingOptions;
	    /**
	     * Creates a new `Folding` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `Folding` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IFoldingOptions, bindings?: IComponentBindings);
	    static foldWithParent(queryResults: IQueryResult[]): IQueryResult[];
	    static defaultGetResult(result: IQueryResult): IQueryResult;
	    static defaultGetMoreResults(results: IQueryResult[]): IQueryResult[];
	}

}
declare module Coveo {
	/**
	 * The `FoldingForThread` component inherits from the [`Folding`]{@link Folding} component. It offers the
	 * same configuration options.
	 *
	 * Folding conversations and threads requires different processing. When you need to fold all child items (including
	 * their attachments) on the same level under a common ancestor item, use this component rather than the `Folding`
	 * component.
	 *
	 * This component works well with Chatter and Lithium.
	 *
	 * **Note:**
	 * > There can only be one `FoldingForThread` component per [`Tab`]{@link Tab} component.
	 *
	 * See [Folding Results](https://developers.coveo.com/x/7hUvAg).
	 */
	class FoldingForThread extends Folding {
	    element: HTMLElement;
	    options: IFoldingOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * Creates a new `FoldingForThread` component
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `FoldingForThread` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IFoldingOptions, bindings?: IComponentBindings);
	}

}
declare module Coveo {
	interface IFollowItemOptions {
	    watchedFields?: IFieldOption[];
	    modifiedDateField?: string;
	}
	/**
	 * The FollowItem component renders a widget that the end user can click to follow a particular item. A user following
	 * an item receives email notifications when the item changes.
	 *
	 * **Note:**
	 * > A {@link SearchAlerts} component must be present in the page for this component to work. It is also necessary to
	 * > meet certain requirements to be able to use this component (see
	 * > [Deploying Search Alerts on a Coveo JS Search Page](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=248)).
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class FollowItem extends Component {
	    element: HTMLElement;
	    options: IFollowItemOptions;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the follow item component
	     * @componentOptions
	     */
	    static options: IFollowItemOptions;
	    /**
	     * Creates a new FollowItem component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the FollowItem component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time)
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: IFollowItemOptions, bindings?: IResultsComponentBindings, result?: IQueryResult);
	    setFollowed(subscription: ISubscription): void;
	    setNotFollowed(): void;
	    /**
	     * Follows the item if not already following it. Stops following the item otherwise.
	     *
	     * Also logs the appropriate event in the usage analytics (either `searchAlertsFollowDocument` or
	     * `searchAlertsUnfollowDocument`).
	     */
	    toggleFollow(): void;
	    protected getText(): string;
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface IHiddenQueryOptions {
	    maximumDescriptionLength: number;
	    title: string;
	}
	/**
	 * The HiddenQuery component handles a "hidden" query parameter (`hq`) and its description (`hd`).
	 *
	 * Concretely, this means that if a HiddenQuery component is present in your page and you load your search interface
	 * with `hq=foo&hd=bar` in the URL hash, the component adds `foo` as an expression to the query (`hq` is the hidden
	 * query) and renders `bar` in the {@link Breadcrumb} (`hd` is the hidden query description).
	 */
	class HiddenQuery extends Component {
	    element: HTMLElement;
	    options: IHiddenQueryOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * Possible options for the `HiddenQuery` component
	     * @componentOptions
	     */
	    static options: IHiddenQueryOptions;
	    /**
	     * Creates a new HiddenQuery component, which binds multiple events ({@link QueryEvents.buildingQuery},
	     * {@link BreadcrumbEvents.populateBreadcrumb} and {@link BreadcrumbEvents.clearBreadcrumb}).
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the HiddenQuery component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IHiddenQueryOptions, bindings?: IComponentBindings);
	    /**
	     * Clears any `hd` or `hq` set in the {@link QueryStateModel}.
	     * Also logs the `contextRemove` event in the usage analytics and triggers a new query.
	     */
	    clear(): void;
	}

}
declare module Coveo {
	/// <reference path="../ui/HierarchicalFacet/HierarchicalFacet.d.ts" />
	/// <reference path="FacetQueryController.d.ts" />
	class HierarchicalFacetQueryController extends FacetQueryController {
	    facet: HierarchicalFacet;
	    constructor(facet: HierarchicalFacet);
	    search(params: FacetSearchParameters, oldLength?: number): Promise<IIndexFieldValue[]>;
	    protected getAllowedValuesFromSelected(): any[];
	}

}
declare module Coveo {
	/// <reference path="HierarchicalFacet.d.ts" />
	class HierarchicalFacetValuesList extends FacetValuesList {
	    facet: HierarchicalFacet;
	    facetValueElementKlass: IFacetValueElementKlass;
	    hierarchyFacetValues: FacetValue[];
	    constructor(facet: HierarchicalFacet, facetValueElementKlass: IFacetValueElementKlass);
	    sortFacetValues(hierarchyFacetValues?: FacetValue[]): FacetValue[];
	    protected getValuesToBuildWith(): FacetValue[];
	}

}
declare module Coveo {
	/// <reference path="HierarchicalFacet.d.ts" />
	class HierarchicalFacetSearch extends FacetSearch {
	    facet: HierarchicalFacet;
	    facetSearchValuesListKlass: IFacetSearchValuesListKlass;
	    constructor(facet: HierarchicalFacet, facetSearchValuesListKlass: IFacetSearchValuesListKlass, root: HTMLElement);
	    protected buildParamsForExcludingCurrentlyDisplayedValues(): FacetSearchParameters;
	    protected selectAllValuesMatchingSearch(): void;
	}

}
declare module Coveo {
	class HierarchicalBreadcrumbValueElement extends BreadcrumbValueElement {
	    facet: HierarchicalFacet;
	    facetValue: FacetValue;
	    constructor(facet: HierarchicalFacet, facetValue: FacetValue);
	    build(): Dom;
	}

}
declare module Coveo {
	/// <reference path="HierarchicalFacet.d.ts" />
	class HierarchicalBreadcrumbValuesList extends BreadcrumbValueList {
	    facet: HierarchicalFacet;
	    facetValues: FacetValue[];
	    valueHierarchy: {
	        [facetValue: string]: IValueHierarchy;
	    };
	    constructor(facet: HierarchicalFacet, facetValues: FacetValue[], valueHierarchy: {
	        [facetValue: string]: IValueHierarchy;
	    });
	    buildAsString(): string;
	}

}
declare module Coveo {
	/// <reference path="HierarchicalFacet.d.ts" />
	class HierarchicalFacetValueElement extends FacetValueElement {
	    facet: HierarchicalFacet;
	    facetValue: FacetValue;
	    keepDisplayedValueNextTime: boolean;
	    constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
	}

}
declare module Coveo {
	class HierarchicalFacetSearchValueElement extends FacetValueElement {
	    facet: HierarchicalFacet;
	    facetValue: FacetValue;
	    keepDisplayedValueNextTime: boolean;
	    constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
	    _handleSelectValue(eventBindings: IValueElementEventsBinding): void;
	    _handleExcludeClick(eventBindings: IValueElementEventsBinding): void;
	}

}
declare module Coveo {
	/// <reference path="../Facet/Facet.d.ts" />
	class HierarchicalFacetSearchValuesList extends FacetSearchValuesList {
	    facet: Facet;
	    constructor(facet: Facet);
	}

}
declare module Coveo {
	/// <reference path="HierarchicalFacet.d.ts" />
	class OmniboxHierarchicalValueElement extends OmniboxValueElement {
	    facet: HierarchicalFacet;
	    facetValue: FacetValue;
	    eventArg: IPopulateOmniboxObject;
	    constructor(facet: HierarchicalFacet, facetValue: FacetValue, eventArg: IPopulateOmniboxObject);
	    _handleSelectValue(eventBindings: IValueElementEventsBinding): void;
	    _handleExcludeClick(eventBindings: IValueElementEventsBinding): void;
	}

}
declare module Coveo {
	/// <reference path="HierarchicalFacet.d.ts" />
	class OmniboxHierarchicalValuesList extends OmniboxValuesList {
	    facet: HierarchicalFacet;
	    facetValues: FacetValue[];
	    omniboxObject: IPopulateOmniboxObject;
	    constructor(facet: HierarchicalFacet, facetValues: FacetValue[], omniboxObject: IPopulateOmniboxObject);
	}

}
declare module Coveo {
	/// <reference path="../../controllers/HierarchicalFacetQueryController.d.ts" />
	/// <reference path="HierarchicalFacetValuesList.d.ts" />
	/// <reference path="HierarchicalFacetSearch.d.ts" />
	/// <reference path="HierarchicalBreadcrumbValuesList.d.ts" />
	/// <reference path="HierarchicalFacetValueElement.d.ts" />
	interface IHierarchicalFacetOptions extends IFacetOptions {
	    delimitingCharacter?: string;
	    levelStart?: number;
	    levelEnd?: number;
	    marginByLevel?: number;
	}
	interface IValueHierarchy {
	    childs?: IValueHierarchy[];
	    parent?: IValueHierarchy;
	    originalPosition?: number;
	    facetValue: FacetValue;
	    level: number;
	    keepOpened: boolean;
	    hasChildSelected: boolean;
	    allChildShouldBeSelected: boolean;
	}
	/**
	 * The `HierarchicalFacet` component inherits all of its options and behaviors from the [`Facet`]{@link Facet}
	 * component, but is meant to be used to render hierarchical values.
	 *
	 * You can use the `HierarchicalFacet` component to display files in a file system, or categories for items in a
	 * hierarchy.
	 *
	 * This facet requires a group by field with a special format to work correctly.
	 *
	 * **Example:**
	 *
	 * If you have the following files indexed on a file system:
	 * ```
	 * c:\
	 *    folder1\
	 *        text1.txt
	 *    folder2\
	 *      folder3\
	 *        text2.txt
	 * ```
	 * The `text1.txt` item would need to have a field with the following format:
	 * `@field : c; c|folder1;`
	 *
	 * The `text2.txt` item would have a field with the following format:
	 * `@field: c; c|folder2; c|folder2|folder3;`
	 *
	 * The `|` character allows the facet to build its hierarchy (`folder3` inside `folder2` inside `c`).
	 *
	 * Since both items contain the `c` value, selecting this value in the facet would return both items.
	 *
	 * Selecting the `folder3` value in the facet would only return the `text2.txt` item.
	 */
	class HierarchicalFacet extends Facet implements IComponentBindings {
	    element: HTMLElement;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IHierarchicalFacetOptions;
	    static parent: typeof Facet;
	    options: IHierarchicalFacetOptions;
	    facetValuesList: HierarchicalFacetValuesList;
	    numberOfValuesToShow: number;
	    facetQueryController: HierarchicalFacetQueryController;
	    topLevelHierarchy: IValueHierarchy[];
	    shouldReshuffleFacetValuesClientSide: boolean;
	    /**
	     * Creates a new `HierarchicalFacet` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `HierarchicalFacet` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IHierarchicalFacetOptions, bindings: IComponentBindings);
	    /**
	     * Selects a single value.
	     * @param value The value to select.
	     * @param selectChildren Specifies whether to also select all child values (if any). Default value is the opposite of
	     * the [`useAnd`]{@link Facet.options.useAnd} option value set for this `HierarchicalFacet`.
	     */
	    selectValue(value: FacetValue, selectChildren?: boolean): void;
	    selectValue(value: string, selectChildren?: boolean): void;
	    /**
	     * Selects multiple values
	     * @param values The array of values to select.
	     * @param selectChildren Specifies whether to also select all child values (if any). Default value is the opposite of
	     * the [`useAnd`]{@link Facet.options.useAnd} option value set for this `HierarchicalFacet`.
	     */
	    selectMultipleValues(values: FacetValue[], selectChildren?: boolean): void;
	    selectMultipleValues(values: string[], selectChildren?: boolean): void;
	    /**
	     * Deselects a single value
	     * @param value The value to deselect.
	     * @param deselectChildren Specifies whether to also deselect all child values (if any). Default value is `true`.
	     */
	    deselectValue(value: FacetValue, deselectChildren?: boolean): void;
	    deselectValue(value: string, deselectChildren?: boolean): void;
	    /**
	     * Excludes a single value.
	     * @param value The value to exclude.
	     * @param excludeChildren Specifies whether to also exclude all child values (if any). Default value is the opposite
	     * of the [`useAnd`]{@link Facet.options.useAnd} option value set for this `HierarchicalFacet`.
	     */
	    excludeValue(value: FacetValue, excludeChildren?: boolean): void;
	    excludeValue(value: string, excludeChildren?: boolean): void;
	    /**
	     * Un-excludes a single value.
	     * @param value The value to un-exclude.
	     * @param unexludeChildren Specifies whether to also un-exclude all child values (if any). Default value is the
	     * opposite of the [`useAnd`]{@link Facet.options.useAnd} option value set for this `HierarchicalFacet`.
	     */
	    unexcludeValue(value: FacetValue, unexludeChildren?: boolean): void;
	    unexcludeValue(value: string, unexludeChildren?: boolean): void;
	    /**
	     * Deselects multiple values.
	     * @param values The array of values to deselect.
	     * @param deselectChildren Specifies whether to also deselect all child values (if any). Default value is the opposite
	     * of the [`useAnd`]{@link Facet.options.useAnd} option value set for this `HierarchicalFacet`.
	     */
	    deselectMultipleValues(values: FacetValue[], deselectChildren?: boolean): void;
	    deselectMultipleValues(values: string[], deselectChildren?: boolean): void;
	    /**
	     * Toggles the selection of a single value (selects value if not selected; deselects value if selected).
	     * @param value The value to select or deselect.
	     */
	    toggleSelectValue(value: FacetValue): void;
	    toggleSelectValue(value: string): void;
	    /**
	     * Toggles the exclusion of a single value (excludes value if not excluded; un-excludes value if excluded).
	     * @param value The value to exclude or un-exclude.
	     */
	    toggleExcludeValue(value: FacetValue): void;
	    toggleExcludeValue(value: string): void;
	    /**
	     * Gets the caption of a single value.
	     * @param facetValue The value whose caption the method should return.
	     * @returns {string} The caption of the value.
	     */
	    getValueCaption(facetValue: IIndexFieldValue): string;
	    getValueCaption(facetValue: FacetValue): string;
	    /**
	     * Gets the values that the `HierarchicalFacet` is currently displaying.
	     * @returns {any[]} An array containing all the values that the `HierarchicalFacet` is currently displaying.
	     */
	    getDisplayedValues(): string[];
	    /**
	     * Updates the sort criteria for the `HierarchicalFacet`.
	     *
	     * See the [`sortCriteria`]{@link IGroupByRequest.sortCriteria} property of the [`IGroupByRequest`] interface for the
	     * list and description of possible values.
	     *
	     * @param criteria The new sort criteria.
	     */
	    updateSort(criteria: string): void;
	    /**
	     * Opens (expands) a single value and shows all its children.
	     * @param value The value to open.
	     */
	    open(value: FacetValue): any;
	    open(value: IValueHierarchy): any;
	    open(value: String): any;
	    /**
	     * Closes (collapses) a single value and hides all its children.
	     * @param value The value to close.
	     */
	    close(value: FacetValue): any;
	    close(value: IValueHierarchy): any;
	    close(value: String): any;
	    /**
	     * Resets the `HierarchicalFacet` state.
	     */
	    reset(): void;
	    processFacetSearchAllResultsSelected(facetValues: FacetValue[]): void;
	    protected triggerUpdateDeltaQuery(facetValues: FacetValue[]): void;
	    protected updateSearchElement(moreValuesAvailable?: boolean): void;
	    protected facetValueHasChanged(): void;
	    protected initFacetQueryController(): void;
	    protected initFacetSearch(): void;
	    protected handleDeferredQuerySuccess(data: IQuerySuccessEventArgs): void;
	    protected handlePopulateSearchAlerts(args: ISearchAlertsPopulateMessageEventArgs): void;
	    protected handlePopulateBreadcrumb(args: IPopulateBreadcrumbEventArgs): void;
	    protected handleOmniboxWithStaticValue(eventArg: IPopulateOmniboxEventArgs): void;
	    protected rebuildValueElements(): void;
	    protected initFacetValuesList(): void;
	    protected updateMoreLess(): void;
	    protected handleClickMore(): void;
	    protected handleClickLess(): void;
	    protected updateNumberOfValues(): void;
	    getValueFromHierarchy(value: any): IValueHierarchy;
	    getAllValueHierarchy(): {
	        [facetValue: string]: IValueHierarchy;
	    };
	}

}
declare module Coveo {
	/**
	 * Available options for the {@link Icon} component.
	 */
	interface IIconOptions {
	    value?: string;
	    small?: boolean;
	    withLabel?: boolean;
	    labelValue?: string;
	}
	/**
	 * The Icon component outputs the corresponding icon for a given file type. The component searches for a suitable icon
	 * from those available in the Coveo JavaScript Search Framework. If the component finds no suitable icon, it instead
	 * outputs a generic icon.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class Icon extends Component {
	    element: HTMLElement;
	    options: IIconOptions;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the Icon
	     * @componentOptions
	     */
	    static options: IIconOptions;
	    /**
	     * Creates a new Icon component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Icon component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: IIconOptions, bindings?: IComponentBindings, result?: IQueryResult);
	    static createIcon(result: IQueryResult, options?: IIconOptions, element?: HTMLElement, bindings?: IComponentBindings): HTMLElement;
	    static shouldDisplayLabel(options: IIconOptions, bindings: IComponentBindings): boolean;
	    static preprocessIconInfo(options: IIconOptions, info: IFileTypeInfo): IFileTypeInfo;
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface ILogoOptions {
	}
	/**
	 * The Logo component adds a clickable Coveo logo in the search interface.
	 */
	class Logo extends Component {
	    element: HTMLElement;
	    options: ILogoOptions;
	    static ID: string;
	    static doExport: () => void;
	    static options: ILogoOptions;
	    /**
	     * Creates a new Logo component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Logo component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: ILogoOptions, bindings?: IComponentBindings);
	    hide(): void;
	    show(): void;
	}

}
declare module Coveo {
	/**
	 * Represent a single cell of data in the {@link Matrix} component.
	 */
	class Cell {
	    constructor(value?: any, el?: HTMLElement);
	    /**
	     * Return the value of the cell.
	     * @returns {any}
	     */
	    getValue(): any;
	    /**
	     * Return the `HTMLElement` for the cell.
	     * @returns {HTMLElement}
	     */
	    getHTML(): HTMLElement;
	    /**
	     * Set the value if the cell.
	     * @param value
	     */
	    setValue(value: any): void;
	    /**
	     * Set the `HTMLElement` for the cell.
	     * @param html
	     */
	    setHTML(html: HTMLElement): void;
	    /**
	     * Show the preview of the cell.
	     * @param minWidth css minWidth property : eg 100px
	     * @param maxWidth css maxWidth property : eg 100px
	     */
	    addPreview(minWidth: string, maxWidth: string): void;
	    /**
	     * Remove the preview of the cell
	     */
	    removePreview(): void;
	    /**
	     * Update the preview with a new template
	     * @param template
	     */
	    updatePreview(template: string): void;
	}

}
declare module Coveo {
	class DefaultMatrixResultPreviewTemplate extends Template {
	    constructor(computedField: string, format: string);
	    instantiateToString(object?: IQueryResult, instantiateOptions?: IInstantiateTemplateOptions): string;
	    instantiateToElement(object?: IQueryResult, instantiateOptions?: IInstantiateTemplateOptions): Promise<HTMLElement>;
	}

}
declare module Coveo {
	interface IMatrixOptions {
	    title?: string;
	    rowField: IFieldOption;
	    sortCriteria?: string;
	    maximumNumberOfRows?: number;
	    enableRowTotals?: boolean;
	    columnField: IFieldOption;
	    columnFieldValues?: string[];
	    columnLabels?: string[];
	    columnHeader?: string;
	    maximumNumberOfValuesInGroupBy?: number;
	    enableColumnTotals?: boolean;
	    computedField: IFieldOption;
	    computedFieldOperation?: string;
	    computedFieldFormat?: string;
	    cellFontSize?: string;
	    enableHoverPreview?: boolean;
	    previewSortCriteria?: string;
	    previewSortField?: IFieldOption;
	    previewMaxWidth?: string;
	    previewMinWidth?: string;
	    previewDelay?: number;
	    previewTemplate?: Template;
	}
	/**
	 * The Matrix component uses the values of two fields (row and column) to display the results of the specified computed
	 * field in a table.
	 *
	 * The user specifies the values to use for the columns. An {@link IGroupByRequest} operation performed at the same time
	 * as the main query retrieves the values to use for the rows.
	 *
	 * In a way that is similar to the {@link Facet} component, selecting a Matrix cell allows the end user to drill down
	 * inside the results by restricting the row field and the column field to match the values of the selected cell.
	 */
	class Matrix extends Component {
	    element: HTMLElement;
	    options: IMatrixOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The possible options for the component
	     * @componentOptions
	     */
	    static options: IMatrixOptions;
	    /**
	     * Holds the data for the Matrix.
	     */
	    data: Cell[][];
	    groupByIndex: any[];
	    rowId: string;
	    columnId: string;
	    /**
	     * The currently selected row value, or `undefined` if nothing is selected.
	     */
	    selectedRowValue: string;
	    /**
	     * The currently selected column value, or `undefined` if nothing is selected.
	     */
	    selectedColumnValue: any;
	    /**
	     * Creates a new Matrix. Also verifies whether options are valid and coherent. Binds query events.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Matrix component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IMatrixOptions, bindings?: IComponentBindings);
	    /**
	     * Selects a cell by its row and column number. Does not execute a query.
	     * @param rowNumber The row number of the cell to select.
	     * @param columnNumber The column number of the cell to select.
	     */
	    selectCell(rowNumber: number, columnNumber: number): void;
	    /**
	     * Returns the currently selected column value.
	     */
	    getSelectedColumnValue(): string;
	    /**
	     * Returns the currently selected row value.
	     */
	    getSelectedRowValue(): string;
	    /**
	     * Gets the HTMLElement associated to a cell.
	     * @param rowNumber The row number of the cell.
	     * @param columnNumber The column number of the cell.
	     * @returns {HTMLElement} The associated HTMLElement.
	     */
	    getCellElement(rowNumber: number, columnNumber: number): HTMLElement;
	    /**
	     * Gets the string associated to a cell.
	     * @param rowNumber The row number of the cell.
	     * @param columnNumber The column number of the cell.
	     * @returns {string} The associated string.
	     */
	    getCellValue(rowNumber: number, columnNumber: number): string;
	    drawMatrix(): void;
	}

}
declare module Coveo {
	/// <reference path="Omnibox.d.ts" />
	class FieldAddon {
	    omnibox: Omnibox;
	    static INDEX: number;
	    cache: {
	        [hash: string]: Promise<string[]>;
	    };
	    constructor(omnibox: Omnibox);
	    getSuggestion(): Promise<IOmniboxSuggestion[]>;
	}

}
declare module Coveo {
	/// <reference path="Omnibox.d.ts" />
	class QueryExtensionAddon {
	    omnibox: Omnibox;
	    static INDEX: number;
	    cache: {
	        [hash: string]: Promise<string[]>;
	    };
	    constructor(omnibox: Omnibox);
	    getSuggestion(): Promise<IOmniboxSuggestion[]>;
	    hash(): void;
	}

}
declare module Coveo {
	/// <reference path="Omnibox.d.ts" />
	class QuerySuggestAddon {
	    omnibox: Omnibox;
	    static INDEX: number;
	    constructor(omnibox: Omnibox);
	    getSuggestion(): Promise<IOmniboxSuggestion[]>;
	}

}
declare module Coveo {
	/// <reference path="Omnibox.d.ts" />
	class OldOmniboxAddon {
	    omnibox: Omnibox;
	    constructor(omnibox: Omnibox);
	    getSuggestion(): Promise<IOmniboxSuggestion[]>[];
	}

}
declare module Coveo {
	class QueryboxQueryParameters {
	    constructor(options: IQueryboxOptions);
	    addParameters(queryBuilder: QueryBuilder, lastQuery: string): void;
	}

}
declare module Coveo {
	/// <reference types="magic-box" />
	interface IQueryboxOptions {
	    enableSearchAsYouType?: boolean;
	    searchAsYouTypeDelay?: number;
	    enableQuerySyntax?: boolean;
	    enableWildcards?: boolean;
	    enableQuestionMarks?: boolean;
	    enableLowercaseOperators?: boolean;
	    enablePartialMatch?: boolean;
	    partialMatchKeywords?: number;
	    partialMatchThreshold?: string;
	    autoFocus?: boolean;
	    placeholder?: string;
	    triggerQueryOnClear?: boolean;
	}
	/**
	 * The `Querybox` component renders an input which the end user can interact with to enter and submit queries.
	 *
	 * When the user submits a query, the `Querybox` component triggers a query and logs the corresponding usage analytics
	 * data.
	 *
	 * For technical reasons, it is necessary to instantiate this component on a `div` element rather than on an `input`
	 * element.
	 *
	 * See also the [`Searchbox`]{@link Searchbox} component, which can automatically instantiate a `Querybox` along with an
	 * optional [`SearchButton`]{@link SearchButton} component.
	 */
	class Querybox extends Component {
	    element: HTMLElement;
	    options: IQueryboxOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the Querybox.
	     * @componentOptions
	     */
	    static options: IQueryboxOptions;
	    magicBox: Coveo.MagicBox.Instance;
	    /**
	     * Creates a new `Querybox component`. Creates a new `Coveo.Magicbox` instance and wraps the Magicbox methods
	     * (`onblur`, `onsubmit` etc.). Binds event on `buildingQuery` and before redirection (for standalone box).
	     * @param element The HTMLElement on which to instantiate the component. This cannot be an HTMLInputElement for
	     * technical reasons.
	     * @param options The options for the `Querybox` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IQueryboxOptions, bindings?: IComponentBindings);
	    /**
	     * Adds the current content of the input to the query and triggers a query if the current content of the input has
	     * changed since last submit.
	     *
	     * Also logs the `serachboxSubmit` event in the usage analytics.
	     */
	    submit(): void;
	    /**
	     * Sets the content of the input.
	     *
	     * @param text The string to set in the input.
	     */
	    setText(text: string): void;
	    /**
	     * Clears the content of the input.
	     *
	     * See also the [`triggerQueryOnClear`]{@link Querybox.options.triggerQueryOnClear} option.
	     */
	    clear(): void;
	    /**
	     * Gets the content of the input.
	     *
	     * @returns {string} The content of the input.
	     */
	    getText(): string;
	    /**
	     * Gets the result from the input.
	     *
	     * @returns {Result} The result.
	     */
	    getResult(): Coveo.MagicBox.Result;
	    /**
	     * Gets the displayed result from the input.
	     *
	     * @returns {Result} The displayed result.
	     */
	    getDisplayedResult(): Coveo.MagicBox.Result;
	    /**
	     * Gets the current cursor position in the input.
	     *
	     * @returns {number} The cursor position (index starts at 0).
	     */
	    getCursor(): number;
	    /**
	     * Gets the result at cursor position.
	     *
	     * @param match {string | { (result): boolean }} The match condition.
	     *
	     * @returns {Result[]} The result.
	     */
	    resultAtCursor(match?: string | {
	        (result): boolean;
	    }): Coveo.MagicBox.Result[];
	}

}
declare module Coveo {
	/// <reference path="FieldAddon.d.ts" />
	/// <reference path="QueryExtensionAddon.d.ts" />
	/// <reference path="QuerySuggestAddon.d.ts" />
	/// <reference path="OldOmniboxAddon.d.ts" />
	/// <reference types="magic-box" />
	interface IPopulateOmniboxSuggestionsEventArgs {
	    omnibox: Omnibox;
	    suggestions: Array<Coveo.MagicBox.Suggestion[] | Promise<Coveo.MagicBox.Suggestion[]>>;
	}
	interface IOmniboxSuggestion extends Coveo.MagicBox.Suggestion {
	    executableConfidence?: number;
	}
	interface IOmniboxOptions extends IQueryboxOptions {
	    inline?: boolean;
	    enableFieldAddon?: boolean;
	    enableSimpleFieldAddon?: boolean;
	    listOfFields?: IFieldOption[];
	    fieldAlias?: {
	        [alias: string]: IFieldOption;
	    };
	    enableQuerySuggestAddon?: boolean;
	    enableQueryExtensionAddon?: boolean;
	    omniboxTimeout?: number;
	    placeholder?: string;
	    grammar?: (grammar: {
	        start: string;
	        expressions: {
	            [id: string]: Coveo.MagicBox.ExpressionDef;
	        };
	    }) => {
	        start: string;
	        expressions: {
	            [id: string]: Coveo.MagicBox.ExpressionDef;
	        };
	    };
	}
	/**
	 * The Omnibox component is very similar to the simpler {@link Querybox} component. It supports all of the same options
	 * and behaviors.
	 *
	 * The Omnibox component takes care of adding type-ahead capability to the search input. Custom components can extend
	 * and customize the type-ahead and the suggestions it provides.
	 *
	 * The type-ahead is configurable by activating addons, which the Coveo JavaScript Search Framework provides OOTB
	 * (facets, analytics suggestions, Coveo Machine Learning suggestions and advanced Coveo syntax suggestions).
	 *
	 * It is also possible for external code to provide type-ahead suggestions.
	 *
	 * See also the {@link Searchbox} component, which can automatically instantiate an Omnibox component along with an
	 * optional {@link SearchButton} component.
	 */
	class Omnibox extends Component {
	    element: HTMLElement;
	    options: IOmniboxOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the omnibox
	     * @componentOptions
	     */
	    static options: IOmniboxOptions;
	    magicBox: Coveo.MagicBox.Instance;
	    /**
	     * Creates a new Omnibox component. Also enables necessary addons and binds events on various query events.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Omnibox component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IOmniboxOptions, bindings?: IComponentBindings);
	    /**
	     * Adds the current content of the input to the query and triggers a query if the current content of the input has
	     * changed since last submit.
	     *
	     * Also logs a `searchboxSubmit` event in the usage analytics.
	     */
	    submit(): void;
	    /**
	     * Gets the current content of the input.
	     * @returns {string} The current content of the input.
	     */
	    getText(): string;
	    /**
	     * Sets the content of the input
	     * @param text The string to set in the input.
	     */
	    setText(text: string): void;
	    /**
	     * Clears the content of the input.
	     */
	    clear(): void;
	    /**
	     * Gets the `HTMLInputElement` of the Omnibox.
	     */
	    getInput(): HTMLInputElement;
	    getResult(): Coveo.MagicBox.Result;
	    getDisplayedResult(): Coveo.MagicBox.Result;
	    getCursor(): number;
	    resultAtCursor(match?: string | {
	        (result: Coveo.MagicBox.Result): boolean;
	    }): Coveo.MagicBox.Result[];
	    updateQueryState(): void;
	}

}
declare module Coveo {
	interface IOmniboxResultListOptions extends IResultListOptions {
	    omniboxZIndex?: number;
	    onSelect?: (result: IQueryResult, resultElement: HTMLElement, omniboxObject: IPopulateOmniboxEventArgs) => void;
	    headerTitle?: string;
	    queryOverride?: string;
	}
	/**
	 * The OmniboxResultList component behaves exactly like the {@link ResultList} component (which it extends), except that
	 * it renders itself inside the {@link Omnibox} component.
	 *
	 * This component can provide a kind of search-as-you-type functionality, allowing you to easily render complex Result
	 * Templates inside the Omnibox component.
	 *
	 * **Example:**
	 *
	 * ```html
	 * <div class="CoveoOmniboxResultList">
	 *   <script class="result-template" type="text/x-underscore">
	 *     <div>
	 *       <a class='CoveoResultLink'></a>
	 *     </div>
	 *   </script>
	 * </div>
	 * ```
	 */
	class OmniboxResultList extends ResultList implements IComponentBindings {
	    element: HTMLElement;
	    options: IOmniboxResultListOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IOmniboxResultListOptions;
	    /**
	     * Creates a new OmniboxResultList component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the OmniboxResultList component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IOmniboxResultListOptions, bindings?: IComponentBindings);
	    /**
	     * Builds and returns an array of `HTMLElement` from the {@link IQueryResults} set received as an argument.
	     * @param results The IQueryResults set to build an array of `HTMLElement` from.
	     */
	    buildResults(results: IQueryResults): Promise<HTMLElement[]>;
	    /**
	     * Creates a result container and appends each element from the received `HTMLElement` array to it. For each element
	     * it appends to the result container, this method triggers a `newResultDisplayed` event. Once all elements have been
	     * appended to the result container, the method triggers a `newResultsDisplayed` event.
	     * @param resultsElement The array of `HTMLElement` to render.
	     * @param append
	     */
	    renderResults(resultsElement: HTMLElement[], append?: boolean): Promise<any>;
	}

}
declare module Coveo {
	interface IPagerOptions {
	    numberOfPages: number;
	    enableNavigationButton: boolean;
	    maxNumberOfPages: number;
	    maximumNumberOfResultsFromIndex: number;
	}
	/**
	 * The Pager component attaches itself to a `div` element and renders widgets that allow the end user to navigate
	 * through the different result pages.
	 *
	 * This component takes care of triggering a query with the correct result range whevoid the end user selects a page or
	 * uses the navigation buttons (**Previous** and **Next**).
	 */
	class Pager extends Component {
	    element: HTMLElement;
	    options: IPagerOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the Pager
	     * @componentOptions
	     */
	    static options: IPagerOptions;
	    /**
	     * The current page (1-based index).
	     */
	    currentPage: number;
	    /**
	     * Creates a new Pager. Binds multiple query events ({@link QueryEvents.newQuery}, {@link QueryEvents.buildingQuery},
	     * {@link QueryEvents.querySuccess}, {@link QueryEvents.queryError} and {@link QueryEvents.noResults}. Renders itself
	     * on every query success.
	     * @param element The HTMLElement on which to instantiate the component (normally a `div`).
	     * @param options The options for the Pager component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IPagerOptions, bindings?: IComponentBindings);
	    /**
	     * Sets the current page, then executes a query.
	     *
	     * Also logs an event in the usage analytics (`pageNumber` by default) with the new current page number as meta data.
	     *
	     * @param pageNumber The page number to navigate to.
	     * @param analyticCause The event to log in the usage analytics.
	     */
	    setPage(pageNumber: number, analyticCause?: IAnalyticsActionCause): void;
	    /**
	     * Navigates to the previous page, then executes a query.
	     *
	     * Also logs the `pagePrevious` event in the usage analytics with the new current page number as meta data.
	     */
	    previousPage(): void;
	    /**
	     * Navigates to the next page, then executes a query.
	     *
	     * Also logs the `pageNext` event in the usage analytics with the new current page number as meta data.
	     */
	    nextPage(): void;
	}

}
declare module Coveo {
	interface IPipelineContextOptions {
	}
	/**
	 * A PipelineContext is used to add contextual information about the environment inside which the query is executed.
	 *
	 * It allows to pass arbitrary key values pairs ( think `JSON` ), which can then be leveraged by the [Query Pipeline](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=108),
	 * or by Coveo Machine Learning.
	 *
	 * This can be any arbitrary information that you can use to contextualize the query and help Coveo improve relevance by returning results tailored to a specific context.
	 *
	 * This component is meant to be configured using a script tag, with a JSON content.
	 *
	 * ```
	 * <script class='CoveoPipelineContext' type='text/context'>
	 *   {
	 *      "foo" : "bar"
	 *   }
	 * </script>
	 * ```
	 *
	 * You can also simply use JavaScript code to pass context values, using the {@link QueryBuilder.addContextValue} method.
	 *
	 * This mean you do not necessarily need to use this component to pass context.
	 * ```
	 * Coveo.$$(root).on('buildingQuery', function(args) {
	 *     args.queryBuilder.addContextValue('foo', 'bar');
	 * })
	 * ```
	 *
	 * Using this component as opposed to JavaScript code means you will be able to leverage the interface editor.
	 *
	 * Regardless of if you use this component or JavaScript to add context, both will add the needed data in the [Query.Context]{@link IQuery.context} parameter.
	 */
	class PipelineContext extends Component {
	    element: HTMLElement;
	    options: IPipelineContextOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static CURRENT_URL: string;
	    static doExport: () => void;
	    constructor(element: HTMLElement, options?: IPipelineContextOptions, bindings?: IComponentBindings);
	    /**
	     * Return all the context keys configured for context.
	     * @returns {string[]|Array}
	     */
	    getContextKeys(): string[];
	    /**
	     * Get the context value associated to the given key.
	     * @param key
	     * @returns {string}
	     */
	    getContextValue(key: string): string;
	}

}
declare module Coveo {
	interface IPreferencesPanelOptions {
	}
	/**
	 * The PreferencesPanel component renders a **Preferences** item inside the {@link Settings} component which the end
	 * user can click to access a panel from which it is possible to specify certain customization options for the search
	 * interface. These customization options are then saved in the browser local storage.
	 *
	 * See also the {@link ResultsFiltersPreferences} and {@link ResultsPreferences} components.
	 */
	class PreferencesPanel extends Component {
	    element: HTMLElement;
	    options: IPreferencesPanelOptions;
	    static ID: string;
	    static doExport: () => void;
	    static options: IPreferencesPanelOptions;
	    /**
	     * Creates a new PreferencesPanel.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the PreferencesPanel component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IPreferencesPanelOptions, bindings?: IComponentBindings, ModalBox?: any);
	    /**
	     * Opens the PreferencesPanel.
	     */
	    open(): void;
	    /**
	     * Closes the PreferencesPanel without saving changes.
	     *
	     * Also triggers the `exitPreferencesWithoutSave` event.
	     */
	    close(): void;
	    /**
	     * Saves the changes and executes a new query.
	     *
	     * Also triggers the `savePreferences` event.
	     */
	    save(): void;
	}

}
declare module Coveo {
	interface IPrintableUriOptions extends IResultLinkOptions {
	}
	/**
	 * The `PrintableUri` component inherits from the [ `ResultLink` ]{@link ResultLink} component and supports all of its options.
	 *
	 * This component displays the URI, or path, to access a result.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class PrintableUri extends ResultLink {
	    element: HTMLElement;
	    options: IPrintableUriOptions;
	    result: IQueryResult;
	    static ID: string;
	    static options: IPrintableUriOptions;
	    static doExport: () => void;
	    /**
	     * Creates a new PrintableUri.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the PrintableUri component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options: IPrintableUriOptions, bindings?: IResultsComponentBindings, result?: IQueryResult);
	    renderParentsXml(element: HTMLElement, parentsXml: string): void;
	    renderUri(element: HTMLElement, result?: IQueryResult): void;
	    buildSeparator(): HTMLElement;
	    buildHtmlToken(name: string, uri: string): HTMLElement;
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface IQueryDurationOptions {
	}
	/**
	 * The QueryDuration component displays the duration of the last query execution.
	 *
	 * When a {@link QueryEvents.querySuccess} event is triggered, the QueryDuration component becomes visible. It also
	 * displays the global duration, the index duration, the proxy duration, and the client duration in a single tooltip.
	 *
	 * If a {@link QueryEvents.queryError} event is triggered, the QueryDuration component becomes hidden.
	 */
	class QueryDuration extends Component {
	    element: HTMLElement;
	    options: IQueryDurationOptions;
	    static ID: string;
	    static doExport: () => void;
	    static options: IQueryDurationOptions;
	    /**
	     * Creates a new QueryDuration component.
	     * Binds handlers on the {@link QueryEvents.querySuccess} and {@link QueryEvents.queryError} events.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the QueryDuration component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IQueryDurationOptions, bindings?: IComponentBindings);
	}

}
declare module Coveo {
	interface IQuerySummaryOptions {
	    enableSearchTips?: boolean;
	    onlyDisplaySearchTips?: boolean;
	}
	/**
	 * The QuerySummary component can display information about the currently displayed range of results (e.g., "Results
	 * 1-10 of 123").
	 *
	 * If the query matches no item, the QuerySummary component can instead display tips to help the end user formulate
	 * a better query.
	 */
	class QuerySummary extends Component {
	    element: HTMLElement;
	    options: IQuerySummaryOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * Options for the component
	     * @componentOptions
	     */
	    static options: IQuerySummaryOptions;
	    /**
	     * Creates a new QuerySummary component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the QuerySummary component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IQuerySummaryOptions, bindings?: IComponentBindings);
	}

}
declare module Coveo {
	class DefaultQuickviewTemplate extends Template {
	    constructor();
	    instantiateToString(queryResult?: IQueryResult): string;
	}

}
declare module Coveo {
	interface IQuickviewDocumentOptions {
	    maximumDocumentSize?: number;
	}
	/**
	 * The `QuickviewDocument` component normally exists within a [`Quickview`]{@link Quickview} component. The sole purpose
	 * of this component is to add an `<iframe>` which loads the correct HTML version of the current item.
	 *
	 * The default [`contentTemplate`]{@link Quickview.options.contentTemplate} of the
	 * `Quickview` component includes the `QuickviewDocument` component.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class QuickviewDocument extends Component {
	    element: HTMLElement;
	    options: IQuickviewDocumentOptions;
	    result: IQueryResult;
	    static ID: string;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IQuickviewDocumentOptions;
	    /**
	     * Creates a new `QuickviewDocument` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `QuickviewDocument` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The current result.
	     */
	    constructor(element: HTMLElement, options?: IQuickviewDocumentOptions, bindings?: IComponentBindings, result?: IQueryResult);
	    createDom(): void;
	    open(): void;
	    protected renderHTMLDocument(iframe: HTMLIFrameElement, html: HTMLDocument): void;
	    computeHighlights(window: Window): string[];
	}

}
declare module Coveo {
	interface IQuickviewOptions {
	    title?: string;
	    showDate?: boolean;
	    contentTemplate?: Template;
	    enableLoadingAnimation?: boolean;
	    loadingAnimation?: HTMLElement | Promise<HTMLElement>;
	    alwaysShow?: boolean;
	    size?: string;
	}
	/**
	 * The `Quickview` component renders a button / link which the end user can click to open a modal box containing certain
	 * content about a result. Most of the time, this component references a [`QuickviewDocument`]{@link QuickviewDocument}
	 * in its [`contentTemplate`]{@link Quickview.options.contentTemplate}.
	 *
	 * **Note:**
	 * > - You can change the appearance of the `Quickview` link / button by adding HTML inside the body of its `div`.
	 * > - You can change the content of the `Quickview` modal box link by specifying a template ID or selector (see the
	 * > [`contentTemplate`]{@link Quickview.options.contentTemplate} option).
	 *
	 * **Example:**
	 * ```html
	 * [ ... ]
	 *
	 * <script class='result-template' type='text/underscore' id='myContentTemplateId'>
	 *   <div>
	 *     <span>This content will be displayed when then end user opens the Quickview modal box. It could also include other Coveo component, and use core helpers.</span>
	 *     <table class="CoveoFieldTable">
	 *       <tr data-field="@liboardshorttitle" data-caption="Board" />
	 *       <tr data-field="@licategoryshorttitle" data-caption="Category" />
	 *       <tr data-field="@sysauthor" data-caption="Author" />
	 *     </table>
	 *   </div>
	 * </script>
	 *
	 * [ ... ]
	 *
	 * <div class='CoveoResultList'>
	 *   <script class='result-template' type='text/underscore' id='myResultTemplateId'>
	 *
	 *   [ ... ]
	 *
	 *     <!-- The `myContentTemplateId` template applies when displaying content in the Quickview modal box. -->
	 *       <div class='CoveoQuickview' data-template-id='myContentTemplateId'>
	 *         <!-- This changes the appearance of the Quickview button itself in the results -->
	 *         <span>Click here for a Quickview</span>
	 *       </div>
	 *   </script>
	 *
	 *   [ ... ]
	 *
	 * <!-- Note that this is all optional. Simply including `<div class='CoveoQuickview'></div>` in the markup suffices most of the time and includes a default template, and default button appearance. -->
	 * ```
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class Quickview extends Component {
	    element: HTMLElement;
	    options: IQuickviewOptions;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: IQuickviewOptions;
	    static resultCurrentlyBeingRendered: IQueryResult;
	    /**
	     * Creates a new `Quickview` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `Quickview` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     * @param ModalBox The quickview modal box.
	     */
	    constructor(element: HTMLElement, options?: IQuickviewOptions, bindings?: IResultsComponentBindings, result?: IQueryResult, ModalBox?: any);
	    /**
	     * Opens the `Quickview` modal box.
	     */
	    open(): void;
	    /**
	     * Closes the `Quickview` modal box.
	     */
	    close(): void;
	    getHashId(): string;
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	class DefaultResultAttachmentTemplate extends Template {
	    constructor();
	    instantiateToString(queryResult?: IQueryResult): string;
	}

}
declare module Coveo {
	interface IResultAttachmentsOptions {
	    resultTemplate?: Template;
	    subResultTemplate?: Template;
	    maximumAttachmentLevel?: number;
	}
	/**
	 * The `ResultAttachments` component renders attachments in a result set, for example when displaying emails. This
	 * component is usable inside a result template when there is an active [`Folding`]{@link Folding} component in the
	 * page.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class ResultAttachments extends Component {
	    element: HTMLElement;
	    options: IResultAttachmentsOptions;
	    bindings: IComponentBindings;
	    attachmentLevel: number;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IResultAttachmentsOptions;
	    /**
	     * Creates a new `ResultAttachments` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `ResultAttachments` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     * @param attachmentLevel The nesting depth.
	     */
	    constructor(element: HTMLElement, options?: IResultAttachmentsOptions, bindings?: IComponentBindings, result?: IQueryResult, attachmentLevel?: number);
	}

}
declare module Coveo {
	class DefaultFoldingTemplate extends Template {
	    constructor();
	    instantiateToString(queryResult?: IQueryResult): string;
	    getType(): string;
	}

}
declare module Coveo {
	interface IResultFoldingOptions {
	    resultTemplate?: Template;
	    normalCaption?: string;
	    expandedCaption?: string;
	    moreCaption?: string;
	    lessCaption?: string;
	    oneResultCaption?: string;
	}
	/**
	 * The `ResultFolding` component renders folded result sets. It is usable inside a result template when there is an
	 * active [`Folding`]{@link Folding} component in the page. This component takes care of rendering the parent result and
	 * its child results in a coherent manner.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 *
	 * See [Folding Results](https://developers.coveo.com/x/7hUvAg).
	 */
	class ResultFolding extends Component {
	    element: HTMLElement;
	    options: IResultFoldingOptions;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IResultFoldingOptions;
	    childResults: IQueryResult[];
	    /**
	     * Creates a new ResultFolding component.
	     * @param options The options for the ResultFolding component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: IResultFoldingOptions, bindings?: IComponentBindings, result?: IQueryResult);
	    /**
	     *
	     * @returns {Promise<IQueryResult[]>}
	     */
	    showMoreResults(): Promise<IQueryResult[]>;
	    showLessResults(): void;
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	enum RatingValues {
	    Undefined = 0,
	    Lowest = 1,
	    Low = 2,
	    Average = 3,
	    Good = 4,
	    Best = 5,
	}
	interface IResultRatingOptions {
	}
	/**
	 * The `ResultRating` component renders a 5-star rating widget. Interactive rating is possible if
	 * the [`enableCollaborativeRating`]{@link SearchInterface.options.enableCollaborativeRating} option of your
	 * search interface is `true`, and if collaborative rating is enabled on your Coveo index.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class ResultRating extends Component {
	    element: HTMLElement;
	    options: IResultRatingOptions;
	    bindings: IComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * Creates a new `ResultRating` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `ResultRating` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: IResultRatingOptions, bindings?: IComponentBindings, result?: IQueryResult);
	    /**
	     * Rates an item using the the specified `rating` value.
	     * @param rating The rating to assign to the item.
	     *
	     * The possible values are:
	     *
	     * - `0`: renders no star.
	     * - `1`: renders 1 star.
	     * - `2`: renders 2 stars.
	     * - `3`: renders 3 stars.
	     * - `4`: renders 4 stars.
	     * - `5`: renders 5 stars.
	     */
	    rateDocument(rating: RatingValues): void;
	}

}
declare module Coveo {
	/**
	 * A multi select widget with standard styling.
	 */
	class MultiSelect implements IFormWidget, IFormWidgetSettable {
	    onChange: (multiSelect: MultiSelect) => void;
	    options: string[];
	    label: string;
	    static doExport(): void;
	    /**
	     * Creates a new `MultiSelect`.
	     * @param onChange The function to call when the widget selected values change. This function takes the current
	     * `MultiSelect` instance as an argument.
	     * @param options The values which can be selected with the multi select.
	     * @param label The label to display for the multi select.
	     */
	    constructor(onChange: (multiSelect: MultiSelect) => void, options: string[], label: string);
	    /**
	     * Gets the element on which the multi select is bound.
	     * @returns {HTMLSelectElement} The multi select element.
	     */
	    build(): HTMLElement;
	    /**
	     * Gets the element on which the multi select is bound.
	     * @returns {HTMLSelectElement} The multi select element.
	     */
	    getElement(): HTMLElement;
	    /**
	     * Gets the currently selected values.
	     * @returns {string[]} The array of selected multi select values.
	     */
	    getValue(): string[];
	    /**
	     * Gets the currently un-selected values.
	     * @returns {string[]} The array of un-selected multi select values.
	     */
	    getUnselectedValues(): string[];
	    /**
	     * Sets the currently selected values.
	     * @param values The values to select.
	     */
	    setValue(values: string[]): void;
	    /**
	     * Resets the multi select.
	     */
	    reset(): void;
	}

}
declare module Coveo {
	/**
	 * A simple `fieldset` HTMLElement containing multiple form widgets.
	 */
	class FormGroup {
	    static doExport(): void;
	    /**
	     * Creates a new `FormGroup`.
	     * @param contents The form widgets to include in the form group.
	     * @param label The label to display for the form group.
	     */
	    constructor(contents: IFormWidget[], label: string);
	    /**
	     * Gets the element on which the form group is bound.
	     * @returns {HTMLElement} The form group element.
	     */
	    build(): HTMLElement;
	}

}
declare module Coveo {
	interface IResultFilterPreference {
	    selected?: boolean;
	    custom?: boolean;
	    tab?: string[];
	    caption: string;
	    expression: string;
	}
	interface IResultsFiltersPreferencesOptions {
	    filters?: {
	        [caption: string]: {
	            expression: string;
	            tab?: string[];
	        };
	    };
	    includeInBreadcrumb?: boolean;
	    showAdvancedFilters?: boolean;
	}
	/**
	 * The `ResultFiltersPreferences` component allows end users to create custom filters to apply to queries. These filters
	 * are saved to local storage.
	 *
	 * Only advanced end users who understand the Coveo query syntax should use this feature (see
	 * [Coveo Query Syntax Reference](http://www.coveo.com/go?dest=adminhelp70&lcid=9&context=10005)).
	 *
	 * This component is normally accessible through the [`Settings`]{@link Settings} menu. Its usual location in the DOM is
	 * inside the [`PreferencesPanel`]{@link PreferencesPanel} element.
	 *
	 * See also the {@link ResultsPreferences} component.
	 */
	class ResultsFiltersPreferences extends Component {
	    element: HTMLElement;
	    options: IResultsFiltersPreferencesOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IResultsFiltersPreferencesOptions;
	    preferences: {
	        [caption: string]: IResultFilterPreference;
	    };
	    container: HTMLFieldSetElement;
	    /**
	     * Creates a new `ResultsFiltersPreferences` component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the `ResultsFiltersPreferences` component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IResultsFiltersPreferencesOptions, bindings: IComponentBindings);
	    createDom(): void;
	    save(): void;
	    exitWithoutSave(): void;
	}

}
declare module Coveo {
	interface IResultsPerPageOptions {
	    choicesDisplayed?: number[];
	    initialChoice?: number;
	}
	/**
	 * The ResultsPerPage component attaches itself to a `div` and allows the end user to choose how many results to
	 * display per page.
	 *
	 * **Note:** Adding a ResultPerPage component to your page overrides the value of
	 * {@link SearchInterface.options.resultsPerPage}.
	 */
	class ResultsPerPage extends Component {
	    element: HTMLElement;
	    options: IResultsPerPageOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the ResultsPerPage
	     * @componentOptions
	     */
	    static options: IResultsPerPageOptions;
	    /**
	     * Creates a new ResultsPerPage. The component renders itself on every query success.
	     * @param element The HTMLElement on which to instantiate the component (normally a `div`).
	     * @param options The options for the ResultsPerPage component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: IResultsPerPageOptions, bindings?: IComponentBindings);
	    /**
	     * Sets the current number of results per page, then executes a query.
	     *
	     * Also logs an event in the usage analytics (`pagerResize` by default) with the new current number of results per
	     * page as meta data.
	     * @param resultsPerPage The new number of results per page to select.
	     * @param analyticCause The event to log in the usage analytics.
	     */
	    setResultsPerPage(resultsPerPage: number, analyticCause?: IAnalyticsActionCause): void;
	}

}
declare module Coveo {
	interface IResultsPreferencesOptions {
	    enableOpenInOutlook?: boolean;
	    enableOpenInNewWindow?: boolean;
	    enableQuerySyntax?: boolean;
	}
	interface IPossiblePreferences {
	    openInOutlook?: boolean;
	    alwaysOpenInNewWindow?: boolean;
	    enableQuerySyntax?: boolean;
	}
	/**
	 * The ResultsPreferences component allows the end user to select preferences related to the search results. These
	 * preferences are then saved in the local storage of the end user.
	 *
	 * This component is normally accessible through the {@link Settings} menu. Its usual location in the DOM is inside the
	 * {@link PreferencesPanel} component.
	 *
	 * See also the {@link ResultsFiltersPreferences} component.
	 */
	class ResultsPreferences extends Component {
	    element: HTMLElement;
	    options: IResultsPreferencesOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the component
	     * @componentOptions
	     */
	    static options: IResultsPreferencesOptions;
	    preferences: IPossiblePreferences;
	    /**
	     * Creates a new ResultsPreference component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the ResultsPreferences component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IResultsPreferencesOptions, bindings: IComponentBindings);
	    /**
	     * Saves the current state of the ResultsPreferences component in the local storage.
	     */
	    save(): void;
	    exitWithoutSave(): void;
	}

}
declare module Coveo {
	interface IResultTaggingOptions {
	    field: IFieldOption;
	    suggestBoxSize?: number;
	    autoCompleteTimer?: number;
	}
	interface IAnalyticsResultTaggingMeta {
	    facetId: string;
	    facetValue?: string;
	    facetTitle?: string;
	}
	/**
	 * The ResultTagging component lists the current tag field values of its associated result and renders a control that
	 * allows the end user to add values to a tag field.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class ResultTagging extends Component {
	    element: HTMLElement;
	    options: IResultTaggingOptions;
	    result: IQueryResult;
	    static ID: string;
	    static autoCompleteClass: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: IResultTaggingOptions;
	    static AUTO_COMPLETE_CLASS: string;
	    /**
	     * Creates a new ResultTagging component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the ResultTagging component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: IResultTaggingOptions, bindings?: IComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	interface ISearchAlertMessageOptions {
	    closeDelay: number;
	}
	/**
	 * The SearchAlertsMessage component allows the {@link SearchAlerts} component to display messages.
	 *
	 * You should not include this component in your page. Instead, use a {@link SearchAlerts} component, and access the
	 * {@link SearchAlerts.message} attribute.
	 */
	class SearchAlertsMessage extends Component {
	    element: HTMLElement;
	    options: ISearchAlertMessageOptions;
	    bindings: IComponentBindings;
	    static ID: string;
	    /**
	     * The options for the SearchAlertsMessage component
	     * @componentOptions
	     */
	    static options: ISearchAlertMessageOptions;
	    /**
	     * Creates a new SearchAlertsMessage component
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the SearchAlertsMessage component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: ISearchAlertMessageOptions, bindings?: IComponentBindings);
	    getCssClass(): string;
	    getFollowQueryMessage(query?: string, htmlFormatted?: boolean): string;
	    /**
	     * Displays a message near the passed dom attribute.
	     * @param dom Specifies where to display the message.
	     * @param message The message.
	     * @param error Specifies whether the message is an error message.
	     */
	    showMessage(dom: Dom, message: string, error: boolean): void;
	}

}
declare module Coveo {
	interface ISearchAlertsOptions {
	    enableManagePanel?: boolean;
	    enableFollowQuery?: boolean;
	    modifiedDateField?: IFieldOption;
	    enableMessage?: boolean;
	    messageCloseDelay?: number;
	}
	/**
	 * The Search Alerts component renders items in the {@link Settings} menu that allow the end user to follow queries
	 * and to manage search alerts. A user following a query receives email notifications when the query results change.
	 *
	 * **Note:**
	 * > It is necessary to meet certain requirements to be able to use this component (see
	 * > [Deploying Search Alerts on a Coveo JS Search Page](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=248)).
	 *
	 * See also the {@link FollowItem} component.
	 */
	class SearchAlerts extends Component {
	    element: HTMLElement;
	    options: ISearchAlertsOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The options for the search alerts
	     * @componentOptions
	     */
	    static options: ISearchAlertsOptions;
	    /**
	     * A reference to a {@link SearchAlertsMessage} component that the SearchAlerts component uses to display messages.
	     */
	    message: SearchAlertsMessage;
	    /**
	     * Creates a new SearchAlerts component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the SearchAlerts component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: ISearchAlertsOptions, bindings?: IComponentBindings, ModalBox?: any);
	    /**
	     * Follows the last query. The user will start receiving email notifications when the query results change.
	     *
	     * Also logs the `searchAlertsFollowQuery` event in the usage analytics with the name of the request as meta data.
	     */
	    followQuery(): void;
	    /**
	     * Opens the **Manage Alerts** panel. This panel allows the end user to stop following queries or items. It also
	     * allows the end user to specify email notification frequency for each followed query or item.
	     */
	    openPanel(): Promise<ISubscription>;
	    protected findQueryBoxDom(): HTMLElement;
	    static create(element: HTMLElement, options?: ISearchAlertsOptions, root?: HTMLElement): SearchAlerts;
	}

}
declare module Coveo {
	interface ISearchButtonOptions {
	}
	/**
	 * The SearchButton component renders a search icon that the end user can click to trigger a new query.
	 *
	 * See also the {@link Searchbox} component, which can automatically instantiate a SearchButton component along with a
	 * {@link Querybox} component or an {@link Omnibox} component.
	 */
	class SearchButton extends Component {
	    element: HTMLElement;
	    options: ISearchButtonOptions;
	    static ID: string;
	    static doExport: () => void;
	    static options: ISearchButtonOptions;
	    /**
	     * Creates a new SearchButton. Binds a `click` event on the element. Adds a search icon on the element.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the SearchButton component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: ISearchButtonOptions, bindings?: IComponentBindings);
	    /**
	     * Triggers the `click` event handler, which logs a `searchboxSubmit` event in the usage analytics and executes a
	     * query.
	     */
	    click(): void;
	}

}
declare module Coveo {
	interface ISearchboxOptions extends IOmniboxOptions {
	    addSearchButton?: boolean;
	    enableOmnibox?: boolean;
	}
	/**
	 * The `Searchbox` component allows you to conveniently instantiate two components which end users frequently use to
	 * enter and submit queries.
	 *
	 * This component attaches itself to a `div` element and takes care of instantiating either a
	 * [`Querybox`]{@link Querybox} or an [`Omnibox`]{@link Omnibox} component (see the
	 * [`enableOmnibox`]{@link Searchbox.options.enableOmnibox} option). Optionally, the `Searchbox` can also instantiate a
	 * [`SearchButton`]{@link SearchButton} component, and append it inside the same `div` (see the
	 * [`addSearchButton`]{@link Searchbox.options.addSearchButton} option).
	 */
	class Searchbox extends Component {
	    element: HTMLElement;
	    options: ISearchboxOptions;
	    static ID: string;
	    static parent: typeof Omnibox;
	    static doExport: () => void;
	    /**
	     * Possible options for the {@link Searchbox}
	     * @componentOptions
	     */
	    static options: ISearchboxOptions;
	    /**
	     * The [`SearchButton`]{@link SearchButton} component instance.
	     */
	    searchButton: SearchButton;
	    /**
	     * The component instance which allows end users to input queries.
	     *
	     * Can be either a [`Querybox`]{@link Querybox} or an [`Omnibox`]{@link Omnibox} component, depending on the value of
	     * [`enableOmnibox`]{@link Searchbox.options.enableOmnibox}.
	     */
	    searchbox: Querybox | Omnibox;
	    /**
	     * Creates a new `Searchbox` component. Creates a new `Coveo.Magicbox` instance and wraps magic box methods (`onblur`,
	     * `onsubmit`, etc.). Binds event on `buildingQuery` and on redirection (for standalone box).
	     * @param element The HTMLElement on which to instantiate the component. This cannot be an HTMLInputElement for
	     * technical reasons.
	     * @param options The options for the `Searchbox component`. These will merge with the options from the component set
	     * directly on the `HTMLElement`.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: ISearchboxOptions, bindings?: IComponentBindings);
	}

}
declare module Coveo {
	interface IShareQueryOptions {
	}
	/**
	 * The ShareQuery component populates the {@link Settings} popup menu with the **Share Query** menu item. When the end
	 * user clicks this item, it displays a panel containing two input boxes: one containing a shareable link and the other
	 * containing the complete current query expression.
	 */
	class ShareQuery extends Component {
	    element: HTMLElement;
	    options: IShareQueryOptions;
	    static ID: string;
	    static options: IShareQueryOptions;
	    static doExport: () => void;
	    dialogBoxContent: HTMLElement;
	    /**
	     * Creates a new ShareQuery component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the ShareQuery component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options: IShareQueryOptions, bindings?: IComponentBindings, ModalBox?: any);
	    /**
	     * Open the **Share Query** modal box.
	     */
	    open(): void;
	    /**
	     * Close the **Share Query** modal box.
	     */
	    close(): void;
	    /**
	     * Gets the link to the current query.
	     */
	    getLinkToThisQuery(): string;
	    /**
	     * Sets the link to the current query.
	     */
	    setLinkToThisQuery(link: string): void;
	    /**
	     * Gets the complete query expression string
	     */
	    getCompleteQuery(): string;
	    /**
	     * Set the complete query expression string.
	     */
	    setCompleteQuery(completeQuery: string): void;
	}

}
declare module Coveo {
	interface ISortOptions {
	    sortCriteria?: SortCriteria[];
	    caption?: string;
	}
	/**
	 * The Sort component renders a widget that the end user can interact with to sort query results according to a single
	 * criterion or list of criteria.
	 */
	class Sort extends Component {
	    element: HTMLElement;
	    options: ISortOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * Options for the component
	     * @componentOptions
	     */
	    static options: ISortOptions;
	    /**
	     * Creates a new Sort component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Sort component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: ISortOptions, bindings?: IComponentBindings);
	    /**
	     * Selects the Sort component. Triggers a new query if selecting the component changes the current
	     * {@link Sort.options.sortCriteria} (if it is toggled).
	     * @param direction The sort direction. Can be either `ascending` or `descending`.
	     */
	    select(direction?: string): void;
	    enable(): void;
	    disable(): void;
	    /**
	     * Gets the current {@link Sort.options.sortCriteria}.
	     * @returns {SortCriteria}
	     */
	    getCurrentCriteria(): SortCriteria;
	    /**
	     * Indicates whether the name of any of the {@link Sort.options.sortCriteria} matches the argument.
	     * @param sortId The sort criteria name to look for (e.g., `date descending`).
	     */
	    match(sortId: string): boolean;
	}

}
declare module Coveo {
	interface ITemplateLoaderOptions {
	    template: Template;
	    condition?: String;
	}
	/**
	 * The TemplateLoader component can load one result template into another. You should normally declare any reusable
	 * result template outside of the {@link ResultList} component. Otherwise, the framework will evaluate the
	 * `data-condition` of the reusable result template and possibly render it.
	 *
	 * **Example:**
	 *
	 * ```html
	 * [ ... ]
	 *
	 * <!-- A reusable result template. Note that it is 
	 * <script type='text/underscore' class='result-template' id='ReusableTemplate'>
	 *   <table class='CoveoFieldTable'>
	 *     <tr data-field='@source' data-caption='Source'></tr>
	 *     <tr data-field='@percentScore' data-caption='Score'></tr>
	 *   </table>
	 * </script>
	 *
	 * [ ... ]
	 *
	 * <div class="CoveoResultList" data-wait-animation="fade" data-auto-select-fields-to-include="true">
	 *
	 *   <!-- A custom result template for Lithium messages. -->
	 *   <script type='text/underscore' class='result-template' data-condition='raw.filetype == "lithiummessage"'>
	 *     <div>
	 *       <img class='CoveoIcon' data-small='true'>
	 *       <a class='CoveoResultLink'></a>
	 *       <div class='CoveoTemplateLoader' data-template-id='ReusableTemplate'></div>
	 *     </div>
	 *   </script>
	 *
	 *   <!-- A custom result template for images. -->
	 *   <script type='text/underscore' class='result-template' data-condition='raw.filetype == "Image"'>
	 *     <div>
	 *       <img class='CoveoIcon' data-small='true'></img>
	 *         <a class='CoveoResultLink'>
	 *           <img class='CoveoThumbnail'>
	 *         </a>
	 *       <div class='CoveoTemplateLoader' data-template-id='ReusableTemplate'></div>
	 *     </div>
	 *   </script>
	 * </div>
	 *
	 * [ ... ]
	 * ```
	 *
	 * See [Result Templates](https://developers.coveo.com/x/aIGfAQ).
	 */
	class TemplateLoader extends Component {
	    element: HTMLElement;
	    options: ITemplateLoaderOptions;
	    bindings: IComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * The possible options for a TemplateLoader.
	     * @componentOptions
	     */
	    static options: ITemplateLoaderOptions;
	    /**
	     * Creates a new TemplateLoader.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the TemplateLoader component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: ITemplateLoaderOptions, bindings?: IComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	interface ITextOptions {
	    value?: string;
	    size?: string;
	    style?: string;
	    color?: string;
	    weight?: string;
	    textAlign?: string;
	    marginTop?: string;
	    marginBottom?: string;
	    marginLeft?: string;
	    marginRight?: string;
	    paddingTop?: string;
	    paddingBottom?: string;
	    paddingLeft?: string;
	    paddingRight?: string;
	}
	/**
	 * The Text component embeds itself in a result template to output a simple text value.
	 *
	 * The only purpose of this component is to make it possible to easily add different text values to result templates
	 * when using the Coveo JavaScript Search Interface Editor (see
	 * [JavaScript Search Interface Editor](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=230)).
	 *
	 * If you are not designing a search interface using the Coveo JavaScript Search Interface Editor, using this component
	 * is unnecessary.
	 *
	 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
	 */
	class Text extends Component {
	    element: HTMLElement;
	    options: ITextOptions;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * @componentOptions
	     */
	    static options: ITextOptions;
	    /**
	     * Creates a new Text component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Text component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     */
	    constructor(element: HTMLElement, options?: ITextOptions, bindings?: IComponentBindings);
	}

}
declare module Coveo {
	interface IThumbnailOptions extends IResultLinkOptions {
	    noThumbnailClass?: string;
	    clickable?: boolean;
	}
	/**
	 * The Thumbnail component automatically fetches the thumbnail of the result object and outputs an HTML `img` tag with
	 * it.
	 */
	class Thumbnail extends Component {
	    element: HTMLElement;
	    options: IThumbnailOptions;
	    bindings: IResultsComponentBindings;
	    result: IQueryResult;
	    static ID: string;
	    static doExport: () => void;
	    /**
	     * Options for the Thumbnail
	     * @componentOptions
	     */
	    static options: IThumbnailOptions;
	    static parent: typeof ResultLink;
	    img: HTMLImageElement;
	    /**
	     * Creates a new Thumbnail component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Thumbnail component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param result The result to associate the component with.
	     */
	    constructor(element: HTMLElement, options?: IThumbnailOptions, bindings?: IResultsComponentBindings, result?: IQueryResult);
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	interface ITriggersOptions {
	}
	/**
	 * The Triggers component enables the use of triggers (`notify`, `execute`, `query`, `redirect`) generated by the Coveo
	 * Search API (see [Trigger](https://developers.coveo.com/x/lIM9AQ)) in the query pipeline (see
	 * [Managing the Query Pipeline](https://developers.coveo.com/x/KYOy)).
	 */
	class Triggers extends Component {
	    element: HTMLElement;
	    options: ITriggersOptions;
	    bindings: IComponentBindings;
	    _window: Window;
	    static ID: string;
	    static options: ITriggersOptions;
	    static doExport: () => void;
	    /**
	     * The list of notifications returned by the Search API for the current query (via `notify` triggers).
	     *
	     * The Triggers component automatically renders this list visually.
	     */
	    notifications: string[];
	    /**
	     * Creates a new Triggers component.
	     * @param element The HTMLElement on which to instantiate the component.
	     * @param options The options for the Triggers component.
	     * @param bindings The bindings that the component requires to function normally. If not set, these will be
	     * automatically resolved (with a slower execution time).
	     * @param _window The window on which to execute the triggers.
	     */
	    constructor(element: HTMLElement, options?: ITriggersOptions, bindings?: IComponentBindings, _window?: Window);
	}

}
declare module Coveo {
	function registerFields(): void;

}
declare module Coveo {
	function lazyAdvancedSearch(): void;

}
declare module Coveo {
	function lazyAggregate(): void;

}
declare module Coveo {
	function lazyAnalyticsSuggestions(): void;

}
declare module Coveo {
	function lazyAuthenticationProvider(): void;

}
declare module Coveo {
	function lazyBackdrop(): void;

}
declare module Coveo {
	function lazyBadge(): void;

}
declare module Coveo {
	function lazyBreadcrumb(): void;

}
declare module Coveo {
	function lazyCardActionBar(): void;

}
declare module Coveo {
	function lazyCardOverlay(): void;

}
declare module Coveo {
	function lazyChatterLikedBy(): void;

}
declare module Coveo {
	function lazyChatterPostAttachment(): void;

}
declare module Coveo {
	function lazyChatterPostedBy(): void;

}
declare module Coveo {
	function lazyChatterTopic(): void;

}
declare module Coveo {
	function lazyDidYouMean(): void;

}
declare module Coveo {
	function lazyErrorReport(): void;

}
declare module Coveo {
	function lazyExcerpt(): void;

}
declare module Coveo {
	function lazyExportToExcel(): void;

}
declare module Coveo {
	function lazyFacet(): void;

}
declare module Coveo {
	function lazyFacetRange(): void;

}
declare module Coveo {
	function lazyFacetSlider(): void;

}
declare module Coveo {
	function lazyFieldSuggestions(): void;

}
declare module Coveo {
	function lazyFieldTable(): void;

}
declare module Coveo {
	function lazyFieldValue(): void;

}
declare module Coveo {
	function lazyFolding(): void;

}
declare module Coveo {
	function lazyFoldingForThread(): void;

}
declare module Coveo {
	function lazyHiddenQuery(): void;

}
declare module Coveo {
	function lazyHierarchicalFacet(): void;

}
declare module Coveo {
	function lazyIcon(): void;

}
declare module Coveo {
	function lazyLogo(): void;

}
declare module Coveo {
	function lazyMatrix(): void;

}
declare module Coveo {
	function lazyOmnibox(): void;

}
declare module Coveo {
	function lazyOmniboxResultList(): void;

}
declare module Coveo {
	function lazyPager(): void;

}
declare module Coveo {
	function lazyPipelineContext(): void;

}
declare module Coveo {
	function lazyPreferencesPanel(): void;

}
declare module Coveo {
	function lazyPrintableUri(): void;

}
declare module Coveo {
	function lazyQuerybox(): void;

}
declare module Coveo {
	function lazyQueryDuration(): void;

}
declare module Coveo {
	function lazyQuerySummary(): void;

}
declare module Coveo {
	function lazyQuickview(): void;

}
declare module Coveo {
	function lazyRecommendation(): void;

}
declare module Coveo {
	function lazyResultAttachment(): void;

}
declare module Coveo {
	function lazyResultFolding(): void;

}
declare module Coveo {
	function lazyResultLayout(): void;

}
declare module Coveo {
	function lazyResultLink(): void;

}
declare module Coveo {
	function lazyResultList(): void;

}
declare module Coveo {
	function lazyResultRating(): void;

}
declare module Coveo {
	function lazyResultsFiltersPreferences(): void;

}
declare module Coveo {
	function lazyResultsPerPage(): void;

}
declare module Coveo {
	function lazyResultsPreferences(): void;

}
declare module Coveo {
	function lazyResultTagging(): void;

}
declare module Coveo {
	function lazyFollowItem(): void;

}
declare module Coveo {
	function lazySearchAlerts(): void;

}
declare module Coveo {
	function lazySearchbox(): void;

}
declare module Coveo {
	function lazySearchButton(): void;

}
declare module Coveo {
	function lazySettings(): void;

}
declare module Coveo {
	function lazyShareQuery(): void;

}
declare module Coveo {
	function lazySort(): void;

}
declare module Coveo {
	function lazyTab(): void;

}
declare module Coveo {
	function lazyTemplateLoader(): void;

}
declare module Coveo {
	function lazyText(): void;

}
declare module Coveo {
	function lazyThumbnail(): void;

}
declare module Coveo {
	function lazyTriggers(): void;

}
declare module Coveo {
	function lazyYouTubeThumbnail(): void;

}
declare module Coveo {
	function lazyCheckbox(): void;

}
declare module Coveo {
	function lazyDatePicker(): void;

}
declare module Coveo {
	function lazyDropdown(): void;

}
declare module Coveo {
	function lazyFormGroup(): void;

}
declare module Coveo {
	function lazyMultiSelect(): void;

}
declare module Coveo {
	function lazyNumericSpinner(): void;

}
declare module Coveo {
	function lazyRadioButton(): void;

}
declare module Coveo {
	function lazyTextInput(): void;

}
declare module Coveo {
	interface IAPIAnalyticsFacetSelection {
	    entryName: string;
	    status: string;
	}

}
declare module Coveo {
	interface IAPIAnalyticsFacet {
	    name: string;
	    fieldName: string;
	    sort: string;
	    mode: string;
	    selections: IAPIAnalyticsFacetSelection[];
	}

}
declare module Coveo {
	class NoopComponent extends Component {
	    static ID: string;
	    constructor(element: HTMLElement, options: any, bindings: IComponentBindings);
	}

}
declare module Coveo {
	function actionButton(text: string, callback: () => any): HTMLElement;

}
declare module "coveo-search-ui" {
	export = Coveo;
}