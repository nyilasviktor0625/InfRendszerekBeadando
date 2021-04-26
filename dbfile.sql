-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Ápr 26. 12:11
-- Kiszolgáló verziója: 10.4.18-MariaDB
-- PHP verzió: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `videoteka_db_viktor_a5igrx`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `category`
--

INSERT INTO `category` (`id`, `title`) VALUES
(2, 'asdasda'),
(3, 'asdasda'),
(4, 'asdasda'),
(5, 'asdasda'),
(6, 'asdasda');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `ID_num` int(11) NOT NULL,
  `zip_number` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `house_num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `customer`
--

INSERT INTO `customer` (`id`, `firstName`, `lastName`, `age`, `ID_num`, `zip_number`, `city`, `street`, `house_num`) VALUES
(1, 'sdasdas', 'asdasdsa', 12, 0, 0, '', '', 0),
(2, 'heelloo', 'hellaaa', 13, 0, 0, '', '', 0),
(3, 'viktor', 'Nyilas', 23, 12345678, 3531, 'Miskolc', 'Aba', 37),
(4, 'asdasdas', 'dasdasd', 1231231, 1341341, 1231231, 'Miskolc', 'Aba', 12),
(5, 'asdasdas', 'dasdasd', 1231231, 1341341, 1231231, 'Miskolc', 'Aba', 12),
(6, 'asdasdas', 'dasdasd', 1231231, 1341341, 1231231, 'Miskolc', 'Aba', 12),
(7, 'asdasdas', 'dasdasd', 1231231, 1341341, 1231231, 'Miskolc', 'Aba', 12);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `dvd`
--

CREATE TABLE `dvd` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `date` text NOT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `dvd`
--

INSERT INTO `dvd` (`id`, `title`, `description`, `date`, `imgUrl`, `userId`) VALUES
(1, 'asdasd', 'asdasdas', '', 'https://matchory.com/assets/corals/images/default_product_image.png', 1),
(2, 'asdasd', 'asdasda', '', 'https://matchory.com/assets/corals/images/default_product_image.png', 1),
(3, 'Ez a cím', 'cucc leírása', '', 'https://matchory.com/assets/corals/images/default_product_image.png', 1),
(4, 'ez a módosított cím', 'ez egy módosított leírás', '', 'https://matchory.com/assets/corals/images/default_product_image.png', 2),
(5, 'nagyonjó', 'nagyonjó', '', 'https://matchory.com/assets/corals/images/default_product_image.png', 3),
(6, 'sziahello', 'sziahellodescription', '', 'https://matchory.com/assets/corals/images/default_product_image.png', 3),
(7, 'asdasd', 'asdasd', '', 'https://matchory.com/assets/corals/images/default_product_image.png', 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `dvd_categories_category`
--

CREATE TABLE `dvd_categories_category` (
  `dvdId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `dvd_categories_category`
--

INSERT INTO `dvd_categories_category` (`dvdId`, `categoryId`) VALUES
(2, 3),
(3, 5),
(4, 4),
(5, 6),
(6, 3),
(7, 3);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `dvd`
--
ALTER TABLE `dvd`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_124dbe40bbf4d63ef6bd34eca55` (`userId`);

--
-- A tábla indexei `dvd_categories_category`
--
ALTER TABLE `dvd_categories_category`
  ADD PRIMARY KEY (`dvdId`,`categoryId`),
  ADD KEY `IDX_92ffb3b0cc8beb9910c732985d` (`dvdId`),
  ADD KEY `IDX_f58325fad334627e4b468925ef` (`categoryId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `dvd`
--
ALTER TABLE `dvd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `dvd`
--
ALTER TABLE `dvd`
  ADD CONSTRAINT `FK_124dbe40bbf4d63ef6bd34eca55` FOREIGN KEY (`userId`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `dvd_categories_category`
--
ALTER TABLE `dvd_categories_category`
  ADD CONSTRAINT `FK_92ffb3b0cc8beb9910c732985db` FOREIGN KEY (`dvdId`) REFERENCES `dvd` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f58325fad334627e4b468925ef7` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
