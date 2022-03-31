-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2020 at 07:34 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personal_blog`
--

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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `slug`, `category_id`, `name`, `image`, `short_description`, `long_description`, `display_on_header`, `total_visitor`, `seo_title`, `seo_keyword`, `seo_description`, `status`, `created_at`, `updated_at`, `created_by`, `last_updated_by`) VALUES
(6, 'how-to-install-lamp-stack-linux-apache-mysql-php-in-ubuntu', NULL, 'How to install (LAMP) Stack Linux,Apache,MySQL,PHP in Ubuntu', '1583040562.laravel.png', '<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially un</p>', '<p><b>Short Description</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially un</p>', 0, 15, 'Terst', 'JHOJ', 'HIHI', 1, '2020-02-29 12:59:49', '2020-03-07 07:23:47', 1, 1),
(7, 'how-to-switch-php-version-in-ubuntu', NULL, 'How to switch PHP version In Ubuntu', '1583040723.laravel.png', '<p>Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model&ndash;view&ndash;controller architectural pattern and based on Symfony.</p>', '<p>Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model&ndash;view&ndash;controller architectural pattern and based on Symfony.</p>', 0, 5, 'Test', 'Switch PHP Version', 'HI', 1, '2020-03-01 00:02:03', '2020-03-07 07:24:49', 1, 1),
(8, 'how-to-install-phpmyadmin-with-lamp-stack-in-ubuntu', NULL, 'How to install phpMyAdmin with LAMP Stack In Ubuntu', '1583562008.image_43a3c80c979f3c8b23065a06a288ed35.png', '<p>How to install phpMyAdmin with LAMP Stack In Ubuntu ,How to install phpMyAdmin with LAMP Stack In Ubuntu How to install phpMyAdmin with LAMP Stack In Ubuntu,How to install phpMyAdmin with LAMP Stack In Ubuntu</p>', NULL, 0, 1, NULL, NULL, NULL, 1, '2020-03-07 00:40:20', '2020-03-07 06:46:27', 1, 1);

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
(25, 'laravel', 'Laravel', '#00ffff', 'image_87be6a9f50206eef353b4bd2bdc6e17b.png', '<p>नारायणपुर जिले की ओरछा तहसील के अबूझमाड़ में इस योजना को परखने की कोशिशें चल रही हैं. सागौन और साल के पेड़ों से ढके 3,905 वर्ग किमी पहाड़ी इलाके में मुख्यत: अबूझमाडिय़ा जनजाति के लोग रहते हैं. इसके अलावा दादमी मारिया, गोंड और अहीर सरीखी दूसरी जनजातियां भी हैं. यहां आवाजाही का एकमात्र जरिया पगडंडी या फिर पहाड़ की चढ़ाई है. अबूझमाड़ को माओवादियों की मांद माना जाता है क्योंकि इस बीहड़ इलाके में आना-जाना दुश्वार होने के चलते यह विद्रोही नेताओं और कैडर के लिए सुरक्षित पनाहगाह का काम करता है. मैदानी इलाकों के उलट, यहां झोंपड़ों वाले गांवों की बस्तियां पास-पास न होकर फैली होती हैं. अबूझमाड़ मुश्किलों से दो-चार किसी इलाके जैसा ही है. एक ओर सरकार दावा करती है कि यहां के गांवों में भीतर तक उसकी पहुंच नहीं, लेकिन कागज पर प्रधानमंत्री आवास और स्वच्छता मिशन जैसे कार्यक्रम चल रहे हैं.</p>', NULL, 1, 1, 1, '2019-07-20 13:44:14', '2020-02-29 19:51:11'),
(26, 'jquery', 'Jquery', '#0000ff', 'image_d22be97785f990bee957fa0b60a47418.png', NULL, NULL, 1, 1, 1, '2019-07-20 13:54:34', '2020-02-29 19:35:19'),
(27, 'ubuntu', 'Ubuntu', '#c53a3e', 'image_f6715404fb8c5c3845f43e68fad9a611.png', NULL, NULL, 1, 1, 1, '2019-08-23 13:04:05', '2020-02-29 19:35:19'),
(28, 'php', 'PHP', '#0000ff', 'image_43a3c80c979f3c8b23065a06a288ed35.png', NULL, NULL, 1, 1, 1, '2019-08-23 13:05:47', '2020-02-29 19:35:19'),
(29, 'version-control', 'Version Controll', '#ff0080', 'image_851a1127942b3a780ea42800055484db.jpg', NULL, NULL, 1, 1, 1, '2019-09-27 20:14:10', '2020-02-29 19:35:19'),
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
(4, NULL, 'privacy-policy', NULL, 'Privacy Policy', NULL, '&lt;p&gt;&lt;strong&gt;Lorem Ipsum&lt;/strong&gt;&amp;nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&amp;#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&lt;/p&gt;', '&lt;p&gt;&lt;strong&gt;Lorem Ipsum&lt;/strong&gt;&amp;nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&amp;#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;Lorem Ipsum&lt;/strong&gt;&amp;nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&amp;#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;Lorem Ipsum&lt;/strong&gt;&amp;nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&amp;#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&lt;/p&gt;', NULL, NULL, NULL, 1, 'Privacy policy', 0, 0, '2018-05-28 06:23:49', '2019-07-31 21:48:30', 1, 1),
(5, NULL, 'contact-us', NULL, 'Contact Us', NULL, '<p><b>Mobile No:- 9825326562</b></p>\r\n\r\n<p><b>Email :- gcb1196@gmail.com</b></p>\r\n\r\n<p>&nbsp;</p>', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', 'title', 'keyword', 'dewcritpikonm', 1, 'Contact Us', 0, 0, '2018-11-04 06:13:21', '2019-09-29 05:36:21', 1, 1),
(8, NULL, 'about-us', 1, 'About Us', NULL, '<aside class=\"main-sidebar\"><!-- sidebar: style can be found in sidebar.less -->\r\n<section class=\"sidebar\"><!-- sidebar menu: : style can be found in sidebar.less -->\r\n<ul class=\"sidebar-menu\" data-widget=\"tree\"><!--?php /*<li class=\"active\"-->\r\n	<li>HIHI</li>\r\n</ul>\r\n</section>\r\n<!-- /.sidebar --></aside>', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', NULL, NULL, NULL, 1, 'About Us', 0, 0, '2018-11-04 08:51:55', '2020-01-18 08:28:59', 1, 1);

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
(813, 'verify_front_news_letter', 'Verify your subscription', 'test@yopmail.com', '&lt;table align=&quot;center&quot; bgcolor=&quot;#FFF&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;border-collapse: collapse; width: 100%; max-width: 540px;&quot;&gt;\r\n	&lt;tbody&gt;\r\n		&lt;tr&gt;\r\n			&lt;td style=&quot;border-collapse: collapse; color: #fff;&quot; width=&quot;10&quot;&gt;&amp;nbsp;&lt;/td&gt;\r\n			&lt;td align=&quot;center&quot; valign=&quot;middle&quot;&gt;\r\n			&lt;table align=&quot;center&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; width=&quot;520&quot;&gt;\r\n				&lt;tbody&gt;\r\n					&lt;tr&gt;\r\n						&lt;td height=&quot;10&quot; width=&quot;100%&quot;&gt;&amp;nbsp;&lt;/td&gt;\r\n					&lt;/tr&gt;\r\n					&lt;tr&gt;\r\n						&lt;td align=&quot;left&quot; style=&quot;font-family: \'HelveticaNeue\',Arial,sans-serif;&quot; valign=&quot;middle&quot;&gt;\r\n						&lt;div&gt;\r\n						&lt;h2 style=&quot;text-align: center;&quot;&gt;Dear &lt;b&gt;Subscriber&lt;/b&gt;&lt;/h2&gt;\r\n\r\n						&lt;p style=&quot;text-align: center;&quot;&gt;Thank you for subscribed via &lt;a 17bbc1=&quot;&quot; href=&quot;###SITE_URL###&quot; style=&quot;color: #17bbc1;&quot;&gt;###SITE_NAME&lt;/a&gt;###.&lt;/p&gt;\r\n\r\n						&lt;p style=&quot;text-align: center;&quot;&gt;&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;To get latest news and update verify your account Please &lt;strong&gt;&lt;a href=&quot;###LINK###&quot; style=&quot;color: #17bbc1;&quot; target=&quot;_blank&quot;&gt;click here&lt;/a&gt;&lt;/strong&gt;&lt;/p&gt;\r\n\r\n						&lt;hr /&gt;\r\n						&lt;h3 style=&quot;clear: both; text-align: center; color: #000; margin: 0; font-weight: 300;&quot;&gt;&amp;nbsp;&lt;/h3&gt;\r\n						&lt;/div&gt;\r\n						&lt;/td&gt;\r\n					&lt;/tr&gt;\r\n				&lt;/tbody&gt;\r\n			&lt;/table&gt;\r\n			&lt;/td&gt;\r\n			&lt;td width=&quot;10&quot;&gt;&amp;nbsp;&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n	&lt;/tbody&gt;\r\n&lt;/table&gt;\r\n\r\n&lt;p style=&quot;display: none;&quot;&gt;&amp;nbsp;&lt;/p&gt;', 1, '2019-09-07 04:25:52', '2019-09-07 04:31:15');

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
(26, 27, 6, 1, '2020-03-07 00:36:01', '2020-03-07 00:36:01'),
(27, 28, 6, 1, '2020-03-07 00:36:02', '2020-03-07 00:36:02'),
(28, 30, 6, 1, '2020-03-07 00:36:02', '2020-03-07 00:36:02'),
(35, 27, 8, 1, '2020-03-07 00:50:08', '2020-03-07 00:50:08'),
(36, 28, 8, 1, '2020-03-07 00:50:08', '2020-03-07 00:50:08'),
(37, 30, 8, 1, '2020-03-07 00:50:08', '2020-03-07 00:50:08'),
(40, 27, 7, 1, '2020-03-07 06:44:05', '2020-03-07 06:44:05'),
(41, 28, 7, 1, '2020-03-07 06:44:05', '2020-03-07 06:44:05');

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
(40, 'Hi@gmail.com', NULL, 0, '2019-09-07 04:03:29', '2019-09-07 04:03:29'),
(41, 'sds@gmail.com', NULL, 0, '2019-09-07 04:08:00', '2019-09-07 04:08:00'),
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
(1, 'http://softtechover.com/', 'admin@yopmail.com', 'admin@yopmail.com', '<p>413A ,3A2 , Ahmedabad,</p>\r\n\r\n<p>IN 3640015, India</p>\r\n\r\n<p>Phone: 9825326562<br />\r\nEmail: gcb1196@gmail.com</p>', '413A ,3A2 , Ahmedabad,\r\n\r\nIN 3640015, India\r\n\r\nPhone: 9825326562\r\nEmail: gcb1196@gmail.com', '9825326562', '9825326562', '1583040468.logo.png', '1583040468.IMG_20191006_010555.jpg', '1583040468.logo.png', 'favicon_image_f28cfdcfee6f09e19a107f7129c4c9ef.png', 'home_page_banner_image_9132e5724642fdbccd370373225d4a8e.png', 'Chirag Ghevariya', 'Hire Me for AngularJs | Laravel | Codeigniter | PHP | MySQL | Ajax | Jquery | Javascript | API | Social Media Login API | FCM | Pushar Notification  and etc..', 'Hire Me for AngularJs | Laravel | Codeigniter | PHP | MySQL | Ajax | Jquery | Javascript | API | Social Media Login API | FCM | Pushar Notification  and etc..', '2018-07-11 18:30:00', '2020-02-29 23:57:48');

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
(10, 'Skype', 'fa-skype', 'https://skype.com', 'image_c37f32ab16ecd8db58dd95bd7a96da8c.png', 1, '2018-11-04 03:19:55', '2019-08-21 12:27:22'),
(12, 'Instagram', 'fa-instagram', 'https://www.instagram.com/chirag_patel1105/', 'image_6dfd3411e5a65b0f70ab654447589537.png', 1, '2018-11-04 03:20:54', '2019-08-21 12:41:30'),
(13, 'Linkdin', 'fa-linkedin', 'https://in.linkedin.com/in/chirag-ghevariya-12271395', NULL, 1, '2019-08-19 11:59:40', '2019-08-21 12:42:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_type` int(3) DEFAULT '1' COMMENT '0: Admin, 1: Buyer, 2: Supplier',
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(3) NOT NULL DEFAULT '1' COMMENT '1=active,0=inactive',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` int(100) NOT NULL COMMENT '1 admin 2 for buyer and 3 for supplier'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_type`, `name`, `email`, `password`, `status`, `remember_token`, `created_at`, `updated_at`, `type`) VALUES
(1, 0, 'Chirag Ghevariya', 'admin@gmail.com', '$2y$10$QMxYKoxqR7dN4AcZ3DEEHuzG7UiGFAju51DLtVQxKCB5zuUNYr93m', 1, 'j3Hv5e34UvvCpGVPgynnktnhrbsDlfWEllhMNWzHPXb0XKzjSTeyJv1DzRki', '2018-03-20 16:14:14', '2018-11-19 05:28:25', 1),
(29, 1, 'Buyer', 'buyer4@gmail.com', '$2y$10$xi88oUPzJLFsu1D17POlpesHkEkmA02Mcc77OU287HcHWFrJw2p26', 1, 'tH8OVqzVrQwmGQSaxmRl6C3mSzIrnxWQYgwm8veUik2gCLZGqxHrtbwpSLaj', '2018-03-20 16:14:14', '2019-07-06 05:38:26', 2),
(49, 1, 'Buyer', 'buyer012398@gmail.com', '$2y$10$xi88oUPzJLFsu1D17POlpesHkEkmA02Mcc77OU287HcHWFrJw2p26', 1, 'tH8OVqzVrQwmGQSaxmRl6C3mSzIrnxWQYgwm8veUik2gCLZGqxHrtbwpSLaj', '2018-03-20 16:14:14', '2019-07-06 05:38:26', 0),
(50, 1, 'Buyer', 'buyer1231@gmail.com', '$2y$10$xi88oUPzJLFsu1D17POlpesHkEkmA02Mcc77OU287HcHWFrJw2p26', 1, 'tH8OVqzVrQwmGQSaxmRl6C3mSzIrnxWQYgwm8veUik2gCLZGqxHrtbwpSLaj', '2018-03-20 16:14:14', '2019-07-06 05:38:26', 2),
(52, 1, 'akhilesh11', 'supplier123@gmail.com', '$2y$10$xi88oUPzJLFsu1D17POlpesHkEkmA02Mcc77OU287HcHWFrJw2p26', 1, 'tH8OVqzVrQwmGQSaxmRl6C3mSzIrnxWQYgwm8veUik2gCLZGqxHrtbwpSLaj', '2018-03-20 16:14:14', '2019-07-06 05:38:26', 3);

--
-- Indexes for dumped tables
--

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
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=814;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
