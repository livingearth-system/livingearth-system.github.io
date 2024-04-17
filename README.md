# Livingearth

*Theme

## Structure

### Local startup

To run project locally execute:

    $  bundle exec jekyll serve

After that website could be acessed via URL `http://127.0.0.1:4000/`

### Layouts

Refers to files within the `_layouts` directory, that define the markup for website.

- `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says ` {{ content }} `.
- `home.html` &mdash; The layout for your landing-page / home-page / index-page. [[More Info.](#home-layout)]
- `page.html` &mdash; The layout for your documents that contain FrontMatter, but are not posts.
- `post.html` &mdash; The layout for your posts.
- `contact.html` &mdash; Custom layout for contacts page.
- `404.html` &mdash; The layout for 404.

### Modules

Refers to modules within the `_includes` directory that can be inserted in multiple layouts across website.

- `footer.liquid` &mdash; Defines the site's footer section.
- `head.liquid` &mdash; Code-block that defines the `<head></head>` in *default* layout.
- `header.liquid` &mdash; Defines the site's main header section.

- `about-us.liquid` &mdash; About Us on homepage. Attributes: `title`, `heading`, `subheading`, `image`, `button`, `url`
- `blog.liquid` &mdash; Blog module
- `boxes.liquid` &mdash; Default module to show boxed sections like 'FUTURE LANDSCAPES'. `data` sets a path to `.yml` array inside `_data`. Other attributes: `heading`, `subheading`. Columns number could be changed in `cols`.
- `breadcrumbs.liquid` &mdash; Breadcrumbs module that included in heading module.
- `contact-us.liquid` &mdash; Contact Us form.
- `continents.liquid` &mdash; 'OTHER CONTINENTS' module from Europe/Oceania pages. Array of continents is stored in `_data/continents.yml`. `heading` could be customized in attributes. `exclude` sets continent to exclude from list (current continent).
- `contribute.liquid` &mdash; 'HOW TO CONTRIBUTE' section from homepage. Attributes: `title`, `heading`, `subheading`, `image`, `button`, `url`
- `countries.liquid` &mdash; Countries section from Europe/Oceania pages. `data` points to an array of countries. Example: `_data/europe/countries.yml`.
- `get-in-touch.liquid` &mdash; 'GET IN TOUCH' section which automatically included in `page` layout. Attributes: `heading`, `subheading`, `button`, `url`
- `heading.liquid` &mdash; Page heading which automatically included in `page` layout and could be customized in general oage settings. Attributes: `heading`, `subtitle`, `background`, `image`, `alt`, `nobuttons`, `button1`, `button1_url`, `button2`, `button2_url`
- `index.liquid` &mdash; Homepage heading which automatically included in `home` layout and could be customized in general oage settings. Attributes: `smalltitle`, `title`, `subtitle`, `image`, `nobuttons`, `button1`, `button1_url`, `button2`, `button2_url`
- `organisations.liquid` &mdash; 'ORGANISATIONS' module from About page. Array of organisations is stored in `_data/organisations.yml`. `heading` and `all` could be customized in attributes.
- `our-blog.liquid` &mdash; 'OUR BLOG' module from About page. `heading`, `title`, `all`, `url` could be customized in attributes.
- `our-events.liquid` &mdash; 'OUR EVENTS' module from About page. `heading`, `title`, `all`, `url` could be customized in attributes.
- `our-vision.liquid` &mdash; 'OUR VISION' section from About page. Attributes: `heading`, `subheading`, `image`, `alt`

### Data

Array-like data is stored in `_data` folder and used for arrayed data by many modules.

### Assets

Refers to various asset files within the `assets` directory.

- `assets/css/style.scss` &mdash; Imports sass files from within the `_sass` directory and gets processed into the theme's stylesheet: `_site/assets/css/styles.css`.
- `assets/fonts/*.*` &mdash; local fonts.
- `assets/img/*.*` &mdash; site images.
- `assets/js/*.*` &mdash; javascript.


## Page settings

### General
Those parameters are typical for all pages.

    $  ---
    $  layout: page
    $  title: About
    $  permalink: /about/
    $  ---

- `layout:` sets layout for current page
- `title:` Page title which is used in `<title>` and in `heading.liquid` module.
- `permalink:` sets final URL for current page (overrides default placement)

### Headings

Customisation of headings inside layouts `_layout/home.html` and typical `_layout/page.html` is suported in general page settings. 

    $  ---
    $  heading: Europe
    $  subtitle: "We aim to capture the state and dynamics of Europe’s landscape."
    $  background: "#07073f"
    $  image: "/assets/img/heading/europe.jpg"
    $  nobuttons: true
    $  ---

- `heading:` &mdash; sets page heading in `heading.liquid` module. If not set `tetle` is used.
- `subtitle:` &mdash; sets small subheading in `heading.liquid`
- `background:` &mdash; sets background color for `heading.liquid`
- `image:` &mdash; URL for image on background of `heading.liquid`
- `nobuttons: true/false` &mdash; turns on/off buttons in `heading.liquid`
- `button1, button2:` &mdash; Buttons text in `heading.liquid`
- `button1_url, button2_url:` &mdash; Buttons URL's in `heading.liquid`
- `nocontact: true/false` &mdash; hides/shows `get-in-touch.liquid` module at the bottom.


## Homepage
#### `index.md`

This page uses default `_layout/home.html` layout.  
Page heading settings are set in General settings at the top of page.  

This page uses modules below with attibutes:
- **Search for Landscapes**  (`search-landscapes.liquid`) - Array of countries is stored in `_data/continents.yml`. `heading` could be set as attribute.
- **Future Landscapes** (`boxes.liquid`) - Array of landscapes is fetched from in `_data/future/index.yml`. `heading` could be set as attribute.
- **About Us** (`about-us.liquid`) - `title`, `heading`, `subheading` and `image` could be customized in attributes. `button` and `url` are button settings.
- **Past & Present Landscapes** (`tools.liquid`) - Array of landscapes is stored in `_data/past-present/index.yml`. `heading` and `subheading` could be customized in attributes. `all` sets URL for 'View All' button.
- **Tools** (`tools.liquid`) - Array of tools is stored in `_data/tools.yml`. `heading` and `subheading` could be customized in attributes.
- **Contribute** (`contribute.liquid`) - `title`, `heading`, `subheading` and `image` could be customized in attributes. `button` and `url` are button settings.
- **Our Blog** `our-blog.liquid` - Fetches latest blog posts. `heading`, `title`, `all`, `url` could be customized.


## Future Landscapes
#### `future.md`

This page uses default `_layout/page.html` layout.  
Page heading settings are set in General settings at the top of page.  

This page uses modules below with attibutes:
- **Future Landscapes** (`boxes.liquid`) - Array of landscapes is fetched from in `_data/future/index.yml`. `heading` and `subheading` could be set as attribute.


## Past & Present Landscapes
#### `past-present.md`

This page uses default `_layout/page.html` layout.  
Page heading settings are set in General settings at the top of page.  

This page uses modules below with attibutes:
- **Tools** (`tools.liquid`) - Array of tools is stored in `_data/tools.yml`. `heading` and `subheading` could be customized in attributes.


## Europe
#### `europe.md`

This page uses default `_layout/page.html` layout.  
Page heading settings are set in General settings at the top of page.  

This page uses modules below with attibutes:
- **Countries** (`countries.liquid`) - Array of countries is stored in `_data/europe/countries.yml`.
- **Other Continents** (`continents.liquid`) - Array of continents is stored in `_data/continents.yml`. `heading` could be customized in attributes. `exclude` sets continent to exclude from list (current continent).


## Oceania
#### `oceania.md`

This page uses default `_layout/page.html` layout.  
Page heading settings are set in General settings at the top of page.  

This page uses modules below with attibutes:
- **Countries** (`countries.liquid`) - Array of countries is stored in `_data/oceania/countries.yml`.
- **Other Continents** (`continents.liquid`) - Array of continents is stored in `_data/continents.yml`. `heading` could be customized in attributes. `exclude` sets continent to exclude from list (current continent).


## About
#### `about.md`

This page uses default `_layout/page.html` layout.  
Page heading settings are set in General settings at the top of page.  

This page uses modules below with attibutes:
- **Who We Are** `who-we-are.liquid` - `heading` and `subheading` could be set as strings, `count` attriblute sets big numbers (comma and semicolon separated string)
- **Our Vision** `our-vision.liquid` - `heading`, `subheading` and `image` could be customized for this module
- **Living Earth**  `tabs.liquid` - static code module
- **Organisations**  `organisations.liquid` - `heading` set in attribute, `_data/organisations.yml` stores data array of organisations 
- **Video**  `video.liquid` - `heading`, `name`, `position`, `avatar`, `preview` could be customized as attributes.
- **Our Blog**  `our-blog.liquid` - Fetches latest blog posts. `heading`, `title`, `all`, `url` could be customized.
- **Our Events**  `our-events.liquid` - Fetches latest events from blog. `heading`, `title`, `all`, `url` could be customized.


## Contact
#### `contact.md`

This page uses `_layout/contact.html` as layout.  
Page heading settings are set in General settings at the top of page.      

- **Contacts** in left coulmn data could be added and customized simply using markdown markup.  
- **Contact form** source code is in `_includes/contact-us.liquid`

## Earthtrack.app

- This page uses `tool-earth-track-sidebar.liquid`
- I have a folder named `json` containing various JSON files intended for data storage. Each JSON file will be the data for each corresponding tab. It will contain information about the list of `Feature` such as coordinates, images, and legend.It will be processed logically and displayed on the screen using the `filter-map.js` file.
- In this `filter-map.js` file, there are two parts. The first part defines the color codes for each `Feature` in the data. The second part performs functions on the page with Leaflet library.