# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




puts("Seeding users...")
u1 = User.create(username:"Aristela Marku", password: "1")
u2 = User.create(username:"max", password: "1")

puts("Seeding routes...")
r1 = Route.create(
    starting_point: "21000 W 10 Mile Rd, Southfield, MI 48075, USA",
    destination: "555 E Lafayette St, Detroit, MI 48226, USA",
    distance: 40.5,
    date: Date.new(2021, 12, 6),
    user_id: u1.id
)

r2 = Route.create(
    starting_point: "Flatiron School Rd, Coram, MI 48075, USA",
    destination: "3432 Moore Garden, Suite 610, 21758, West Ludiehaven, Maine, United States",
    distance: 35,
    date: Date.new(2021, 2, 26),
    user_id: u1.id
)

r3 = Route.create(
    starting_point: "40248 VonRueden Camp, Apt. 480, 18222-6651, Lake Ronhaven, Nevada, United States",
    destination: "4579 Wilfrid Stream, Suite 093, 07568, New Nels, New Hampshire, United States",
    distance: 40.5,
    date: Date.new(2021, 12, 6),
    user_id: u2.id
)

r4 = Route.create(
    starting_point: "1713 Stark Inlet, Suite 935, 43693, West Elliston, New York, United States",
    destination: "555 E Lafayette St, Detroit, MI 48226, USA",
    distance: 10.5,
    date: Date.new(2021, 3, 6),
    user_id: u2.id
)

r5 = Route.create(
    starting_point: "493 Williamson Stream, Apt. 599, 90209, New Emieburgh, Delaware, United States",
    destination: "26811 Frederik Mission, Apt. 861, 71209, Johnstown, Arizona, United States",
    distance: 35,
    date: Date.new(2021, 3, 6),
    user_id: u2.id
)


