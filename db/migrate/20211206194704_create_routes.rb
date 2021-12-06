class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :starting_point
      t.string :destination
      t.float :distance
      t.date :date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
