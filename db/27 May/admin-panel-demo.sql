-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 27, 2020 at 04:51 PM
-- Server version: 5.6.47-cll-lve
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin-panel-demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `acl`
--

CREATE TABLE `acl` (
  `id` int(11) NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acl`
--

INSERT INTO `acl` (`id`, `title`, `status`, `created_at`, `updated_at`) VALUES
(59, 'Module Name', 1, '2020-05-17 07:12:54', '2020-05-26 14:14:25'),
(60, 'Banner', 1, '2020-05-17 07:13:03', '2020-05-17 07:13:03'),
(61, 'Email Template', 1, '2020-05-17 11:09:20', '2020-05-17 11:09:20'),
(62, 'Social Media', 1, '2020-05-17 11:09:28', '2020-05-17 11:09:28'),
(63, 'Contact Us', 1, '2020-05-17 11:09:39', '2020-05-17 11:09:39'),
(64, 'NewsLetter', 1, '2020-05-17 11:09:48', '2020-05-17 11:09:48'),
(65, 'Category', 1, '2020-05-17 11:10:13', '2020-05-17 11:10:13'),
(66, 'Blog', 1, '2020-05-17 11:10:25', '2020-05-17 11:10:25'),
(67, 'CMS', 1, '2020-05-17 11:10:35', '2020-05-17 11:10:35'),
(68, 'CMS Module', 1, '2020-05-17 11:10:42', '2020-05-17 11:10:42'),
(69, 'Setting', 1, '2020-05-17 11:10:56', '2020-05-17 11:10:56'),
(70, 'Right', 1, '2020-05-18 12:25:28', '2020-05-18 12:25:28'),
(71, 'Admin User', 1, '2020-05-18 12:25:38', '2020-05-18 12:25:47');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cms_id` int(11) DEFAULT NULL,
  `image` text,
  `url` text,
  `status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '1=active,0=inactive',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) DEFAULT NULL,
  `last_updated_by` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `name`, `cms_id`, `image`, `url`, `status`, `created_at`, `updated_at`, `created_by`, `last_updated_by`) VALUES
(1, 'SEO', NULL, '1590230008.template.png', 'http://abc.com', 1, '2020-05-23 10:33:28', '2020-05-23 05:03:28', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `slug` text,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` longtext,
  `short_description` longtext,
  `long_description` longtext,
  `display_on_header` int(11) NOT NULL DEFAULT '0' COMMENT '1:Yes;0:No',
  `total_visitor` int(255) NOT NULL DEFAULT '0',
  `seo_title` text CHARACTER SET utf8,
  `seo_keyword` text CHARACTER SET utf8,
  `seo_description` text CHARACTER SET utf8,
  `status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '1=active,0=inactive',
  `is_demo` int(3) DEFAULT '0',
  `demo_url` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `slug`, `category_id`, `name`, `image`, `short_description`, `long_description`, `display_on_header`, `total_visitor`, `seo_title`, `seo_keyword`, `seo_description`, `status`, `is_demo`, `demo_url`, `created_at`, `updated_at`, `created_by`, `last_updated_by`) VALUES
(6, 'how-to-install-lamp-stack-linux-apache-mysql-php-in-ubuntu', NULL, 'How to install (LAMP) Stack Linux,Apache,MySQL,PHP in Ubuntu', '1589610198.maxresdefault.jpg', '<p>A &ldquo;LAMP&rdquo; stack is a group of open-source software that is typically installed together to enable a server to host dynamic websites and web apps. LAMP stack stands for Linux,Apache,MYSQL,PHP in&nbsp;<strong>L</strong>inux operating system, with the&nbsp;<strong>A</strong>pache web server. The site data is stored in a&nbsp;<strong>M</strong>ySQL database, and dynamic content is processed by&nbsp;<strong>P</strong>HP.</p>', '<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 1: Inatall Apace2.</strong></span></p>\r\n<p>Apache is a free open source software which runs over 45% of the world&rsquo;s web servers.</p>\r\n<p>Open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal to install <strong>Apache</strong>.</p>\r\n<pre class=\"language-php\"><code>sudo apt-get update\r\nsudo apt-get install apache2</code></pre>\r\n<p>To check if Apache is installed or not go to your browser and add <a target=\"_blank\" rel=\"noopener\">http://localhost</a> &nbsp;and you will get below apache page.</p>\r\n<p><img style=\"width: 556px; height: 450px;\" src=\"/softtechover/public/admin/ckeditor/images/screencapture-localhost-2020-05-16-12_24_34.png\" alt=\"\" /></p>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 2: Instll MySQL</strong></span></p>\r\n<p><strong>MySQL </strong>is an powerful datamanagement system using this you can manage manage,organise and retrive data from databasee&nbsp;</p>\r\n<p>To install <strong>MyQL o</strong>pen your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal and it will install latest <strong>MySQL</strong>.</p>\r\n<pre class=\"language-php\"><code>sudo apt-get install mysql-server libapache2-mod-auth-mysql php5-mysql</code></pre>\r\n<p>During the installation, MySQL will ask you to set a root password. duuring this time you can set password for your databas access also you can chnage,update or add new user for your database using <strong>mysql&nbsp;</strong>terminal.</p>\r\n<p>You can check your <strong>MySQL </strong>version by adding below command to your terminal.</p>\r\n<pre class=\"language-php\"><code>mysql -V</code></pre>\r\n<p><strong>&nbsp;<img style=\"width: 1071px; height: 47px;\" src=\"/softtechover/public/admin/ckeditor/images/mysql-version-check.png\" alt=\"\" /></strong></p>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 3: Install PHP</strong></span></p>\r\n<ul>\r\n<li style=\"text-align: justify;\">PHP is an acronym for \"PHP: Hypertext Preprocessor\"</li>\r\n<li style=\"text-align: justify;\">PHP is a widely-used, open source scripting language</li>\r\n<li style=\"text-align: justify;\">PHP scripts are executed on the server</li>\r\n<li style=\"text-align: justify;\">PHP is free to download and use</li>\r\n</ul>\r\n<p>Open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal to install <strong>PHP</strong>.</p>\r\n<pre class=\"language-php\"><code>sudo apt-get install php5 libapache2-mod-php5 php5-mcrypt</code></pre>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 4: Check which PHP version insatll on your system.</strong></span></p>\r\n<p>First create a new file <strong>info.php&nbsp;</strong>inside your <strong>/var/www/html/</strong>&nbsp;Directory. or you can create file using terminal add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>sudo nano /var/www/html/info.php</code></pre>\r\n<p>Add below code to this new opend file</p>\r\n<pre class=\"language-php\"><code>&lt;?php\r\n  phpinfo();\r\n?&gt;</code></pre>\r\n<p>After adding above code to file Save and Exit also restart apache.</p>\r\n<pre class=\"language-php\"><code>sudo service apache2 restart</code></pre>\r\n<p>After go to your browser and add below line of code to check php version.&nbsp;</p>\r\n<pre class=\"language-php\"><code>http://localost/info.php</code></pre>\r\n<p><img style=\"width: 1366px; height: 609px;\" src=\"/softtechover/public/admin/ckeditor/images/php-version-check.png\" alt=\"\" /></p>\r\n<p><span style=\"font-size: 16px;\"><strong>NOTE:-</strong> If you have any query or want to ask any question add your comment in below comment section.</span></p>\r\n<p><span style=\"font-size: 20px;\"><strong>Thank&nbsp;you.<img title=\"smiley\" src=\"/softtechover/public/admin/ckeditor/plugins/smiley/images/regular_smile.png\" alt=\"smiley\" width=\"23\" height=\"23\" /></strong></span></p>', 0, 100, 'Terst', 'JHOJ', 'HIHI', 1, 1, 'http://google.com', '2020-02-29 12:59:49', '2020-05-23 00:02:03', 1, 1),
(7, 'how-to-switch-php-version-in-ubuntu-using-terminal', NULL, 'How to switch PHP version In Ubuntu using Terminal', '1589610528.php.png', '<p>Different projects are working on different php version some of project are working on php <strong>7.4</strong>,<strong>7.2</strong>,<strong>7.0</strong> also older version of php projects are workign on php version 5.6 and etc.</p>\r\n<p>Before start interchange of php version we assume that you have installed php version <strong>7.4</strong>,<strong>7.2</strong>,<strong>7.0</strong> and <strong>5.6</strong>.if you have not installed php version you can check my LAMP installtion post or simply search for lamp installtion.&nbsp;</p>\r\n<p>Please follow below steps to interchange php versoin.</p>\r\n<p>&nbsp;</p>', '<p><strong><span style=\"font-size: 20px;\">Interchange php version 7.4 To&nbsp;7.2</span></strong></p>\r\n<p><strong class=\"post-step\">Step 1: Open your terminal.</strong></p>\r\n<p>In this first step open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>sudo a2dismod php7.4</code></pre>\r\n<p>Then restat apache server and&nbsp; enable php version whatever you have to enable.currently we are enable php version 7.2.</p>\r\n<pre class=\"language-php\"><code>sudo service apache2 restart\r\nsudo a2enmod php7.2\r\nsudo service apache2 restart</code></pre>\r\n<p><strong><span style=\"font-size: 20px;\">Interchange php version 7.2 To&nbsp;7.4</span></strong></p>\r\n<p><strong class=\"post-step\">Step 1: Open your terminal.</strong></p>\r\n<p>Open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>sudo a2dismod php7.2\r\nsudo service apache2 restart //For restart apache server\r\nsudo a2enmod php7.4\r\nsudo service apache2 restart //For restart apache server</code></pre>\r\n<p><strong><span style=\"font-size: 20px;\">Interchange php version 7.0&nbsp;To 5.6</span></strong></p>\r\n<p><strong class=\"post-step\">Step 1: Open your terminal.</strong></p>\r\n<p>Open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>sudo a2dismod php7.0\r\nsudo service apache2 restart //For restart apache server\r\nsudo a2enmod php5.6\r\nsudo service apache2 restart //For restart apache server</code></pre>\r\n<p><strong><span style=\"font-size: 20px;\">Interchange php version 5.6&nbsp;To 7.0</span></strong></p>\r\n<p><strong class=\"post-step\">Step 1: Open your terminal.</strong></p>\r\n<p>Open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>sudo a2dismod php5.6\r\nsudo service apache2 restart //For restart apache server\r\nsudo a2enmod php7.0\r\nsudo service apache2 restart //For restart apache server</code></pre>', 0, 47, 'Test', 'Switch PHP Version', 'HI', 1, 0, NULL, '2020-03-01 00:02:03', '2020-05-22 13:27:14', 1, 1),
(8, 'how-to-install-phpmyadmin-with-lamp-stack-in-ubuntu', NULL, 'How to install phpMyAdmin with LAMP Stack In Ubuntu', '1589610637.phpmyadmin-featured-image-1024x683.png', '<p>Phpmyadmin is an&nbsp;<strong>LAMP</strong> stack application specifying for administrative related MYSQL task.phpmyadmin provide Graphical user interface for perfrom cetain action on&nbsp;MYSQL databse.we can also say that its a tool to manage our databse and you can manage databse like create ,edit,update,delete and many more action.before instattion of phpmyadmin i assume that you have already install <strong>LAMP (Linux,apache,MYSQL,PHP)</strong> statck on your system.if you not installed <strong>LAMP</strong> stack on your system please go to Installtion category or simply search in this website of <strong>LAMP</strong> instattion.Please follow below step to install phpmyadmin on ubuntu.</p>', '<p><strong class=\"post-step\">Step 1: Open your terminal.</strong></p>\r\n<p>In this first step open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>sudo apt update \r\nsudo apt install phpmyadmin php-mbstring php-gettext</code></pre>\r\n<p><strong class=\"post-step\">Step 2:&nbsp; Open your browser and enter below line of code to check phpmyadmin install or not.</strong></p>\r\n<pre class=\"language-php\"><code>http://localhost/phpmyadmin/</code></pre>\r\n<p>And Finally you will see below screen in your browser.if you are getting problem like <strong>requested url /phpmyadmin not found on this server</strong>&nbsp;for that i have already made one post for this or you can simplay search in this website.&nbsp;</p>\r\n<p><img src=\"/home/chirag/Videos/softtechover/phpMyAdmin - localhost.png\" alt=\"\" /></p>', 0, 45, NULL, NULL, NULL, 1, 0, NULL, '2020-03-07 00:40:20', '2020-05-22 12:24:51', 1, 1),
(9, 'apache2-the-requested-url-phpmyadmin-was-not-found-on-this-server', NULL, 'apache2 - The requested URL /phpmyadmin/ was not found on this server', '1589610786.phpmyadmin1.png', '<p>This type of error is generated when you have not configure <strong>apache2.conf </strong>properly<strong>.</strong>mailny this type of error was found in ubuntu. you just need to add phpmyadmin path in apache2.conf file.also when you&nbsp;visit inner pages of your website this type error found that requested url not found on this server.please follow below step to resolved this<strong>&nbsp;</strong>&nbsp;type of error.</p>', '<p><strong class=\"post-step\">Step 1: Open your terminal.</strong></p>\r\n<p>In this first step open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>sudo -H gedit /etc/apache2/apache2.conf</code></pre>\r\n<p>&nbsp;</p>\r\n<p><strong class=\"post-step\">Step 2:&nbsp; Then add below line of code in your end of the file.</strong></p>\r\n<pre class=\"language-php\"><code>Include /etc/phpmyadmin/apache.conf</code></pre>\r\n<p><strong class=\"post-step\">Step 3:&nbsp; Also find below code in your file.</strong></p>\r\n<pre class=\"language-php\"><code>Options Indexes FollowSymLinks\r\nAllowOverride None\r\nRequire all granted</code></pre>\r\n<pre>In Above code replace&nbsp;&nbsp;<strong>AllowOverride None</strong> to&nbsp;<strong>AllowOverride All</strong></pre>\r\n<p><strong class=\"post-step\">Step 4:&nbsp; Open your terminal and add below code.</strong></p>\r\n<pre class=\"language-php\"><code>sudo a2enmod rewrite</code></pre>\r\n<p><strong class=\"post-step\">Step 5:&nbsp; Then restart apache.</strong></p>\r\n<pre class=\"language-php\"><code>sudo service apache2 restart</code></pre>\r\n<p>&nbsp;</p>', 0, 66, 'The requested URL /phpmyadmin/ was not found on this server', 'PHP,phpmyadmin', 'The requested URL /phpmyadmin/ was not found on this server', 1, 0, NULL, '2020-03-14 02:25:28', '2020-05-22 13:22:47', 1, 1),
(10, 'how-to-build-a-restful-api-in-laravel-using-jwt-authentication', NULL, 'How to Build a RESTful API in Laravel using JWT Authentication', '1590213410.Screenshot from 2020-05-23 11-26-11.png', '<p>RESTful API is an application program interface that uses <strong>HTTP</strong> requests to GET, PUT, POST and DELETE data.This services allow requesting systems to access and manipulate textual representations of web resources using a uniform and predefined set of stateless operations. Also in computer programming, an application programming interface (<a href=\"https://www.google.com.ng/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjOh9mNw_jPAhWrAMAKHVFmDFUQFggYMAA&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FApplication_programming_interface&amp;usg=AFQjCNHxQYaQtHaaSdm2FZMx3k2Kx7g9Rg&amp;sig2=TKmWPC09nimIAx0Lqx4OEA\" target=\"_blank\" rel=\"noopener nofollow\">API</a>) is a set of subroutine definitions, protocols and tools for building applications.</p>\r\n<p>In this example we will user JWT (Json Web Token ) auhentication package for authentication and in this example I have explain user login and registration example using REST API.</p>\r\n<p>I have also add this code to my github account&nbsp; <a href=\"https://github.com/chiragghevariya/Larave-JWT-Authentication\" target=\"_blank\" rel=\"noopener\"><button class=\"btn btn-primary\"><strong>View code on Github</strong></button></a></p>\r\n<p>Follow bellow few steps to create restful api&nbsp;in laravel&nbsp;app.</p>', '<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 1: Install Laravel</strong></span></p>\r\n<p>Open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal to install <strong>Laravel Project</strong>.here in bllow code&nbsp;<strong>laravel-jwt-auth&nbsp;</strong>is project name.</p>\r\n<pre class=\"language-php\"><code>composer create-project --prefer-dist laravel/laravel laravel-jwt-auth</code></pre>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 2: Install JWT-Auth package</strong></span></p>\r\n<p>To install JWT-Auth<strong>&nbsp;o</strong>pen your terminal&nbsp; and go to your project directory&nbsp;<strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>composer require tymon/jwt-auth</code></pre>\r\n<p>If you getting any <span style=\"background-color: #ffffff; color: #e03e2d;\">error</span> uring installtion someting like mymory error for composer that case you can add below code to your composer.json file and after update composer.</p>\r\n<pre class=\"language-php\"><code>\"tymon/jwt-auth\": \"^1.0\"\r\n composer update</code></pre>\r\n<p>&nbsp;<img style=\"height: 450px; width: 879px;\" src=\"/softtechover/public/admin/ckeditor/images/jwt-token-composer.png\" alt=\"\" /></p>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 3: Add service provider</strong></span></p>\r\n<p>Add the service provider to the&nbsp;<strong><code>providers</code></strong>&nbsp;array in the&nbsp;<strong><code>config/app.php</code></strong>&nbsp;config file as follows:</p>\r\n<pre class=\"language-php\"><code>\'providers\' =&gt; [\r\n\r\n    ...\r\n\r\n    Tymon\\JWTAuth\\Providers\\LaravelServiceProvider::class,\r\n]</code></pre>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 4: Publish the config</strong></span></p>\r\n<p>Run the following command to publish the package config file:&nbsp;</p>\r\n<pre class=\"language-php\"><code>php artisan vendor:publish --provider=\"Tymon\\JWTAuth\\Providers\\LaravelServiceProvider\"</code></pre>\r\n<pre>You should now have a&nbsp;<strong><code>config/jwt.php</code></strong> file that allows you to configure the basics <br />of this package.</pre>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 5: Generate secret key</strong></span></p>\r\n<p>I have included a helper command to generate a key for you:</p>\r\n<pre class=\"language-php\"><code>php artisan jwt:secret</code></pre>\r\n<p>This will update your&nbsp;<code>.env</code>&nbsp;file with something like&nbsp;<code>JWT_SECRET=foobar</code></p>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 6: Update User Model</strong></span></p>\r\n<ul>\r\n<li>First implement the&nbsp;Tymon\\JWTAuth\\Contracts\\JWTSubject</li>\r\n<li>Add to&nbsp;methods&nbsp;<code>getJWTIdentifier()</code>&nbsp;and&nbsp;<code>getJWTCustomClaims()</code>.</li>\r\n</ul>\r\n<p>I have made above changes in <strong>User.php</strong> file check it in below file.<code class=\"language-php\"> </code></p>\r\n<pre class=\"language-php\"><code>namespace App;\r\n\r\nuse Tymon\\JWTAuth\\Contracts\\JWTSubject;\r\nuse Illuminate\\Notifications\\Notifiable;\r\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\r\n\r\nclass User extends Authenticatable implements JWTSubject\r\n{\r\n    use Notifiable;\r\n\r\n    /**\r\n     * The attributes that are mass assignable.\r\n     *\r\n     * @var array\r\n     */\r\n    protected $fillable = [\r\n        \'name\', \'email\', \'password\',\r\n    ];\r\n\r\n    /**\r\n     * The attributes that should be hidden for arrays.\r\n     *\r\n     * @var array\r\n     */\r\n    protected $hidden = [\r\n        \'password\', \'remember_token\',\r\n    ];\r\n\r\n    /**\r\n     * The attributes that should be cast to native types.\r\n     *\r\n     * @var array\r\n     */\r\n    protected $casts = [\r\n        \'email_verified_at\' =&gt; \'datetime\',\r\n    ];\r\n\r\n    // Rest omitted for brevity\r\n\r\n    /**\r\n     * Get the identifier that will be stored in the subject claim of the JWT.\r\n     *\r\n     * @return mixed\r\n     */\r\n    public function getJWTIdentifier()\r\n    {\r\n        return $this-&gt;getKey();\r\n    }\r\n\r\n    /**\r\n     * Return a key value array, containing any custom claims to be added to the JWT.\r\n     *\r\n     * @return array\r\n     */\r\n    public function getJWTCustomClaims()\r\n    {\r\n        return [];\r\n    }\r\n}\r\n</code></pre>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 7: Update Auth guard</strong></span></p>\r\n<p>Go to <strong>config/auth.php </strong>and made below changes in file.</p>\r\n<pre class=\"language-php\"><code>return [\r\n\r\n    /*\r\n    |--------------------------------------------------------------------------\r\n    | Authentication Defaults\r\n    |--------------------------------------------------------------------------\r\n    |\r\n    | This option controls the default authentication \"guard\" and password\r\n    | reset options for your application. You may change these defaults\r\n    | as required, but they\'re a perfect start for most applications.\r\n    |\r\n    */\r\n\r\n    \'defaults\' =&gt; [\r\n        \'guard\' =&gt; \'api\',\r\n        \'passwords\' =&gt; \'users\',\r\n    ],\r\n\r\n    /*\r\n    |--------------------------------------------------------------------------\r\n    | Authentication Guards\r\n    |--------------------------------------------------------------------------\r\n    |\r\n    | Next, you may define every authentication guard for your application.\r\n    | Of course, a great default configuration has been defined for you\r\n    | here which uses session storage and the Eloquent user provider.\r\n    |\r\n    | All authentication drivers have a user provider. This defines how the\r\n    | users are actually retrieved out of your database or other storage\r\n    | mechanisms used by this application to persist your user\'s data.\r\n    |\r\n    | Supported: \"session\", \"token\"\r\n    |\r\n    */\r\n\r\n    \'guards\' =&gt; [\r\n        \'web\' =&gt; [\r\n            \'driver\' =&gt; \'session\',\r\n            \'provider\' =&gt; \'users\',\r\n        ],\r\n\r\n        \'api\' =&gt; [\r\n            \'driver\' =&gt; \'jwt\',\r\n            \'provider\' =&gt; \'users\',\r\n            \'hash\' =&gt; false,\r\n        ],\r\n    ],\r\n\r\n    /*\r\n    |--------------------------------------------------------------------------\r\n    | User Providers\r\n    |--------------------------------------------------------------------------\r\n    |\r\n    | All authentication drivers have a user provider. This defines how the\r\n    | users are actually retrieved out of your database or other storage\r\n    | mechanisms used by this application to persist your user\'s data.\r\n    |\r\n    | If you have multiple user tables or models you may configure multiple\r\n    | sources which represent each model / table. These sources may then\r\n    | be assigned to any extra authentication guards you have defined.\r\n    |\r\n    | Supported: \"database\", \"eloquent\"\r\n    |\r\n    */\r\n\r\n    \'providers\' =&gt; [\r\n        \'users\' =&gt; [\r\n            \'driver\' =&gt; \'eloquent\',\r\n            \'model\' =&gt; App\\User::class,\r\n        ],\r\n\r\n        // \'users\' =&gt; [\r\n        //     \'driver\' =&gt; \'database\',\r\n        //     \'table\' =&gt; \'users\',\r\n        // ],\r\n    ],\r\n\r\n    /*\r\n    |--------------------------------------------------------------------------\r\n    | Resetting Passwords\r\n    |--------------------------------------------------------------------------\r\n    |\r\n    | You may specify multiple password reset configurations if you have more\r\n    | than one user table or model in the application and you want to have\r\n    | separate password reset settings based on the specific user types.\r\n    |\r\n    | The expire time is the number of minutes that the reset token should be\r\n    | considered valid. This security feature keeps tokens short-lived so\r\n    | they have less time to be guessed. You may change this as needed.\r\n    |\r\n    */\r\n\r\n    \'passwords\' =&gt; [\r\n        \'users\' =&gt; [\r\n            \'provider\' =&gt; \'users\',\r\n            \'table\' =&gt; \'password_resets\',\r\n            \'expire\' =&gt; 60,\r\n            \'throttle\' =&gt; 60,\r\n        ],\r\n    ],\r\n\r\n    /*\r\n    |--------------------------------------------------------------------------\r\n    | Password Confirmation Timeout\r\n    |--------------------------------------------------------------------------\r\n    |\r\n    | Here you may define the amount of seconds before a password confirmation\r\n    | times out and the user is prompted to re-enter their password via the\r\n    | confirmation screen. By default, the timeout lasts for three hours.\r\n    |\r\n    */\r\n\r\n    \'password_timeout\' =&gt; 10800,\r\n\r\n];</code></pre>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 8: Migrate database</strong></span></p>\r\n<p>To migrate default database add below code to your terminal.</p>\r\n<pre class=\"language-php\"><code>php artisan migrate</code></pre>\r\n<p><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 9: Create below route for api</strong></span></p>\r\n<p>To create routes for api laravel provide separate configuration for routes inside route/ap.php file.</p>\r\n<p><strong>route/api.php</strong></p>\r\n<pre class=\"language-php\"><code>get(\'/user\', function (Request $request) {\r\n    return $request-&gt;user();\r\n});\r\n\r\nRoute::post(\'api-user-registration\',\'Api\\ApiFunctionCallController@ApiUserregistration\');\r\nRoute::post(\'api-user-login\',\'Api\\ApiFunctionCallController@ApiUserLogin\');</code></pre>\r\n<pre><span style=\"font-size: 18px;\"><strong class=\"post-step\">Step 10: Create Controller for API</strong></span></pre>\r\n<p>We will creat <strong>Api&nbsp;</strong>folder inside <strong>app/Http/Controllers</strong> folder to manage all our <strong>API</strong> relared controller and its logic.&nbsp;</p>\r\n<p>create&nbsp;<strong>app/Http/Controllers/Api/ApiCommanFunctionController.php</strong></p>\r\n<pre class=\"language-php\"><code>namespace App\\Http\\Controllers\\Api;\r\n\r\nuse Illuminate\\Http\\Request;\r\nuse App\\Http\\Controllers\\Controller as Controller;\r\n\r\nclass ApiCommanFunctionController extends Controller\r\n{   \r\n\r\n    /**\r\n     * [sendResponse This function is used to send api response data]\r\n     * @param  [type] $status  [description]\r\n     * @param  [type] $result  [description]\r\n     * @param  [type] $message [description]\r\n     * @return [type]          [description]\r\n     * @author Chirag\r\n     */\r\n    public function sendResponse($status,$result, $message)\r\n    {\r\n    	$response = [\r\n            \'status\' =&gt; $status,\r\n            \'data\'    =&gt; $result,\r\n            \'message\' =&gt; $message,\r\n        ];\r\n\r\n        return response()-&gt;json($response, 200);\r\n    }\r\n\r\n    /**\r\n     * [sendError This function is used for send error message during api call]\r\n     * @param  [type]  $error         [description]\r\n     * @param  array   $errorMessages [description]\r\n     * @param  integer $code          [description]\r\n     * @return [type]                 [description]\r\n     * @author Chirag\r\n     */\r\n    public function sendError($error, $errorMessages = [], $code = 404)\r\n    {\r\n        $response = [\r\n            \'status\' =&gt; $code,\r\n            \'message\' =&gt; $error,\r\n            \'data\' =&gt; (object)[]\r\n        ];\r\n        if(!empty($errorMessages)){\r\n            $response[\'data\'] = $error;\r\n        }\r\n        return response()-&gt;json($response, $code);\r\n    }\r\n}</code></pre>\r\n<pre>create&nbsp;<strong>app/Http/Controllers/Api/ApiFunctionCallController.php</strong></pre>\r\n<pre class=\"language-php\"><code>use Illuminate\\Http\\Request;\r\nuse App\\Http\\Controllers\\Api\\ApiCommanFunctionController as ApiCommanFunctionController;\r\nuse Validator;\r\nuse App\\User;\r\nuse Auth;\r\n\r\nclass ApiFunctionCallController extends ApiCommanFunctionController\r\n{\r\n\r\n    public function ApiUserregistration(Request $r){\r\n\r\n        $input = $r-&gt;all();\r\n        $rules = [\r\n            \'name\'     =&gt; \'required\',\r\n            \'email\'     =&gt; \'required|email|checkEmailExitForUser\',\r\n            \'password\'     =&gt; \'required\',\r\n        ];\r\n        $message = [\r\n\r\n            \'name.required\'    =&gt; \"Name field is required.\",\r\n            \'email.required\'    =&gt; \"Email field is required\",\r\n            \'email.check_email_exit_for_user\'    =&gt; \"Email alredy exits.\",\r\n            \'password.required\'    =&gt; \"Password field is required\",\r\n        ];\r\n\r\n        $validator = Validator::make($input,$rules,$message);\r\n\r\n\r\n        if ($validator-&gt;fails()) {\r\n\r\n            return app(\'App\\Http\\Controllers\\Api\\ApiCommanFunctionController\')-&gt;sendError($validator-&gt;errors()-&gt;first(), $errorMessages = [], $code = 422);\r\n        }\r\n\r\n\r\n        $obj = new User;\r\n        $obj-&gt;name  =$r-&gt;name;\r\n        $obj-&gt;email  =$r-&gt;email;\r\n        $obj-&gt;password  =\\Hash::make($r-&gt;password);\r\n        $obj-&gt;save();\r\n\r\n        if ($obj !=null) {\r\n            \r\n            return response()-&gt;json([\'status\' =&gt; 200,\'msg\'=&gt;\"User successfully register.\",\'data\' =&gt; $obj ]);exit;\r\n\r\n        }else{\r\n\r\n            return response()-&gt;json([\'status\' =&gt; 204,\'msg\'=&gt;\"Somethinig is wrong or data not found\",\'data\' =&gt; (object)[] ]);exit;\r\n        }  \r\n    \r\n    }\r\n     /**\r\n     * Get a JWT token via given credentials.\r\n     *\r\n     * @param  \\Illuminate\\Http\\Request  $request\r\n     *\r\n     * @return \\Illuminate\\Http\\JsonResponse\r\n     */\r\n    public function login(Request $request)\r\n    {   \r\n        $input = $request-&gt;all();\r\n        $rules = [\r\n            \'email\'     =&gt; \'required|email\',\r\n            \'password\'     =&gt; \'required\',\r\n        ];\r\n        $message = [\r\n\r\n            \'email.required\'    =&gt; \"Email field is required\",\r\n            \'password.required\'    =&gt; \"Password field is required\",\r\n        ];\r\n\r\n        $validator = Validator::make($input,$rules,$message);\r\n\r\n        if ($validator-&gt;fails()) {\r\n\r\n            return app(\'App\\Http\\Controllers\\Api\\ApiCommanFunctionController\')-&gt;sendError($validator-&gt;errors()-&gt;first(), $errorMessages = [], $code = 422);\r\n        }\r\n\r\n        $credentials = $request-&gt;only(\'email\', \'password\');\r\n\r\n        if ($token = $this-&gt;guard()-&gt;attempt($credentials)) {\r\n            return $this-&gt;respondWithToken($token);\r\n        }\r\n\r\n        return response()-&gt;json([\'status\' =&gt; 404,\'msg\'=&gt;\"error\",\'data\' =&gt; (object)[] ]);exit;\r\n    }\r\n\r\n    /**\r\n     * Get the authenticated User\r\n     *\r\n     * @return \\Illuminate\\Http\\JsonResponse\r\n     */\r\n    public function me()\r\n    {\r\n        return response()-&gt;json($this-&gt;guard()-&gt;user());\r\n    }\r\n\r\n    /**\r\n     * Log the user out (Invalidate the token)\r\n     *\r\n     * @return \\Illuminate\\Http\\JsonResponse\r\n     */\r\n    public function logout()\r\n    {\r\n        $this-&gt;guard()-&gt;logout();\r\n\r\n        return response()-&gt;json([\'message\' =&gt; \'Successfully logged out\']);\r\n    }\r\n\r\n    /**\r\n     * Refresh a token.\r\n     *\r\n     * @return \\Illuminate\\Http\\JsonResponse\r\n     */\r\n    public function refresh()\r\n    {\r\n        return $this-&gt;respondWithToken($this-&gt;guard()-&gt;refresh());\r\n    }\r\n\r\n    /**\r\n     * Get the token array structure.\r\n     *\r\n     * @param  string $token\r\n     *\r\n     * @return \\Illuminate\\Http\\JsonResponse\r\n     */\r\n    protected function respondWithToken($token)\r\n    {\r\n        return response()-&gt;json([\r\n            \'access_token\' =&gt; $token,\r\n            \'token_type\' =&gt; \'bearer\',\r\n            \'expires_in\' =&gt; $this-&gt;guard()-&gt;factory()-&gt;getTTL() * 60\r\n        ]);\r\n    }\r\n\r\n    /**\r\n     * Get the guard to be used during authentication.\r\n     *\r\n     * @return \\Illuminate\\Contracts\\Auth\\Guard\r\n     */\r\n    public function guard()\r\n    {\r\n        return Auth::guard();\r\n    }\r\n}</code></pre>\r\n<p><span style=\"color: #2dc26b;\"><code class=\"language-php\">Now project configuration are ready to run&nbsp;our project.add blow code your project.</code></span></p>\r\n<pre class=\"language-php\"><code>php artisan serve</code></pre>\r\n<p>Here is Routes URL List that we have created in this example.</p>\r\n<p>1) <strong>Login:</strong> Method:POST, URL:http://localhost:8000/api/api-user-login</p>\r\n<p>2) <strong>Register:</strong> Method:POST, URL:http://localhost:8000/api/api-user-registration</p>\r\n<p><strong>Register API:</strong></p>\r\n<p><img style=\"width: 1074px; height: 548px;\" src=\"/softtechover/public/admin/ckeditor/images/jwt-register.png\" alt=\"\" /></p>\r\n<p><strong>Login API:</strong></p>\r\n<p><img style=\"width: 1077px; height: 551px;\" src=\"/softtechover/public/admin/ckeditor/images/jwt-login.png\" alt=\"\" /></p>\r\n<p>&nbsp;</p>\r\n<center><a href=\"https://github.com/chiragghevariya/Larave-JWT-Authentication\" target=\"_blank\" rel=\"noopener\"><button class=\"btn btn-primary\"><strong>View code on Github</strong></button></a></center>\r\n<p>&nbsp;</p>\r\n<p><span style=\"font-size: 16px;\"><strong>NOTE:-</strong> If you have any query or want to ask any question add your comment in below comment section.</span></p>\r\n<p><span style=\"font-size: 20px;\"><strong>Thank&nbsp;you.<img title=\"smiley\" src=\"/softtechover/public/admin/ckeditor/plugins/smiley/images/regular_smile.png\" alt=\"smiley\" width=\"23\" height=\"23\" /></strong></span></p>', 0, 96, NULL, NULL, NULL, 1, 1, NULL, '2020-05-16 03:42:03', '2020-05-23 05:48:58', 1, 1),
(11, 'how-to-create-custome-validation-method-in-laravel-for-server-side-validation', NULL, 'How to create custome validation method in laravel for server side validation', '1590213792.Screenshot from 2020-05-23 11-32-53.png', '<p>Before inserting any data into our database we must need to verify all data at server side.laravel provide easy way to validate server side validation also we can create custome validation method for when we need to validate data that is already exit or not or validate date is grater than or not that such time we need to create custome method for validating those field.</p>\r\n<p>Please follow below step to create custome validation method.&nbsp;</p>', '<p><strong class=\"post-step\">Step 1: Open your terminal and create laravel project.</strong></p>\r\n<p>In this first step open your terminal <strong>OR</strong> simply prsss <strong>Ctrl + Alt + T </strong>and add below code to your terminal to install laravel project.</p>\r\n<pre class=\"language-php\"><code>composer create-project laravel/laravel --prefer-dist laravel-custome-validation</code></pre>\r\n<p><strong class=\"post-step\">Step 2: Create blank database and configure your .env file and add below code to your terminal.</strong></p>\r\n<pre class=\"language-php\"><code>php artisan migrate\r\nphp artisan key:generate</code></pre>\r\n<p><strong class=\"post-step\">Step 3: Follow below step to Configure validation file.</strong></p>\r\n<p>Create folder inside app directory <strong>Validator </strong>and create file <strong>CustomeValidator.php&nbsp;</strong>and add below line of code.</p>\r\n<p><strong>app/Validator</strong>/<strong>CustomeValidator.php</strong></p>\r\n<pre class=\"language-php\"><code>namespace App\\Validator;\r\nuse Illuminate\\Validation\\Validator;\r\nuse Illuminate\\Support\\Facades\\Input;\r\nuse Hash;\r\nclass CustomeValidator extends Validator\r\n{\r\n	/**\r\n	 * [validatecheckEmailExitForUser To check user email exit or not]\r\n	 * @param  [type] $attribute  [description]\r\n	 * @param  [type] $value      [description]\r\n	 * @param  [type] $parameters [description]\r\n	 * @return [type]             [description]\r\n	 */\r\n	public function validatecheckEmailExitForUser($attribute, $value, $parameters)\r\n	{	\r\n\r\n		if (isset($parameters[0]) &amp;&amp; !empty($parameters[0])) {\r\n\r\n            $count = \\App\\User::where(\"id\", \"!=\", \\Crypt::decrypt($parameters[0]))\r\n                -&gt;where(\"email\", $value)\r\n                -&gt;count();\r\n\r\n        } else {\r\n\r\n            $count = \\App\\User::where(\"email\", $value)-&gt;count();\r\n        }\r\n\r\n        if ($count === 0) {\r\n\r\n            return true;\r\n\r\n        } else {\r\n\r\n            return false;\r\n        }\r\n	}\r\n}</code></pre>\r\n<p>Open your <strong>AppServiceProvider.php</strong> and add below line of code in <strong>boot</strong> method and import validator</p>\r\n<p>and custome validation file</p>\r\n<p><strong>app/Providers/AppServiceProvider.php</strong></p>\r\n<pre class=\"language-php\"><code>namespace App\\Providers;\r\n\r\nuse Validator;\r\nuse Illuminate\\Support\\ServiceProvider;\r\nuse App\\Validator\\CustomeValidator;\r\n\r\nclass AppServiceProvider extends ServiceProvider\r\n{\r\n    /**\r\n     * Register any application services.\r\n     *\r\n     * @return void\r\n     */\r\n    public function register()\r\n    {\r\n        //\r\n\r\n    }\r\n\r\n    /**\r\n     * Bootstrap any application services.\r\n     *\r\n     * @return void\r\n     */\r\n    public function boot()\r\n    {\r\n        //\r\n        $this-&gt;app-&gt;validator-&gt;resolver(function($translator, $data, $rules, $messages) {\r\n            return new CustomeValidator($translator, $data, $rules, $messages);\r\n        });\r\n    }\r\n}\r\n</code></pre>\r\n<p>Here above file <strong>CustomeValidator.php</strong> we have added one method checkEmailExitForUser this custome method will check if user is already exit or not.also note that every validation method add prefix <strong>validate </strong> and after add your method name as we have added in <strong>CustomeValidator.php.</strong></p>\r\n<p>I have added sample code for how to add method during validation and i have added method <strong>checkEmailExitForUser </strong>for</p>\r\n<p>email validation during user registratio.</p>\r\n<pre class=\"language-markup\"><code>public function ApiUserregistration(Request $r){\r\n\r\n        $input = $r-&gt;all();\r\n        $rules = [\r\n            \'name\'     =&gt; \'required\',\r\n            \'email\'     =&gt; \'required|email|checkEmailExitForUser\',\r\n            \'password\'     =&gt; \'required\',\r\n        ];\r\n        $message = [\r\n\r\n            \'name.required\'    =&gt; \"Name field is required.\",\r\n            \'email.required\'    =&gt; \"Email field is required\",\r\n            \'email.check_email_exit_for_user\'    =&gt; \"Email alredy exits.\",\r\n            \'password.required\'    =&gt; \"Password field is required\",\r\n        ];\r\n\r\n        $validator = Validator::make($input,$rules,$message);\r\n\r\n\r\n        if ($validator-&gt;fails()) {\r\n\r\n            return app(\'App\\Http\\Controllers\\Api\\ApiCommanFunctionController\')-&gt;sendError($validator-&gt;errors()-&gt;first(), $errorMessages = [], $code = 422);\r\n        }\r\n\r\n        $obj = new User;\r\n        $obj-&gt;name  =$r-&gt;name;\r\n        $obj-&gt;email  =$r-&gt;email;\r\n        $obj-&gt;password  =\\Hash::make($r-&gt;password);\r\n        $obj-&gt;save();\r\n\r\n        if ($obj !=null) {\r\n            \r\n            return response()-&gt;json([\'status\' =&gt; 200,\'msg\'=&gt;\"User successfully register.\",\'data\' =&gt; $obj ]);exit;\r\n\r\n        }else{\r\n\r\n            return response()-&gt;json([\'status\' =&gt; 204,\'msg\'=&gt;\"Somethinig is wrong or data not found\",\'data\' =&gt; (object)[] ]);exit;\r\n        }  \r\n    \r\n    }</code></pre>\r\n<p>&nbsp;</p>\r\n<center><a href=\"https://github.com/chiragghevariya/Larave-JWT-Authentication\" target=\"_blank\" rel=\"noopener\"><button class=\"btn btn-primary\"><strong>View code on Github</strong></button></a></center>\r\n<p>&nbsp;</p>', 0, 15, NULL, NULL, NULL, 1, 0, NULL, '2020-05-23 00:12:52', '2020-05-23 01:30:38', 1, 1),
(12, 'laravel-custome-admin-panel', NULL, 'Laravel Custome Admin Panel', '1590238348.Screenshot from 2020-05-23 18-21-30.png', '<p>Every business need to handle it`s data online so admin user can controll there business website data.Here I have created simple admin panel in laravel using this admin panel we can manage <strong>Contact Us User</strong>, <strong>Newsletter</strong>,<strong>Banner Management</strong>,<strong>Email template</strong>, <strong>Social media</strong>,<strong>Category</strong>,<strong>Blog management</strong>,<strong>Content management system</strong> (<strong>CMS</strong>) , <strong>Setting </strong>also i have created this admin panel with user role wise means if admin want to created any rights and based on rights master admin can created users also master admin&nbsp; can give only those module to access to update admin panel data for user.&nbsp;</p>', NULL, 0, 4, NULL, NULL, NULL, 1, 1, 'http://google.com', '2020-05-23 07:22:28', '2020-05-23 08:50:14', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `slug` longtext CHARACTER SET utf8,
  `name` longtext CHARACTER SET utf8,
  `bg_color` varchar(255) DEFAULT NULL,
  `image` longtext CHARACTER SET utf8,
  `description` longtext CHARACTER SET utf8,
  `parent_id` int(11) DEFAULT NULL,
  `display_on_header` int(11) DEFAULT '0' COMMENT '1:Yes;0:No',
  `display_on_footer` int(11) DEFAULT '0' COMMENT '1:Yes;0:No',
  `status` int(3) NOT NULL COMMENT '1 active and 0 inactive',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `slug`, `name`, `bg_color`, `image`, `description`, `parent_id`, `display_on_header`, `display_on_footer`, `status`, `created_at`, `updated_at`) VALUES
