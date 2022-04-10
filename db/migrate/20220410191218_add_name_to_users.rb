class AddNameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :bio, :string
    add_column :users, :photo_url, :string
    add_column :users, :turma, :string
    add_column :users, :ano_ingresso, :integer
    add_column :users, :ano_saida, :integer
  end
end
