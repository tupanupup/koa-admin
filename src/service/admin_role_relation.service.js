const { Op } = require('sequelize');

const Role = require('../model/role.model');
const AdminRoleRelation = require('../model/admin_role_relation.model');

class AdminRoleRelationService {
  // 根据adminId获取对应的角色列表
  async getRolesByAdminId(adminId) {
    // 查询adminId对应的roleId
    const result = await AdminRoleRelation.findAll({
      where: {
        'admin_id': adminId
      }
    });
    const roleIdList = result.map(item => {
      return {
        id: item.dataValues.role_id,
      };
    });
    // 根据角色id列表查询对应的角色
    return await Role.findAll({
      where: {
        [Op.or]: roleIdList
      }
    });
  }
}

module.exports = new AdminRoleRelationService();
