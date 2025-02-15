CREATE TABLE `belt` (
	`belt_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_parameter` integer,
	`after_parameter` integer,
	`combined_parameter` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `carton` (
	`carton_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_parameter` integer,
	`after_parameter` integer,
	`combined_parameter` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `hmi` (
	`hmi_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_parameter` integer,
	`after_parameter` integer,
	`combined_parameter` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `mechanic` (
	`mechanic_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_parameter` integer,
	`after_parameter` integer,
	`combined_parameter` integer,
	`mechanic_picture` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `opening` (
	`opening_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_parameter` integer,
	`after_parameter` integer,
	`combined_parameter` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `outfeedConveyor` (
	`outfeedConveyor_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_parameter` integer,
	`after_parameter` integer,
	`combined_parameter` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `timer` (
	`timer_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_parameter` integer,
	`after_parameter` integer,
	`combined_parameter` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `transfer` (
	`transfer_id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`before_active` integer,
	`after_active` integer,
	`combined_active` integer,
	`before_inactive` integer,
	`after_inactive` integer,
	`combined_inactive` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `user` (
	`user_id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
