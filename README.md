# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

##　messagesテーブル
|Column|Type|Options|
|------|----|-------|
|boy|text|
|image|string|
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association
  belong_to :group
  belong_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|member|string|
|name|string|null: false|

### Association
  has_many :messages
  has_many :user_groups

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|pass|string|null: false|

### Association
  has_many :messages
  has_many :user_groups

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
  belongs_to :group
  belongs_to :user