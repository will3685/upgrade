# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning database"
User.destroy_all 

puts "Creating users"
(0..20).each do |f|
  email = Faker::Internet.email
  password = rand(100000..600000)
  firstname = Faker::Name.first_name
  lastname = Faker::Name.last_name
  bio = Faker::BossaNova.song
  turma = Faker::Company.name
  ano_ingresso = rand(1900..2022)
  ano_saida = rand(1990..2022)
  user = User.create(email: email, encrypted_password: password, firstname: firstname, lastname: lastname, turma: turma, ano_ingresso: ano_ingresso, ano_saida: ano_saida)
  p "Created #{user.firstname} user"
end

