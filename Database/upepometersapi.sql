-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2021 at 09:12 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `upepometersapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `customeraccount`
--

CREATE TABLE `customeraccount` (
  `id` int(11) NOT NULL,
  `AccountNumber` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customeraccount`
--

INSERT INTO `customeraccount` (`id`, `AccountNumber`) VALUES
(1, '11'),
(2, '1123'),
(3, ''),
(4, '1191'),
(5, '18181'),
(6, '11po'),
(7, 'A11B22');

-- --------------------------------------------------------

--
-- Table structure for table `metersdata`
--

CREATE TABLE `metersdata` (
  `Id` int(11) NOT NULL,
  `MeterCode` bigint(50) NOT NULL,
  `Longitude` double DEFAULT NULL,
  `Latitude` double DEFAULT NULL,
  `imei` bigint(50) NOT NULL,
  `ZoneId` bigint(50) NOT NULL,
  `DateInstalled` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metersdata`
--

INSERT INTO `metersdata` (`Id`, `MeterCode`, `Longitude`, `Latitude`, `imei`, `ZoneId`, `DateInstalled`) VALUES
(3, 123567, 36.840658467, -1.265137867, 1234567, 6, '0000-00-00'),
(5, 3433, 37.07927, -1.057, 123, 6, '2021-08-22'),
(43, 112, 0, NULL, 11, 6, '0000-00-00'),
(44, 11, 0, 0, 12, 6, '0000-00-00'),
(45, 1123, 0, 0, 1124, 6, '0000-00-00'),
(46, 0, 0, 0, 1124567, 6, '0000-00-00'),
(47, 1191, 0, 0, 1192, 6, '0000-00-00'),
(48, 18181, 0, 0, 18181, 6, '0000-00-00'),
(49, 1159, 0, 0, 11590, 6, '0000-00-00'),
(50, 112233, 0, 0, 335566, 6, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `userprofile`
--

CREATE TABLE `userprofile` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userprofile`
--

INSERT INTO `userprofile` (`id`, `FirstName`, `LastName`) VALUES
(1, 'Test', 'Test'),
(2, 'B', 'C'),
(3, 'W', 'E'),
(4, '', ''),
(5, 'O', 'I'),
(6, 'Ajaja', 'Wiwie'),
(7, 'Aol', 'Aolt'),
(8, 'Kalisto', 'Klaus');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customeraccount`
--
ALTER TABLE `customeraccount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metersdata`
--
ALTER TABLE `metersdata`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customeraccount`
--
ALTER TABLE `customeraccount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `metersdata`
--
ALTER TABLE `metersdata`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `userprofile`
--
ALTER TABLE `userprofile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