(25, 'laravel', 'Laravel', '#00ffff', '1589913095.image_87be6a9f50206eef353b4bd2bdc6e17b (copy).png', '<p>नारायणपुर जिले की ओरछा तहसील के अबूझमाड़ में इस योजना को परखने की कोशिशें चल रही हैं. सागौन और साल के पेड़ों से ढके 3,905 वर्ग किमी पहाड़ी इलाके में मुख्यत: अबूझमाडिय़ा जनजाति के लोग रहते हैं. इसके अलावा दादमी मारिया, गोंड और अहीर सरीखी दूसरी जनजातियां भी हैं. यहां आवाजाही का एकमात्र जरिया पगडंडी या फिर पहाड़ की चढ़ाई है. अबूझमाड़ को माओवादियों की मांद माना जाता है क्योंकि इस बीहड़ इलाके में आना-जाना दुश्वार होने के चलते यह विद्रोही नेताओं और कैडर के लिए सुरक्षित पनाहगाह का काम करता है. मैदानी इलाकों के उलट, यहां झोंपड़ों वाले गांवों की बस्तियां पास-पास न होकर फैली होती हैं. अबूझमाड़ मुश्किलों से दो-चार किसी इलाके जैसा ही है. एक ओर सरकार दावा करती है कि यहां के गांवों में भीतर तक उसकी पहुंच नहीं, लेकिन कागज पर प्रधानमंत्री आवास और स्वच्छता मिशन जैसे कार्यक्रम चल रहे हैं.</p>', NULL, 1, 1, 1, '2019-07-20 13:44:14', '2020-05-19 18:31:35'),
(27, 'ubuntu', 'Ubuntu', '#c53a3e', 'image_f6715404fb8c5c3845f43e68fad9a611.png', NULL, NULL, 1, 1, 1, '2019-08-23 13:04:05', '2020-02-29 19:35:19'),
(28, 'php', 'PHP', '#0000ff', 'image_43a3c80c979f3c8b23065a06a288ed35.png', NULL, NULL, 1, 1, 1, '2019-08-23 13:05:47', '2020-02-29 19:35:19'),
(30, 'installtion', 'Installtion', '#8080ff', 'image_02f156bb6c16bf7ff10cc239c8e57d3f.png', NULL, NULL, 1, 1, 1, '2019-09-27 20:23:28', '2020-02-29 19:35:19');

