-- CreateTable
CREATE TABLE `Application` (
    `id` VARCHAR(191) NOT NULL,
    `applicationNo` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `agreementId` VARCHAR(191) NULL,
    `productId` VARCHAR(191) NULL,
    `remarks` VARCHAR(191) NULL,
    `loanReasonId` VARCHAR(191) NULL,
    `eligibleLoanAmount` DOUBLE NULL,
    `financeAmount` DOUBLE NULL,
    `employmentTypeId` VARCHAR(191) NULL,
    `personalBankId` VARCHAR(191) NULL,
    `personalBankAccountNo` VARCHAR(191) NULL,
    `actualMonthlySalary` DOUBLE NULL,
    `employerName` VARCHAR(191) NULL,
    `employerContactNo` VARCHAR(191) NULL,
    `jobTitle` VARCHAR(191) NULL,
    `emergencyContactName` VARCHAR(191) NULL,
    `emergencyContactNo` VARCHAR(191) NULL,
    `emergencyContactRelationshipId` VARCHAR(191) NULL,
    `emergencyContactPersonEmail` VARCHAR(191) NULL,
    `employmentStartingFrom` DATETIME(3) NULL,
    `caseFollowedUp` BOOLEAN NOT NULL DEFAULT false,
    `loanApplied` INTEGER NOT NULL DEFAULT 0,
    `loanTenure` INTEGER NOT NULL DEFAULT 0,
    `loanInterestRate` INTEGER NOT NULL DEFAULT 0,
    `totalInterestAmount` DOUBLE NOT NULL DEFAULT 0,
    `submissionDate` DATETIME(3) NULL,
    `dsr` DOUBLE NOT NULL DEFAULT 0,
    `bucket` VARCHAR(191) NULL,
    `isCustomReason` BOOLEAN NOT NULL DEFAULT false,
    `customReason` VARCHAR(191) NULL,
    `productName` VARCHAR(191) NULL,
    `productCode` VARCHAR(191) NULL,
    `productMinAgeChecking` INTEGER NULL,
    `productMaxAgeChecking` INTEGER NULL,
    `productMinGrossIncomeChecking` INTEGER NULL,
    `productInterestRate` DOUBLE NULL,
    `productMinTenure` INTEGER NULL,
    `productMaxTenure` INTEGER NULL,
    `productIntervalTenure` INTEGER NULL,
    `productStampingFee` INTEGER NULL,
    `productStampingDutyPercentage` DOUBLE NULL,
    `productProcessingFee` INTEGER NULL,
    `productReferralCode` VARCHAR(191) NULL,
    `productProcessingFeeToDiscount` INTEGER NULL,
    `applicantFirstName` VARCHAR(191) NULL,
    `applicantNric` VARCHAR(191) NULL,
    `applicantPhoneNo` VARCHAR(191) NULL,
    `applicantAddress1` VARCHAR(191) NULL,
    `applicantAddress2` VARCHAR(191) NULL,
    `applicantAddress3` VARCHAR(191) NULL,
    `applicantCity` VARCHAR(191) NULL,
    `applicantPostcode` INTEGER NULL,
    `applicantState` VARCHAR(191) NULL,
    `applicantEmail` VARCHAR(191) NULL,
    `applicantGrossSalaryRange` VARCHAR(191) NULL,
    `applicantRace` VARCHAR(191) NULL,
    `applicantLoanReason` VARCHAR(191) NULL,
    `applicantEmploymentType` VARCHAR(191) NULL,
    `applicantPersonalBankNo` VARCHAR(191) NULL,
    `applicantBankName` VARCHAR(191) NULL,
    `applicantBankIbgRoutingNumber` VARCHAR(191) NULL,
    `applicantEmergencyContactRelationship` VARCHAR(191) NULL,
    `applicantPartnerId` VARCHAR(191) NULL,
    `applicantAcceptTncAndPp` BOOLEAN NULL,
    `applicantAcceptMarketing` BOOLEAN NULL,
    `applicantAcceptSharePersonalInfo` BOOLEAN NULL,
    `applicationFormFileId` VARCHAR(191) NULL,
    `experianSpkccsFileId` VARCHAR(191) NULL,
    `experianIrissFileId` VARCHAR(191) NULL,
    `experianNvrbFileId` VARCHAR(191) NULL,
    `experianAmlaFileId` VARCHAR(191) NULL,
    `providedBy` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Scheduler` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `schedule` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