-- --------------------------------------------------------

--
-- Table structure for table `cms`
--

CREATE TABLE `cms` (
  `id` int(10) NOT NULL,
  `parent_id` int(10) DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `module_id` int(10) DEFAULT NULL,
  `name` text CHARACTER SET utf8,
  `image` text CHARACTER SET utf8,
  `short_description` text CHARACTER SET utf8,
  `long_description` text CHARACTER SET utf8,
  `seo_title` text CHARACTER SET utf8,
  `seo_keyword` text CHARACTER SET utf16,
  `seo_description` text CHARACTER SET utf8,
  `status` int(3) NOT NULL DEFAULT '1' COMMENT '1=active,0=inactive',
  `secondary_title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `display_on_header` tinyint(3) DEFAULT NULL COMMENT '1=yes,0=no',
  `display_on_footer` tinyint(3) DEFAULT NULL COMMENT '1=yes,0=no',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) DEFAULT NULL,
  `last_updated_by` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cms`
--

INSERT INTO `cms` (`id`, `parent_id`, `slug`, `module_id`, `name`, `image`, `short_description`, `long_description`, `seo_title`, `seo_keyword`, `seo_description`, `status`, `secondary_title`, `display_on_header`, `display_on_footer`, `created_at`, `updated_at`, `created_by`, `last_updated_by`) VALUES
(4, NULL, 'privacy-policy', NULL, 'Privacy Policy', NULL, '<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\r\n<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\r\n<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', NULL, NULL, NULL, 1, 'Privacy policy', 0, 0, '2018-05-28 06:23:49', '2020-05-20 06:03:11', 1, 1),
(5, NULL, 'contact-us', NULL, 'Contact Us', NULL, '<p><b>Mobile No:- 9825326562</b></p>\r\n\r\n<p><b>Email :- gcb1196@gmail.com</b></p>\r\n\r\n<p>&nbsp;</p>', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', 'title', 'keyword', 'dewcritpikonm', 1, 'Contact Us', 0, 0, '2018-11-04 06:13:21', '2019-09-29 05:36:21', 1, 1),
(8, NULL, 'about-us', 1, 'About Us', NULL, '<aside class=\"main-sidebar\"><!-- sidebar: style can be found in sidebar.less -->\r\n<section class=\"sidebar\"><!-- sidebar menu: : style can be found in sidebar.less -->\r\n<ul class=\"sidebar-menu\" data-widget=\"tree\"><!--?php /*<li class=\"active\"-->\r\n	<li>HIHI</li>\r\n</ul>\r\n</section>\r\n<!-- /.sidebar --></aside>', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', NULL, NULL, NULL, 1, 'About Us', 0, 0, '2018-11-04 08:51:55', '2020-05-20 05:55:35', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8,
  `email` text CHARACTER SET utf8,
  `message` text CHARACTER SET utf8,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
(2, 'Chirag', 'gcb1196@gmail.com', 'For project contact me on this email', '2019-09-11 20:34:01', '2019-09-11 20:34:01'),
(3, 'Chirag', 'gcb1196@gmail.com', 'gcb', '2019-09-11 20:34:01', '2019-09-11 20:34:01'),
(4, 'SAVE', 'SAVE@GMAIL.COMM', 'hihih', '2019-09-11 15:04:05', '2019-09-11 15:04:05');

-- --------------------------------------------------------

--
-- Table structure for table `email_templates`
--

CREATE TABLE `email_templates` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT ' 1=active,0=inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `email_templates`
--

INSERT INTO `email_templates` (`id`, `title`, `subject`, `from`, `description`, `status`, `created_at`, `updated_at`) VALUES
(813, 'verify_front_news_letter', 'Verify your subscription', 'test@yopmail.com', '&lt;table style=&quot;border-collapse: collapse; width: 100%; max-width: 540px;&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; align=&quot;center&quot; bgcolor=&quot;#FFF&quot;&gt;\r\n&lt;tbody&gt;\r\n&lt;tr&gt;\r\n&lt;td style=&quot;border-collapse: collapse; color: #fff;&quot; width=&quot;10&quot;&gt;&amp;nbsp;&lt;/td&gt;\r\n&lt;td align=&quot;center&quot; valign=&quot;middle&quot;&gt;\r\n&lt;table border=&quot;0&quot; width=&quot;520&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; align=&quot;center&quot;&gt;\r\n&lt;tbody&gt;\r\n&lt;tr&gt;\r\n&lt;td width=&quot;100%&quot; height=&quot;10&quot;&gt;&amp;nbsp;&lt;/td&gt;\r\n&lt;/tr&gt;\r\n&lt;tr&gt;\r\n&lt;td style=&quot;font-family: \'HelveticaNeue\',Arial,sans-serif;&quot; align=&quot;left&quot; valign=&quot;middle&quot;&gt;\r\n&lt;div&gt;\r\n&lt;h2 style=&quot;text-align: center;&quot;&gt;Dear &lt;strong&gt;Subscriber&lt;/strong&gt;&lt;/h2&gt;\r\n&lt;p style=&quot;text-align: center;&quot;&gt;Thank you for subscribed via &lt;a style=&quot;color: #17bbc1;&quot; href=&quot;###SITE_URL###&quot;&gt;###SITE_NAME&lt;/a&gt;###.&lt;/p&gt;\r\n&lt;p style=&quot;text-align: center;&quot;&gt;&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;To get latest news and update verify your account Please &lt;strong&gt;&lt;a style=&quot;color: #17bbc1;&quot; href=&quot;###LINK###&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;click here&lt;/a&gt;&lt;/strong&gt;&lt;/p&gt;\r\n&lt;hr /&gt;\r\n&lt;h3 style=&quot;clear: both; text-align: center; color: #000; margin: 0; font-weight: 300;&quot;&gt;&amp;nbsp;&lt;/h3&gt;\r\n&lt;/div&gt;\r\n&lt;/td&gt;\r\n&lt;/tr&gt;\r\n&lt;/tbody&gt;\r\n&lt;/table&gt;\r\n&lt;/td&gt;\r\n&lt;td width=&quot;10&quot;&gt;&amp;nbsp;&lt;/td&gt;\r\n&lt;/tr&gt;\r\n&lt;/tbody&gt;\r\n&lt;/table&gt;\r\n&lt;p style=&quot;display: none;&quot;&gt;&amp;nbsp;&lt;/p&gt;', 1, '2019-09-07 04:25:52', '2020-05-22 13:48:16'),
(814, 'sample', 'sample_email', 'gcb1196@gmail.com', '&lt;div style=&quot;background-color:transparent;&quot;&gt;\r\n&lt;div class=&quot;block-grid&quot; style=&quot;Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;&quot;&gt;\r\n&lt;div style=&quot;border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;&quot;&gt;\r\n&lt;div class=&quot;col num12&quot; style=&quot;min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;&quot;&gt;\r\n&lt;div style=&quot;width:100% !important;&quot;&gt;\r\n&lt;div style=&quot;border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;&quot;&gt;\r\n&lt;div style=&quot;color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:10px;padding-left:40px;&quot;&gt;\r\n&lt;div style=&quot;line-height: 1.2; font-size: 12px; color: #555555; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;&quot;&gt;\r\n&lt;p style=&quot;font-size: 46px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 55px; margin: 0;&quot;&gt;&lt;span style=&quot;font-size: 46px; color: #003188;&quot;&gt;&lt;strong&gt;Got a minute? &lt;/strong&gt; &lt;/span&gt;&lt;/p&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div style=&quot;color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;&quot;&gt;\r\n&lt;div style=&quot;line-height: 1.5; font-size: 12px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;&quot;&gt;\r\n&lt;p style=&quot;text-align: center; line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;&quot;&gt;&lt;span style=&quot;font-size: 16px; color: #6d89bc;&quot;&gt;Thanks for being a &amp;quot;YourBrand&amp;quot; newsletter subscriber! &lt;/span&gt;&lt;br /&gt;\r\n&lt;span style=&quot;font-size: 16px; color: #6d89bc;&quot;&gt;We&amp;#39;d appreciate if you take just a few minutes of your time to share your thoughts, so we can improve our contents and services. &lt;/span&gt; &lt;span style=&quot;font-size: 16px; color: #6d89bc;&quot;&gt; Thank you for taking our quick survey! &lt;/span&gt;&lt;/p&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;', 1, '2020-05-19 06:34:19', '2020-05-19 06:34:19'),
(815, 'forgot_password_admin_user', 'Reset your passwod', 'gcb1196@gmail.com', '&lt;div style=&quot;background-color: transparent;&quot;&gt;\r\n&lt;div class=&quot;block-grid&quot; style=&quot;margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;&quot;&gt;\r\n&lt;div style=&quot;border-collapse: collapse; display: table; width: 100%; background-color: #ffffff;&quot;&gt;\r\n&lt;div class=&quot;col num12&quot; style=&quot;min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;&quot;&gt;\r\n&lt;div style=&quot;width: 100% !important;&quot;&gt;\r\n&lt;div style=&quot;border: 0px solid transparent; padding: 0px;&quot;&gt;\r\n&lt;div style=&quot;color: #555555; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 1.2; padding: 20px 40px 10px 40px;&quot;&gt;\r\n&lt;div style=&quot;line-height: 1.2; font-size: 12px; color: #555555; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;&quot;&gt;\r\n&lt;p style=&quot;font-size: 46px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 55px; margin: 0;&quot;&gt;&lt;span style=&quot;font-size: 46px; color: #003188;&quot;&gt;&lt;strong&gt;&lt;a href=&quot;###LINK####&quot;&gt;Click here to reset you password&lt;/a&gt;&amp;nbsp;&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;div style=&quot;color: #555555; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; line-height: 1.5; padding: 10px 40px 10px 40px;&quot;&gt;\r\n&lt;div style=&quot;line-height: 1.5; font-size: 12px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;&quot;&gt;\r\n&lt;p style=&quot;text-align: center; line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;&quot;&gt;&amp;nbsp;&lt;/p&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;', 1, '2020-05-19 08:09:34', '2020-05-22 13:48:21');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sort_name` varchar(10) DEFAULT NULL,
  `image` text,
  `status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '1=active,0=inactive',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) DEFAULT NULL,
  `last_updated_by` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `sort_name`, `image`, `status`, `created_at`, `updated_at`, `created_by`, `last_updated_by`) VALUES
(1, 'English', 'en', '1542446244.english.png', 1, '2018-11-17 09:17:24', '2018-11-17 03:47:24', NULL, NULL),
(2, 'Arebic', 'ar', '1542446257.arabic.png', 1, '2018-11-25 09:18:56', '2018-11-25 03:48:56', NULL, NULL),
(3, 'Turkey', 'tr', '1543127506.tr.png', 1, '2018-11-25 10:11:37', '2018-11-25 04:41:37', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(5, '2018_04_04_124842_create_email_templates_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '1=active,0=inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) DEFAULT NULL,
  `last_updated_by` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `name`, `status`, `created_at`, `updated_at`, `created_by`, `last_updated_by`) VALUES
(1, 'About Us', 1, '2018-05-27 02:23:49', '2018-11-25 04:07:08', 1, 1),
(2, 'dsfsf', 1, '2018-12-01 12:21:01', '2018-12-01 12:21:01', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `multiple_category`
--

CREATE TABLE `multiple_category` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `blog_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `multiple_category`
--

INSERT INTO `multiple_category` (`id`, `category_id`, `blog_id`, `status`, `created_at`, `updated_at`) VALUES
(388, 27, 8, 1, '2020-05-22 12:24:40', '2020-05-22 12:24:40'),
(389, 28, 8, 1, '2020-05-22 12:24:40', '2020-05-22 12:24:40'),
(390, 30, 8, 1, '2020-05-22 12:24:40', '2020-05-22 12:24:40'),
(403, 27, 6, 1, '2020-05-22 12:45:38', '2020-05-22 12:45:38'),
(404, 28, 6, 1, '2020-05-22 12:45:38', '2020-05-22 12:45:38'),
(405, 30, 6, 1, '2020-05-22 12:45:38', '2020-05-22 12:45:38'),
(430, 27, 9, 1, '2020-05-22 13:22:28', '2020-05-22 13:22:28'),
(431, 28, 9, 1, '2020-05-22 13:22:28', '2020-05-22 13:22:28'),
(432, 30, 9, 1, '2020-05-22 13:22:28', '2020-05-22 13:22:28'),
(435, 27, 7, 1, '2020-05-22 13:27:11', '2020-05-22 13:27:11'),
(436, 28, 7, 1, '2020-05-22 13:27:11', '2020-05-22 13:27:11'),
(461, 25, 10, 1, '2020-05-23 00:26:50', '2020-05-23 00:26:50'),
(462, 28, 10, 1, '2020-05-23 00:26:50', '2020-05-23 00:26:50'),
(491, 25, 11, 1, '2020-05-23 01:30:35', '2020-05-23 01:30:35'),
(492, 28, 11, 1, '2020-05-23 01:30:35', '2020-05-23 01:30:35'),
(497, 25, 12, 1, '2020-05-23 07:34:16', '2020-05-23 07:34:16'),
(498, 28, 12, 1, '2020-05-23 07:34:16', '2020-05-23 07:34:16');

-- --------------------------------------------------------

--
-- Table structure for table `newsletters`
--

CREATE TABLE `newsletters` (
  `id` int(11) NOT NULL,
  `email` text CHARACTER SET utf8,
  `token` longtext,
  `status` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newsletters`
--

INSERT INTO `newsletters` (`id`, `email`, `token`, `status`, `created_at`, `updated_at`) VALUES
(3, 'test@gmail.com', NULL, 1, '2019-09-05 14:52:00', '2019-09-07 02:39:44'),
(4, 'test@gmail.com', NULL, 1, '2019-09-05 14:52:31', '2019-09-07 02:39:47'),
(5, 'dsfdsd@gmail.com', NULL, 1, '2019-09-05 14:52:47', '2019-09-07 02:39:50'),
(7, 'asasa@fmai.com', NULL, 1, '2019-09-05 14:53:47', '2019-09-07 02:39:53'),
(34, 'chirag@gmail.com', NULL, 1, '2019-09-07 01:49:08', '2019-09-07 02:39:58'),
(35, 'chirag@gamil.com', NULL, 1, '2019-09-07 01:50:11', '2019-09-07 02:40:01'),
(36, 'chiag@ff.com', NULL, 1, '2019-09-07 01:53:44', '2019-09-07 02:40:03'),
(37, 'ompate@gmail.com', NULL, 1, '2019-09-07 03:06:02', '2019-09-14 04:14:36'),
(40, 'Hi@gmail.com', NULL, 1, '2019-09-07 04:03:29', '2020-05-21 11:03:23'),
(41, 'sds@gmail.com', NULL, 1, '2019-09-07 04:08:00', '2020-05-21 11:03:28'),
(42, 'hishi@gmail.com', '15678320706ndyn91567832070', 0, '2019-09-06 23:24:30', '2019-09-06 23:24:30'),
(43, 'ddhishi@gmail.com', '15678320844r99aq1567832084', 0, '2019-09-06 23:24:44', '2019-09-06 23:24:44'),
(44, 'yu@gmail.com', NULL, 0, '2019-09-06 23:25:50', '2019-09-06 23:44:28'),
(45, 'test@yopmail.com', '15682234107dhx4f1568223410', 0, '2019-09-11 12:06:50', '2019-09-11 12:06:50'),
(46, 'dsds@yopmail.com', '15682234570y79sk1568223457', 0, '2019-09-11 12:07:37', '2019-09-11 12:07:37'),
(47, 'sdsd@yopmail.com', '15682237179cpiaw1568223717', 0, '2019-09-11 12:11:57', '2019-09-11 12:11:57'),
(48, 'sdasd@yopmail.com', '1568223764uulux61568223764', 0, '2019-09-11 12:12:44', '2019-09-11 12:12:44'),
(49, 'sadasd@gmail.com', '15682243748p082h1568224374', 0, '2019-09-11 12:22:54', '2019-09-11 12:22:54'),
(50, 'sdsdnfnfdnf@yopmail.com', '1568225065kt87sg1568225065', 0, '2019-09-11 12:34:25', '2019-09-11 12:34:25'),
(51, 'sur@yopmail.com', '1568225376bth3s11568225376', 0, '2019-09-11 12:39:36', '2019-09-11 12:39:36'),
(52, 'dfdfgdf@yopmail.com', '1568225429ci7mez1568225429', 0, '2019-09-11 12:40:29', '2019-09-11 12:40:29'),
(53, 'drgdfgdfg@yopmail.com', '15682254657uurdh1568225465', 0, '2019-09-11 12:41:05', '2019-09-11 12:41:05'),
(54, 'tthss@yopmail.com', '1568226001g1w9331568226001', 0, '2019-09-11 12:50:01', '2019-09-11 12:50:01'),
(55, 'sdfsdfsdkrkjrjsj@yopmail.com', '1568231999dwi9s81568231999', 0, '2019-09-11 14:29:59', '2019-09-11 14:29:59'),
(56, 'oms@yopmail.com', '15682334518t4ylc1568233451', 0, '2019-09-11 14:54:11', '2019-09-11 14:54:11'),
(57, 'HI@yopmail.com', '1568233509fecsey1568233509', 0, '2019-09-11 14:55:09', '2019-09-11 14:55:09'),
(58, 'sdsdf@gmail.com', '1568233570dds9t61568233570', 0, '2019-09-11 14:56:10', '2019-09-11 14:56:10'),
(59, 'sdas@gmail.com', '1568233638bmwjqd1568233638', 0, '2019-09-11 14:57:18', '2019-09-11 14:57:18'),
(60, 'asdas@gmai.com', '1568233702n63gxb1568233702', 0, '2019-09-11 14:58:22', '2019-09-11 14:58:22'),
(61, 'gcb1196@gmail.com', '15693507982idgoc1569350798', 0, '2019-09-24 13:16:38', '2019-09-24 13:16:38');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rights`
--

CREATE TABLE `rights` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `status` tinyint(3) UNSIGNED DEFAULT '0' COMMENT '0=inactive, 1=active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `rights`
--

INSERT INTO `rights` (`id`, `name`, `status`, `created_at`, `updated_at`, `created_by`, `last_updated_by`) VALUES
(1, 'Admin', 1, NULL, '2020-05-17 06:20:16', 0, 2),
(6, 'SEO', 1, '2020-05-17 07:23:37', '2020-05-18 09:35:40', NULL, NULL),
(7, 'Guest', 1, '2020-05-26 21:26:47', '2020-05-26 21:26:47', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `right_modules`
--

CREATE TABLE `right_modules` (
  `id` int(11) NOT NULL,
  `module_id` int(11) DEFAULT NULL,
  `right_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(3) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `right_modules`
--

INSERT INTO `right_modules` (`id`, `module_id`, `right_id`, `user_id`, `status`) VALUES
(3289, 60, 7, NULL, 1),
(3290, 61, 7, NULL, 1),
(3291, 62, 7, NULL, 1),
(3292, 63, 7, NULL, 1),
(3293, 64, 7, NULL, 1),
(3294, 65, 7, NULL, 1),
(3295, 66, 7, NULL, 1),
(3296, 67, 7, NULL, 1),
(3297, 68, 7, NULL, 1),
(3298, 69, 7, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `send_inquiry`
--

CREATE TABLE `send_inquiry` (
  `id` int(11) NOT NULL,
  `from_email` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `pieces` int(11) NOT NULL,
  `extra_request` varchar(255) NOT NULL,
  `content` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `send_inquiry`
--

INSERT INTO `send_inquiry` (`id`, `from_email`, `product_id`, `subject`, `quantity`, `pieces`, `extra_request`, `content`) VALUES
(1, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(2, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(3, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(4, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(5, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(6, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(7, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(8, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(9, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(11, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(12, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(13, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(14, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(15, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(16, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(17, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(18, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(19, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(20, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(21, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(22, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(23, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(24, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(25, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(26, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(27, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(28, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd'),
(29, 'akhielsh@gmial.com', 3, 'submect', 3, 33, ' asfskfas', 'dsfasfsd');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `site_url` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `second_email` varchar(100) DEFAULT NULL,
  `address` text,
  `second_address` text,
  `mobile` varchar(255) DEFAULT NULL,
  `second_mobile` varchar(255) DEFAULT NULL,
  `logo_image` text,
  `author_image` longtext CHARACTER SET utf8,
  `email_image` text,
  `favicon_image` text,
  `home_page_banner_image` text,
  `author_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `author_description_one` text CHARACTER SET utf8,
  `author_description_two` text CHARACTER SET utf8,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `site_url`, `email`, `second_email`, `address`, `second_address`, `mobile`, `second_mobile`, `logo_image`, `author_image`, `email_image`, `favicon_image`, `home_page_banner_image`, `author_name`, `author_description_one`, `author_description_two`, `created_at`, `updated_at`) VALUES
(1, 'http://softtechover.com/', 'admin@yopmail.com', 'admin@yopmail.com', '<p><span style=\"font-size: 14px;\">413A ,3A2 , Ahmedabad,</span></p>\r\n<p><span style=\"font-size: 14px;\">IN 3640015, India</span></p>\r\n<p><span style=\"font-size: 14px;\"><strong>Phone</strong>: <a href=\"tel:9825326562\">9825326562</a><br /><strong>Email</strong>: <a href=\"mailto:gcb1196@gmail.com\">gcb1196@gmail.com</a></span></p>', '413A ,3A2 , Ahmedabad,\r\n\r\nIN 3640015, India\r\n\r\nPhone: 9825326562\r\nEmail: gcb1196@gmail.com', '9825326562', '9825326562', '1583040468.logo.png', '1583040468.IMG_20191006_010555.jpg', '1583040468.logo.png', '1589975835.1578230881.c821dc7f-7347-498e-a83f-ee1263b72a93_200x200.png', '1589975835.1578230881.c821dc7f-7347-498e-a83f-ee1263b72a93_200x200.png', 'Chirag Ghevariya', 'Chirag Ghevariya Freelancer developer', 'Chirag Ghevariya Freelancer developer', '2018-07-11 18:30:00', '2020-05-23 09:58:33');

-- --------------------------------------------------------

--
-- Table structure for table `social_medias`
--

CREATE TABLE `social_medias` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `font_awesome` text CHARACTER SET utf8,
  `url` text,
  `image` longtext CHARACTER SET utf8,
  `status` tinyint(3) DEFAULT '1' COMMENT '1=active,0=inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `social_medias`
--

INSERT INTO `social_medias` (`id`, `title`, `font_awesome`, `url`, `image`, `status`, `created_at`, `updated_at`) VALUES
(9, 'Facebook', 'fa-facebook', 'https://www.facebook.com/GCB1196', 'image_4a87af99d62318fcff728df2a0807a2d.png', 1, '2018-11-04 03:15:50', '2019-08-21 12:29:18'),
(10, 'Skype', 'fa-skype', 'https://skype.com', 'image_c37f32ab16ecd8db58dd95bd7a96da8c.png', 0, '2018-11-04 03:19:55', '2020-03-14 08:09:20'),
(12, 'Instagram', 'fa-instagram', 'https://www.instagram.com/chirag_patel1105/', '1589973090.image_6dfd3411e5a65b0f70ab654447589537.png', 1, '2018-11-04 03:20:54', '2020-05-20 05:41:30'),
(13, 'Linkdin', 'fa-linkedin', 'https://in.linkedin.com/in/chirag-ghevariya-12271395', NULL, 1, '2019-08-19 11:59:40', '2019-08-21 12:42:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `right_id` int(3) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(3) NOT NULL DEFAULT '1' COMMENT '1=active,0=inactive',
  `image` text COLLATE utf8mb4_unicode_ci,
  `forgot_password_token` text COLLATE utf8mb4_unicode_ci,
  `resetlink_send` int(11) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `right_id`, `name`, `email`, `password`, `status`, `image`, `forgot_password_token`, `resetlink_send`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'Admin', 'admin@gmail.com', '$2y$10$QbllEZuc1IQJY.tye/Z0nuZxC5GTrCJ/UGRKxXlO2NwwZQK2qJS2i', 1, '1589984747.20197818.jpeg', NULL, 0, 'ESzYTycQRGviV8fhQSGGG5S5AP1WsWSqJG2hR3TVVEGzUiEaJnb5iWzwG3cC', '2018-03-20 16:14:14', '2020-05-26 21:33:22'),
(54, 6, 'Haresh', 'adminseo@gmail.com', '$2y$10$3CfuDuCpZ7aD/p5PBIPOUOmz0ghpkX1dG71erigaadW8P9htajAgu', 1, '1589984452.20197818.jpeg', NULL, 0, NULL, '2020-05-18 04:40:52', '2020-05-20 08:50:52'),
(55, 7, 'Guest', 'admin@guest.com', '$2y$10$AWyUerwHO29APU7opJU/DeJY2pd0xvtWnJFNkuAoYGg33yU.0ezhC', 1, '1589986718.profille-image-not-foune.png', NULL, 0, NULL, '2020-05-18 05:53:30', '2020-05-26 21:33:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acl`
--
ALTER TABLE `acl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `k_category` (`category_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms`
--
ALTER TABLE `cms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_templates`
--
ALTER TABLE `email_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `multiple_category`
--
ALTER TABLE `multiple_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `blog_id` (`blog_id`);

--
-- Indexes for table `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `rights`
--
ALTER TABLE `rights`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `right_modules`
--
ALTER TABLE `right_modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `send_inquiry`
--
ALTER TABLE `send_inquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_medias`
--
ALTER TABLE `social_medias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `right_id` (`right_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acl`
--
ALTER TABLE `acl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `cms`
--
ALTER TABLE `cms`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `email_templates`
--
ALTER TABLE `email_templates`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=816;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `multiple_category`
--
ALTER TABLE `multiple_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=499;

--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `rights`
--
ALTER TABLE `rights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `right_modules`
--
ALTER TABLE `right_modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3299;

--
-- AUTO_INCREMENT for table `send_inquiry`
--
ALTER TABLE `send_inquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `social_medias`
--
ALTER TABLE `social_medias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `k_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `multiple_category`
--
ALTER TABLE `multiple_category`
  ADD CONSTRAINT `blog_id_foreigin_key` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `category_id_foreigin_key` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `right_foren_key_constraint` FOREIGN KEY (`right_id`) REFERENCES `rights` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
